const breakpoints = {
  mobile: '800px',
  tablet: '1240px',
  small: '330px',
  minimum: '250px',
} as const;

const colors = {
  black: {
    200: 'rgba(0, 0, 0, 0.2)',
    400: 'rgba(0, 0, 0, 0.4)',
  },
  gray: {
    dark: {
      100: 'rgba(98, 92, 96, 0.1)',
      300: 'rgba(98, 92, 96, 0.3)',
      800: 'rgba(98, 92, 96, 0.8)',
    },
    light: {
      500: 'rgba(241, 237, 233, 0.5)',
    },
  },
  primary: {
    light: 'rgba(231, 231, 250, 0.5)',
    main: 'rgba(104, 104, 172, 1)',
  },
  text: {
    primary: 'rgba(41, 40, 45, 1)',
  },
  white: {
    main: 'rgba(255, 255, 255, 1)',
  },
} as const;

export const mediaQueries = {
  mobile: `@media all and (min-width: ${breakpoints.minimum}) and (max-width: ${breakpoints.mobile})`,
  tablet: `@media all and (min-width: ${breakpoints.minimum}) and (max-width: ${breakpoints.tablet})`,
  small: `@media all and (min-width: ${breakpoints.minimum}) and (max-width: ${breakpoints.small})`,
  minWidth: (width: string) => `@media (min-width: ${width})`,
  maxWidth: (width: string) => `@media (max-width: ${width})`,
} as const;

export const theme = {
  colors,
  breakpoints,
  mediaQueries,
  legacyColors: {
    black_200: colors.black[200],
    black_400: colors.black[400],
    darkgray_100: colors.gray.dark[100],
    darkgray_300: colors.gray.dark[300],
    darkgray_800: colors.gray.dark[800],
    lightgray_500: colors.gray.light[500],
    text_1000: colors.text.primary,
    lightprimary_500: colors.primary.light,
    primary_1000: colors.primary.main,
    white_1000: colors.white.main,
  },
} as const;

export const customMQ = mediaQueries.mobile;

export const headerMQ = mediaQueries.tablet;

export const minimumMQ = mediaQueries.small;

export type Theme = typeof theme;
export type Colors = typeof colors;
export type Breakpoints = typeof breakpoints;
