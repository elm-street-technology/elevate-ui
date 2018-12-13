// @flow
import React from "react";
import injectSheet, { ThemeProvider as JSSThemeProvider } from "react-jss";
import merge from "lodash/merge";

const colors = {
  primary: "#f15953",
  primaryDark: "#d24f45",
  primaryGlow: "#d24f45", // todo
  secondary: "#55c3ba",
  secondaryDark: "#44b0a7",
  tertiary: "#2e7fc2",
  quaternary: "#ffc629",
  white: "#fff",
  gray050: "#fbfcfd",
  gray100: "#edf1f4",
  gray200: "#dde2e7",
  gray300: "#ccd2d8",
  gray400: "#b3bac1",
  gray500: "#888f96",
  gray600: "#60686f",
  gray700: "#4b565f",
  gray800: "#5a5b5c",
  gray900: "#232c35",
  black: "#11181e",
  error: "#9c2929",
  facebook: "#3b5998",
  google: "#db4437",
  linkedin: "#007bb5",
  pinterest: "#bd081c",
  twitter: "#1da1f2",
};

const alertColors = {
  error: {
    color: "#9c2929",
    backgroundColor: "#fcf2f2",
    borderColor: "#f6dddd",
  },
  info: {
    color: "#0c5460",
    backgroundColor: "#d1ecf1",
    borderColor: "#bee5eb",
  },
  success: {
    color: "#246761",
    backgroundColor: "#ecf8f7",
    borderColor: "#d2e8e6",
  },
  warning: {
    color: "#856404",
    backgroundColor: "#fff3cd",
    borderColor: "#ffeeba",
  },
};

const typography = {
  bodyColor: "#2E2E35",
  fontFamily:
    "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "1rem",
};

const transitions = {
  default: "all 200ms linear",
};

const breakpoints = (minWidth: number) => {
  if (!minWidth) {
    return new Error("Must enter a valid minWidth to use theme breakpoints");
  }
  return `@media (min-width: ${minWidth}px)`;
};

const globalBorderRadius = "4px";
const globalBoxShadow =
  "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)";
const globalPadding = {
  padding: "12px",
  [breakpoints.tabletPortrait]: {
    padding: "16px",
  },
  [breakpoints.tabletLandscape]: {
    padding: "20px",
  },
  [breakpoints.desktop]: {
    padding: "24px",
  },
};

const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;

function createShadow(...px) {
  return [
    `${px[0]}px ${px[1]}px ${px[2]}px ${
      px[3]
    }px rgba(0, 0, 0, ${shadowKeyUmbraOpacity})`,
    `${px[4]}px ${px[5]}px ${px[6]}px ${
      px[7]
    }px rgba(0, 0, 0, ${shadowKeyPenumbraOpacity})`,
    `${px[8]}px ${px[9]}px ${px[10]}px ${
      px[11]
    }px rgba(0, 0, 0, ${shadowAmbientShadowOpacity})`,
  ].join(",");
}

const shadows = [
  createShadow(0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1),
  createShadow(0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2),
  createShadow(0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2),
  createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
  createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
  createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
  createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
  createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
  createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
  createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
  createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
  createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
  createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
  createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
  createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
  createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
  createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
  createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
  createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
  createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
  createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
  createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
  createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
  createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
];

const zIndex = {
  buttonBase: 0,
  buttonChildren: 1,
  selectDropdown: 2,
  tableLoading: -1,
  tableLoadingActive: 2,
  tableResizer: 10,
  tooltip: 1000,
  modal: 2000,
};

const defaultTheme = {
  alertColors,
  breakpoints,
  colors,
  globalBorderRadius,
  globalBoxShadow,
  globalPadding,
  shadows,
  transitions,
  typography,
  zIndex,
};

const GlobalsAndReset = injectSheet((theme) => ({
  "@global": {
    /* Eric Meyer Reset v2.0 */
    /* https://meyerweb.com/eric/tools/css/reset/ */
    "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video": {
      margin: "0",
      padding: "0",
      border: "0",
      fontSize: "100%",
      font: "inherit",
      verticalAlign: "baseline",
    },
    "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section": {
      display: "block",
    },
    body: {
      lineHeight: "1",
    },
    "ol, ul": {
      listStyle: "none",
    },
    "blockquote, q": {
      quotes: "none",
    },
    "blockquote:before, blockquote:after, q:before, q:after": {
      content: "''",
      content: "none", // eslint-disable-line
    },
    table: {
      borderCollapse: "collapse",
      borderSpacing: "0",
    },
    /* Globals */
    "html, body": {
      width: "100%",
      minHeight: "100%",
      fontFamily: theme.typography.fontFamily || "sans-serif",
      fontSize: theme.typography.fontSize || "1rem",
      fontWeight: "500",
      color: theme.typography.bodyColor || "#000",
      backgroundColor: "#fafafa",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      margin: "0",
      padding: "0",
    },
    /* Box-sizing border-box */
    /* https://www.paulirish.com/2012/box-sizing-border-box-ftw/ */
    html: {
      boxSizing: "border-box",
      background: "transparent",
    },
    "*, *:before, *:after": {
      boxSizing: "inherit",
    },
    /* Reset `button` to nothing */
    /* https://gist.github.com/chrisheninger/a860f87ef4e529b2df606768b97665a8 */
    button: {
      display: "inline-block",
      "-webkit-appearance": "none",
      "-moz-appearance": "none",
      userSelect: "none",
      textDecoration: "none",
      fontFamily: "inherit",
      fontSize: "inherit",
      color: "inherit",
      cursor: "pointer",
      border: "none",
      backgroundColor: "transparent",
      borderColor: "transparent",
      padding: "0",
      margin: "0",
      "&:disabled": {
        opacity: 0.6,
        cursor: "not-allowed",
      },
    },
  },
}))(({ children }) => children);

const ThemeProvider = ({ children, theme, withReset = true, ...rest }: any) => {
  const mergedTheme = theme ? merge(defaultTheme, theme) : defaultTheme;
  return (
    <JSSThemeProvider theme={mergedTheme} {...rest}>
      {withReset ? <GlobalsAndReset>{children}</GlobalsAndReset> : children}
    </JSSThemeProvider>
  );
};

export default ThemeProvider;
