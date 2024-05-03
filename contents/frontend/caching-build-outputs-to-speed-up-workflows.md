---
title: 'Gatsby 블로그 배포 속도 개선으로 생산성 높이기 (2)'
date: '2022-12-04'
category: 'Frontend'
summary: '1편에서는 의존성 캐싱으로 배포 속도를 개선하고 이번에는 빌드 결과물 캐싱으로 개선했습니다. Gatsby의 빌드 과정과 캐싱 방법을 소개합니다.'
thumbnail: './images/caching-build-outputs-to-speed-up-workflows.png'
---

## 들어가며 

본 내용은 [1편](https://mnxmnz.github.io/frontend/caching-dependencies-to-speed-up-workflows)과 이어지는 최적화 내용이지만, Gatsby 빌드 관련 최적화만 확인하실 분들은 2편만 보셔도 충분합니다. 각 내용은 의존성 캐싱과 빌드 결과물 캐싱이라는 완전히 분리된 내용입니다.

이 글에서는 main 브랜치에 변경 사항을 push 했을 때 자동으로 실행되는 Github Actions 워크플로우의 속도를 빌드 결과물 캐싱을 통해 개선한 방법을 소개합니다. 먼저, Gatsby의 빌드 과정에 대해 간단히 정리했습니다.

## 1. Gatsby Build

Gatsby는 정적 사이트 생성기로 웹 사이트를 정적 HTML, CSS, JavaScript 파일로 변환해서 더 빠르게 로딩되는 웹 페이지를 생성합니다. Gatsby 상세 내용은 ["Gatsby는 처음이라 :: 개념부터 프로젝트 시작까지"](https://mnxmnz.github.io/gatsby/what-is-gatsby)에서 확인하실 수 있습니다.

Gatsby는 두 가지 실행 모드를 제공합니다.

- **Develop** : `gatsby develop`명령어로 실행합니다.
- **Build** : `gatsby build`명령어로 실행합니다.

블로그에서는 `gatsby build`명령어로 생성된 결과물을 캐싱하므로 이와 관련된 내용만 다루겠습니다.

`gatsby build`명령어를 실행하면 사이트를 웹 브라우저에 전달할 수 있는 파일로 컴파일해서 최종 완성본을 생성합니다. 최종 완성본은 여러 최적화 단계를 거친 프로덕션에 배포할 수 있는 정적 파일로 구성됩니다. 사이트의 설정, 데이터, 코드 그리고 정적 HTML 페이지를 포함하고 있습니다. 이러한 정적 파일은 이후 클라이언트 측에서 리액트 애플리케이션으로 재구성(Rehydration)됩니다.

<details>

<summary>Hydration</summary>

클라이언트 측 JavaScript를 사용해서 서버 렌더링 HTML에 응용 프로그램의 상태와 상호 작용을 추가하는 과정입니다. Hydration은 초기 정적 HTML을 동적으로 변환해서 상태와 이벤트 처리를 가능하게 합니다. 이를 통해 웹 페이지는 로딩 속도를 유지하면서도 동적인 기능을 제공할 수 있습니다.

Gatsby는 Hydration을 사용해서 빌드 과정에서 생성된 정적 HTML을 React 애플리케이션으로 변환합니다.

</details>

전체적인 빌드 과정은 다음과 같습니다.

1. **Node 객체 생성** : `gatsby-config.js`파일과 `gatsby-node.js`파일을 사용해서 플러그인과 데이터 소스로부터 Node 객체를 생성합니다. Node 객체는 웹 사이트의 데이터를 나타냅니다.
2. **스키마 생성** : Node 객체를 분석해서 데이터의 구조와 관계를 이해하는 스키마를 생성합니다. 스키마는 GraphQL 쿼리에서 사용됩니다.
3. **페이지 생성** : JavaScript 컴포넌트를 사용해서 페이지를 생성합니다. 이 과정에서 페이지의 구조와 레이아웃을 결정합니다.
4. **GraphQL 쿼리 실행** : 각 페이지에서 필요한 데이터를 가져오기 위해 GraphQL 쿼리를 실행합니다. 필요한 정보를 미리 가져와서 페이지 로딩 속도를 최적화합니다.
5. **정적 파일 생성** : 모든 페이지와 컴포넌트의 내용을 기반으로 정적 파일을 생성합니다. 생성된 정적 파일은 `public`디렉터리에 저장됩니다. `public`디렉터리의 파일은 서버 없이 웹 브라우저에서 바로 로딩할 수 있는 형태입니다.

Gatsby는 파일 시스템에서 변경을 감지하여 필요한 부분만 다시 빌드합니다. 데이터 소스나 페이지 컴포넌트 등에 변경 사항이 없으면 이전에 생성한 캐시를 재사용하여 빠르게 빌드합니다.

`.cache`디렉터리는 빌드 과정의 중간 단계에서 사용되는 임시 저장소입니다. 빌드 중에 생성되는 중간 결과나 데이터를 저장합니다. 다음 빌드에서는 이전 작업의 결과물을 활용해서 중복 작업을 피하고 빠르게 빌드할 수 있습니다.

Gatsby는 몇 가지 경우에 캐시를 무효로(invalidated) 합니다.

1. **`package.json`**: 종속성(dependency)이 업데이트되거나 추가되면 `package.json`파일이 변경됩니다. 이러한 변경을 감지하여 새로운 종속성 정보를 반영합니다.
2. **`gatsby-config.js`**: 플러그인이 추가되거나 수정되면 플러그인 정보를 업데이트합니다.
3. **`gatsby-node.js`**: 새로운 Node API를 호출하거나 `createPage`호출을 변경하면 새로운 노드 작업을 반영합니다.

## 2. 빌드 결과물 캐싱하기

Gatsby 빌드 과정에 대해 살펴봤으니 GitHub Actions에서 빌드 결과물을 캐싱하는 방법에 대해서 알아보겠습니다. 아래는 main 브랜치에 push 했을 때 자동으로 실행되는 블로그 배포 YAML 파일입니다.

```yml
name: Deploy Gatsby Blog with GitHub Actions

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-22.04
    permissions:
      contents: write
    concurrency:
      group: ${{ github.workflow }}-${{ github.ref }}
    steps:
      # 1. 현재의 commit HEAD에 위치하게 합니다.
      - name: Checkout
        uses: actions/checkout@v3

      # 2. Node.js 18버전을 사용합니다.
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18.x'

      # 3. production 환경에서 필요한 의존성만 설치합니다.
      - name: Install Dependencies
        run: yarn install --production

      # 4. '.cache' 폴더를 캐싱합니다.
      - name: Cache Gatsby '.cache'
        uses: actions/cache@v3
        id: gatsby-cache
        with:
          path: .cache
          key: ${{ runner.OS }}-cache-gatsby
          restore-keys: |
            ${{ runner.OS }}-cache-gatsby

      # 5. 'public' 폴더를 캐싱합니다.
      - name: Cache Gatsby 'public'
        uses: actions/cache@v3
        id: gatsby-public
        with:
          path: public
          key: ${{ runner.OS }}-public-gatsby
          restore-keys: |
            ${{ runner.OS }}-public-gatsby

      # 6. 배포에 필요한 Build 파일을 생성합니다.
      - name: Run Build
        run: yarn build --prefix-paths
        env:
          NODE_ENV: production

      # 7. 배포합니다.
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        if: ${{ github.ref == 'refs/heads/main' }}
        with:
          github_token: ${{ secrets.ACCESS_TOKEN }}
          publish_branch: gh-pages
          publish_dir: ./public
```

4번과 5번 단계에서 `.cache`와 `public`을 캐싱했습니다.

### 3. 배포 속도 개선으로 생산성 높이기

1편의 [Gatsby 블로그 배포 속도 개선으로 생산성 높이기](https://mnxmnz.github.io/frontend/caching-dependencies-to-speed-up-workflows)의 의존성 캐싱과 2편의 빌드 결과물 캐싱 과정을 모두 실행하는 최종 `yml` 파일은 다음과 같습니다.

```yml
name: Deploy Gatsby Blog with GitHub Actions

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-22.04
    permissions:
      contents: write
    concurrency:
      group: ${{ github.workflow }}-${{ github.ref }}
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18.x'

      # 의존성을 캐싱합니다.
      - name: Cache Dependencies
        id: yarn-cache
        uses: actions/cache@v3
        with:
          # 캐시 대상을 정합니다.
          path: node_modules
          # 캐시 무효화는 yarn.lock 파일을 기준으로 합니다.
          key: ${{ runner.OS }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.OS }}-yarn-

      # yarn.lock 파일이 변경되지 않았다면 캐싱된 node_modules를 사용합니다.
      # 복구할 캐시가 없을 때만 의존성을 설치합니다.
      - name: Install Dependencies
        if: steps.yarn-cache.outputs.cache-hit != 'true'
        run: yarn install --production --pure-lockfile

      - name: Cache Gatsby '.cache'
        uses: actions/cache@v3
        id: gatsby-cache
        with:
          path: .cache
          key: ${{ runner.OS }}-cache-gatsby
          restore-keys: |
            ${{ runner.OS }}-cache-gatsby

      - name: Cache Gatsby 'public'
        uses: actions/cache@v3
        id: gatsby-public
        with:
          path: public
          key: ${{ runner.OS }}-public-gatsby
          restore-keys: |
            ${{ runner.OS }}-public-gatsby

      - name: Run Build
        run: yarn build --prefix-paths
        env:
          NODE_ENV: production

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        if: ${{ github.ref == 'refs/heads/main' }}
        with:
          github_token: ${{ secrets.ACCESS_TOKEN }}
          publish_branch: gh-pages
          publish_dir: ./public
```

이러한 의존성 및 빌드 파일 캐싱으로 배포 속도를 개선해서 전체 배포 시간 6분 59초를 2분 27초로 단축할 수 있었습니다 🎉

## 마치며

1. `gatsby build`명령어로 사이트를 웹 브라우저에 전달할 수 있는 정적 파일로 컴파일합니다. 정적 파일은 브라우저에서 로딩되고 클라이언트 측에서는 리액트 애플리케이션으로 재구성됩니다.
2. 빌드 과정은 Node 객체 생성, 스키마 생성, 페이지 생성, GraphQL 쿼리 실행, 정적 파일 생성 단계를 거칩니다.
3. Gatsby는 파일 시스템으로 변경을 감지하여 필요한 부분만 다시 빌드합니다. 중간 결과를 저장하는 역할을 하는 `.cache`디렉터리를 활용하여 이전 작업 결과를 재사용합니다.
4. `package.json`, `gatsby-config.js`, `gatsby-node.js` 파일이 변경되거나 업데이트될 때 캐시를 갱신합니다.

> 블로그 배포 속도 개선 관련 글은 1편과 2편으로 이루어져 있습니다.

- [Gatsby 블로그 배포 속도 개선으로 생산성 높이기 (1)](https://mnxmnz.github.io/frontend/caching-dependencies-to-speed-up-workflows)
- [Gatsby 블로그 배포 속도 개선으로 생산성 높이기 (2)](https://mnxmnz.github.io/frontend/caching-build-outputs-to-speed-up-workflows)

---

참고 자료 📩

- [Overview of the Gatsby Build Process | Gatsby](https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process)
- [Build Caching | Gatsby](https://www.gatsbyjs.com/docs/build-caching)
