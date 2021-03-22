import DefaultTheme from './defaultTheme';

const breakpoints = {
  tablet: 768,
  pc: 1024,
};

export const themeLight: DefaultTheme = {
  color: {
    primary: '#2563EB',
    secondary: '#059669',
    white: '#FFFFFF',
    black: '#000000',
    success: '#198754',
    info: '#0DCAF0',
    warning: '#FFC108',
    danger: '#DC3545',
    transparent: 'transparent',
  },
  fontSize: {
    xs: 'font-size: 0.75rem; line-height: 1rem;',
    sm: 'font-size: 0.875rem; line-height: 1.25rem;',
    md: 'font-size: 1rem; line-height: 1.5rem;',
    lg: 'font-size: 1.125rem; line-height: 1.75rem;',
    xl: 'font-size: 1.25rem; line-height: 1.75rem;',
    '2xl': 'font-size: 1.5rem; line-height: 2rem;',
  },
  screen: {
    tablet: `@media (min-width: ${breakpoints.tablet}px)`,
    pc: `@media (min-width: ${breakpoints.pc}px)`,
  },
};

export const themeDark: DefaultTheme = {
  color: {
    primary: '#059669',
    secondary: '#2563EB',
    white: '#FFFFFF',
    black: '#000000',
    success: '#198754',
    info: '#0DCAF0',
    warning: '#FFC108',
    danger: '#DC3545',
    transparent: 'transparent',
  },
  fontSize: {
    xs: 'font-size: 0.875rem; line-height: 1.25rem;',
    sm: 'font-size: 0.875rem; line-height: 1.25rem;',
    md: 'font-size: 1rem; line-height: 1.5rem;',
    lg: 'font-size: 1.125rem; line-height: 1.75rem;',
    xl: 'font-size: 1.25rem; line-height: 1.75rem;',
    '2xl': 'font-size: 1.5rem; line-height: 2rem;',
  },
  screen: {
    tablet: `@media (min-width: ${breakpoints.tablet}px)`,
    pc: `@media (min-width: ${breakpoints.pc}px)`,
  },
};
