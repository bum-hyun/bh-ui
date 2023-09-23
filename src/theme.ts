import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      error: string;
      success: string;
    };
  }
}

const lightTheme: Theme = {
  colors: {
    primary: "#8136fe",
    secondary: "#f6f0ff",
    error: "#f44336",
    success: "#27ae60",
  },
};

export const theme = {
  light: lightTheme,
  dark: lightTheme,
};
