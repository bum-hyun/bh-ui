import { Theme } from "@emotion/react";

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      secondary: string
    };
  }
}

const lightTheme: Theme = {
  colors: {
    primary: '#8136fe',
    secondary: '#f6f0ff',
  },
}

export const theme = {
  light: lightTheme,
  dark: lightTheme
}
