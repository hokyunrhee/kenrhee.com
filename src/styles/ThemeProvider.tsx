import { observer } from 'mobx-react-lite';

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import GlobalStyle from './GlobalStyle';
import { themeLight, themeDark } from './customTheme';

import ThemeStore from '@/stores/theme';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = observer(({ children }: Props) => {
  const { currentTheme } = ThemeStore;

  const theme = currentTheme === 'light' ? themeLight : themeDark;

  return (
    <EmotionThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </EmotionThemeProvider>
  );
});

export default ThemeProvider;
