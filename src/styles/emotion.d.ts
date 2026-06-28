import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      text: {
        primary: string;
        secondary: string;
        inverse: string;
      };
      surface: {
        default: string;
        glass: string;
        subtle: string;
        accent: string;
        code: string;
      };
      border: {
        subtle: string;
        default: string;
      };
      accent: {
        default: string;
        hover: string;
      };
    };
    radius: {
      sm: string;
      md: string;
      pill: string;
    };
    fontSize: {
      sm: string;
      md: string;
      h4: string;
      h3: string;
      h2: string;
      h1: string;
    };
    space: {
      4: string;
      8: string;
      12: string;
      16: string;
      20: string;
      24: string;
      32: string;
      40: string;
      48: string;
      64: string;
      80: string;
    };
  }
}
