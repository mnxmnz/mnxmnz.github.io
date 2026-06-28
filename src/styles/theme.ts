export const theme = {
  colors: {
    text: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      inverse: 'var(--color-text-inverse)',
    },
    surface: {
      default: 'var(--color-surface-default)',
      glass: 'var(--color-surface-glass)',
      subtle: 'var(--color-surface-subtle)',
      accent: 'var(--color-surface-accent)',
      code: 'var(--color-surface-code)',
    },
    border: {
      subtle: 'var(--color-border-subtle)',
      default: 'var(--color-border-default)',
    },
    accent: {
      default: 'var(--color-accent-default)',
      hover: 'var(--color-accent-hover)',
    },
  },
  radius: {
    sm: '0.4rem',
    md: '1rem',
    pill: '100rem',
  },
  fontSize: {
    sm: '1.3rem',
    md: '1.5rem',
    h4: '2rem',
    h3: '2.4rem',
    h2: '2.8rem',
    h1: '3.2rem',
  },
  space: {
    4: '0.4rem',
    8: '0.8rem',
    12: '1.2rem',
    16: '1.6rem',
    20: '2rem',
    24: '2.4rem',
    32: '3.2rem',
    40: '4rem',
    48: '4.8rem',
    64: '6.4rem',
    80: '8rem',
  },
};

export const media = {
  mobile: `@media all and (min-width: 250px) and (max-width: 800px)`,
  tablet: `@media all and (min-width: 250px) and (max-width: 1240px)`,
  compact: `@media all and (min-width: 250px) and (max-width: 330px)`,
};
