export const theme = {
  colors: {
    text: {
      primary: 'rgba(41, 40, 45, 1)',
      secondary: 'rgba(98, 92, 96, 0.8)',
      inverse: 'rgba(255, 255, 255, 1)',
    },
    surface: {
      default: 'rgba(255, 255, 255, 1)',
      glass: 'rgba(255, 255, 255, 0.8)',
      subtle: 'rgba(241, 237, 233, 0.5)',
      accent: 'rgba(231, 231, 250, 0.5)',
      code: 'rgba(233, 236, 239, 1)',
    },
    border: {
      subtle: 'rgba(98, 92, 96, 0.1)',
      default: 'rgba(98, 92, 96, 0.3)',
    },
    accent: {
      default: 'rgba(104, 104, 172, 1)',
      hover: 'rgba(144, 144, 205, 1)',
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
