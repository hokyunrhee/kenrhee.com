import type { AppProps } from 'next/app';

import { ColorModeProvider } from '@/context/ColorMode';
import ThemeProvider from '@/styles/ThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorModeProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeProvider>
  );
}

export default MyApp;
