import React from "react";
import withStyles, { ThemeProvider as JSSThemeProvider } from "react-jss";
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
  danger: "#9c2929",
};

const alertColors = {
  danger: {
    color: "#9c2929",
    backgroundColor: "#fcf2f2",
    borderColor: "#f6dddd",
  },
  success: {
    color: "#246761",
    backgroundColor: "#ecf8f7",
    borderColor: "#d2e8e6",
  },
};

const typography = {
  bodyColor: colors.gray800,
  fontFamily:
    '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  fontSize: "1rem",
};

const breakpoints = {
  600: `@media (min-width: 600px)`,
  900: `@media (min-width: 900px)`,
  1200: `@media (min-width: 1200px)`,
  tabletPortrait: `@media (min-width: 600px)`, // todo: deprecate (check existing code for usage)
  tabletLandscape: `@media (min-width: 900px)`, // todo: deprecate (check existing code for usage)
  desktop: `@media (min-width: 1200px)`, // todo: deprecate (check existing code for usage)
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

const defaultTheme = {
  colors,
  typography,
  breakpoints,
  globalPadding,
  globalBorderRadius,
  globalBoxShadow,
  alertColors,
};

const GlobalsAndReset = withStyles((theme) => ({
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

const ThemeProvider = ({ children, theme, withReset = true, ...rest }) => {
  const mergedTheme = theme ? merge(defaultTheme, theme) : defaultTheme;
  return (
    <JSSThemeProvider theme={mergedTheme} {...rest}>
      {withReset ? <GlobalsAndReset>{children}</GlobalsAndReset> : children}
    </JSSThemeProvider>
  );
};

export default ThemeProvider;
