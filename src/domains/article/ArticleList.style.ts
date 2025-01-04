import styled from '@emotion/styled';
import { GoLinkExternal } from 'react-icons/go';

import { customMQ } from '@/styles/theme';

export const ArticlePageTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0 0 6rem;
  text-align: center;
  word-break: keep-all;
`;

export const ArticleItem = styled.a`
  position: relative;
  display: block;
  margin: 0 0 2rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.2rem ${props => props.theme.colors.black_200};

  :hover {
    background-color: ${props => props.theme.colors.lightgray_500};
  }
`;

export const ArticleTitle = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: keep-all;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 2.1rem;
  font-weight: 500;
  line-height: 140%;

  ${customMQ} {
    -webkit-line-clamp: 3;
  }
`;

export const ArticleReview = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  -webkit-line-clamp: 3;
  overflow: hidden;
  word-break: keep-all;
  font-size: 1.5rem;
  line-height: 130%;
  margin: 1.5rem 2rem 0 0;

  ${customMQ} {
    -webkit-line-clamp: 3;
  }
`;

export const ArticleLinkIcon = styled(GoLinkExternal)`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 1.6rem;
  height: 1.6rem;
  color: ${props => props.theme.colors.darkgray_800};
`;
