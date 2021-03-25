import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';

import AppLayout from '@/components/AppLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS>
      <Global
        styles={css`
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
}

export default MyApp;
