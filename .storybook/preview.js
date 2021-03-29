import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';

export const decorators = [
  (Story) => (
    <ChakraProvider resetCSS>
      <Global />
      <Story />
    </ChakraProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
