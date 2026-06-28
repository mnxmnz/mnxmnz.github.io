import styled from '@emotion/styled';

const DESKTOP = '@media (min-width: 1280px)';

export const TocNav = styled.nav<{ faded: boolean }>`
  display: none;

  ${DESKTOP} {
    display: block;
    position: fixed;
    top: 12.8rem;
    left: calc(50% + 40.8rem);
    width: 20rem;
    max-height: calc(100vh - 20rem);
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }

    opacity: ${props => (props.faded ? 0 : 1)};
    visibility: ${props => (props.faded ? 'hidden' : 'visible')};
    pointer-events: ${props => (props.faded ? 'none' : 'auto')};
    transition:
      opacity 0.25s ease,
      visibility 0.25s ease;
  }
`;

export const TocList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  border-left: 0.1rem solid ${props => props.theme.colors.border.subtle};
`;

export const TocLink = styled.a<{ depth: number; active: boolean }>`
  display: block;
  margin-left: -0.1rem;
  padding: ${props => props.theme.space[4]} 0 ${props => props.theme.space[4]}
    calc(${props => props.theme.space[16]} + ${props => props.depth * 1.2}rem);
  border-left: 0.2rem solid
    ${props =>
      props.active ? props.theme.colors.accent.default : 'transparent'};

  font-size: ${props => props.theme.fontSize.sm};
  line-height: 1.5;
  font-weight: ${props => (props.active ? 600 : 400)};
  color: ${props =>
    props.active
      ? props.theme.colors.accent.default
      : props.theme.colors.text.secondary};
  word-break: keep-all;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    color: ${props =>
      props.active
        ? props.theme.colors.accent.default
        : props.theme.colors.text.primary};
  }
`;
