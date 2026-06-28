import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const CategoryListWrap = styled.div`
  margin: 0;
`;

export const Category = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 ${props => props.theme.space[20]};
  margin: 0 0 ${props => props.theme.space[20]};
  border-bottom: 0.1rem solid ${props => props.theme.colors.border.subtle};
  font-size: ${props => props.theme.fontSize.md};
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;

  :hover {
    color: ${props => props.theme.colors.accent.default};
  }

  :nth-last-of-type(1) {
    padding: 0;
    margin: 0;
    border-bottom: none;
  }
`;
