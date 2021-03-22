interface DefaultTheme {
  color: {
    primary: string;
    secondary: string;
    white: string;
    black: string;
    success: string;
    info: string;
    warning: string;
    danger: string;
    transparent: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  screen: {
    tablet: string;
    pc: string;
  };
}

export default DefaultTheme;
