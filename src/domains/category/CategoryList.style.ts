import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const CategoryListWrap = styled.div`
  margin: 5rem 0 0;
  border-radius: 1rem;
`;

export const Category = styled(Link)`
  display: flex;
  justify-content: space-between;
  margin: 0 0 1.3rem;
  padding: 2rem;
  border-radius: 1rem;
  font-size: 1.8rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 0 0.2rem ${props => props.theme.colors.black_200};

  :hover {
    background-color: ${props => props.theme.colors.lightgray_500};
  }

  :nth-last-of-type(1) {
    margin: 0;
  }
`;
