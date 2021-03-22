import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { useColorMode } from '@/context/ColorMode';

import GlobalStyle from './GlobalStyle';
import { themeLight, themeDark } from './customTheme';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const { colorMode } = useColorMode();

  const theme = colorMode === 'light' ? themeLight : themeDark;

  return (
    <EmotionThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
