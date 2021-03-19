import '@emotion/react';
import DefaultTheme from './defaultTheme';

declare module '@emotion/react' {
  // eslint-disable-next-line
  export interface Theme extends DefaultTheme {}
}
