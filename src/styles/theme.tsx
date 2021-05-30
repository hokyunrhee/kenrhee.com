import { theme as baseTheme, extendTheme } from '@chakra-ui/react';
import { mode, Styles } from '@chakra-ui/theme-tools';

const styles: Styles = {
  ...baseTheme.styles,
  global: (props) => ({
    ...baseTheme.styles.global,
    '#__next': {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    html: {
      fontFamily: 'Noto Sans KR, sans-serif',
    },
    body: {
      color: mode('#1A1A1A', '#FFFFFF')(props),
      bg: mode('#FFFFFF', '#1A1A1A')(props),
    },
    pre: {
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-all',
    },
    '.post h2+*': {
      marginTop: '0px !important',
    },
    '.post h3+*': {
      marginTop: '0px !important',
    },
    '.post h4+*': {
      marginTop: '0px !important',
    },
    '.post h5+*': {
      marginTop: '0px !important',
    },
    'pre+pre code': {
      paddingTop: '0px !important',
    },
  }),
};

const customTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
  fonts: {
    heading: 'Noto Sans KR, sans-serif',
    body: 'Noto Sans KR, sans-serif',
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
  },
  sizes: {
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  colors: {
    brand: {
      white: '#FFFFFF',
      black: '#1A1A1A',
      gray: {
        100: '#FAFAFA',
        200: '#F7F7F7',
        300: '#F0F0F0',
        400: '#BEBEBE',
        500: '#808080',
        600: '#444444',
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        ...baseTheme.components.Link.baseStyle,
        _hover: { textDecoration: 'none' },
        _focus: { boxShadow: 'none' },
      },
    },
  },
  styles,
});

export default customTheme;
