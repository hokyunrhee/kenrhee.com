import React from 'react';

import GlobalStyle from '../src/styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import { themeLight } from '../src/styles/customTheme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
