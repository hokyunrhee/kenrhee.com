import { theme, Theme } from '@chakra-ui/react';
import { mode, Styles } from '@chakra-ui/theme-tools';

/**
 * https://code.habd.as/comfusion/gatsby-starter-i18n-react-i18next/src/branch/master/src/utils/theme.tsx
 */

const styles: Styles = {
  ...theme.styles,
  global: (props) => ({
    ...theme.styles.global,
    '#__next': {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    bg: mode('gray.700', 'gray.900')(props),
  }),
};

const customTheme: Theme = {
  ...theme,
  config: {
    ...theme.config,
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
  breakpoints: {
    ...theme.breakpoints,
    sm: '480px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
  },
  sizes: {
    ...theme.sizes,
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  styles,
};

export default customTheme;
