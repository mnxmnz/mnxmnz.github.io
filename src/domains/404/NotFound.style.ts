import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const NotFoundWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${props => props.theme.space[80]} 0 0;
`;

export const Warning = styled.p`
  font-size: 15rem;
  font-weight: 500;
`;

export const NotFoundDescription = styled.p`
  margin: ${props => props.theme.space[40]} 0;
  font-size: ${props => props.theme.fontSize.h3};
  text-align: center;
`;

export const GoToHomeLink = styled(Link)`
  font-size: ${props => props.theme.fontSize.h4};
  font-weight: 500;
  color: ${props => props.theme.colors.accent.default};

  &:hover {
    color: ${props => props.theme.colors.accent.hover};
  }
`;

export const FeedbackLink = styled.a`
  width: 14rem;
  height: 5rem;
  border-radius: 1rem;
  font-size: ${props => props.theme.fontSize.md};
  font-weight: 500;
  color: ${props => props.theme.colors.text.inverse};
  background-color: ${props => props.theme.colors.accent.default};
  cursor: pointer;
  margin: ${props => props.theme.space[40]} 0;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: ${props => props.theme.fontSize.h4};
    margin: 0 ${props => props.theme.space[8]} 0 0;
  }

  &:hover {
    background-color: ${props => props.theme.colors.accent.hover};
  }
`;
