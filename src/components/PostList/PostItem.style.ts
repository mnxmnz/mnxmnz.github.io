import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const PostItemWrap = styled(Link)`
  display: block;
  padding: 0 0 ${props => props.theme.space[32]};
  margin: 0 0 ${props => props.theme.space[32]};
  border-bottom: 0.1rem solid ${props => props.theme.colors.border.subtle};
  cursor: pointer;

  :hover {
    h1 {
      color: ${props => props.theme.colors.accent.default};
    }
  }

  :nth-last-of-type(1) {
    margin: 0;
    padding: 0;
    border-bottom: none;
  }
`;

export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h1`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: keep-all;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: ${props => props.theme.fontSize.h4};
  font-weight: 500;
  line-height: 140%;
  transition: color 0.3s ease;
`;

export const CardSummary = styled.h2`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: keep-all;
  margin: ${props => props.theme.space[12]} 0 0;
  font-size: ${props => props.theme.fontSize.md};
  line-height: 150%;
`;

export const CardDescription = styled.p`
  margin: ${props => props.theme.space[12]} 0 0;
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.colors.text.secondary};
`;
