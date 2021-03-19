import DefaultTheme from './defaultTheme';

const breakpoints = {
  tablet: 768,
  pc: 1024,
};

export const themeLight: DefaultTheme = {
  color: {
    primary: '#2563EB',
    secondary: '#059669',
    success: '#198754',
    info: '#0DCAF0',
    warning: '#FFC108',
    danger: '#DC3545',
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
    success: '#198754',
    info: '#0DCAF0',
    warning: '#FFC108',
    danger: '#DC3545',
  },
  screen: {
    tablet: `@media (min-width: ${breakpoints.tablet}px)`,
    pc: `@media (min-width: ${breakpoints.pc}px)`,
  },
};
