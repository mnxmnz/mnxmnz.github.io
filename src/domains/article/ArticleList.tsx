import React from 'react';

import {
  ArticleItem,
  ArticlePageTitle,
  ArticlePublishedAt,
  ArticleReview,
  ArticleTitle,
} from './ArticleList.style';

import { articles } from '@/constants/articles';

function ArticleList() {
  const sortedArticle = articles.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
  );

  return (
    <section>
      <ArticlePageTitle>
        개발/커리어/조직 문화 관련 아티클을 간단한 리뷰와 함께 아카이빙합니다
      </ArticlePageTitle>
      {sortedArticle.map(article => (
        <ArticleItem
          key={article.url}
          href={article.url}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={article.title}
        >
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleReview>💭 {article.review}</ArticleReview>
          <ArticlePublishedAt>{article.publishedAt}</ArticlePublishedAt>
        </ArticleItem>
      ))}
    </section>
  );
}

export default ArticleList;
