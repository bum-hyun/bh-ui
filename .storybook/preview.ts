import { ThemeProvider } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import GlobalStyle from "../src/GlobalStyle";

import { theme } from '../src/theme';

const decorators = [
  withThemeFromJSXProvider({
    themes: { light: theme.light },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle
  })
];

const preview = {
  decorators,
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
