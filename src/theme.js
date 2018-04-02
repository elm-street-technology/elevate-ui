import React from 'react';
import { ThemeProvider as JSSThemeProvider } from 'react-jss';
import merge from 'lodash/merge';

const colors = {
  primary: '#f15953',
  primaryDark: '#d24f45',
  primaryGlow: '#d24f45', // todo
  secondary: '#55c3ba',
  secondaryDark: '#44b0a7',
  tertiary: '#2e7fc2',
  quaternary: '#ffc629',
  white: '#fff',
  gray050: '#fbfcfd',
  gray100: '#edf1f4',
  gray200: '#dde2e7',
  gray300: '#ccd2d8',
  gray400: '#b3bac1',
  gray500: '#888f96',
  gray600: '#60686f',
  gray700: '#4b565f',
  gray800: '#5a5b5c',
  gray900: '#232c35',
  black: '#11181e',
};

const alertColors = {
  danger: {
    color: '#9c2929',
    backgroundColor: '#fcf2f2',
    borderColor: '#f6dddd',
  },
  success: {
    color: '#246761',
    backgroundColor: '#ecf8f7',
    borderColor: '#d2e8e6',
  },
};

const typography = {
  sans:
    '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  mono: '"Source Code Pro", monospace',
  headingColor: colors.gray900,
  bodyColor: colors.gray900,
  anchorColor: colors.primary,
  fontBase: '1rem',
};

const breakpoints = {
  tabletPortrait: `@media (min-width: 600px)`,
  tabletLandscape: `@media (min-width: 900px)`,
  desktop: `@media (min-width: 1200px)`,
};

const globalBorderRadius = '4px';
const globalBoxShadow =
  '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)';
const globalPadding = {
  padding: '12px',
  [breakpoints.tabletPortrait]: {
    padding: '16px',
  },
  [breakpoints.tabletLandscape]: {
    padding: '20px',
  },
  [breakpoints.desktop]: {
    padding: '24px',
  },
};

const defaultTheme = {
  colors,
  typography,
  breakpoints,
  globalPadding,
  globalBorderRadius,
  globalBoxShadow,
  alertColors,
};

const ThemeProvider = ({ children, theme }) => {
  const mergedTheme = theme ? merge(defaultTheme, theme) : defaultTheme;
  return <JSSThemeProvider theme={mergedTheme}>{children}</JSSThemeProvider>;
};

export default ThemeProvider;
