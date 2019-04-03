// @flow
import React from "react";
import injectSheet, { ThemeProvider as JSSThemeProvider } from "react-jss";
import merge from "lodash/merge";

const colors: Object = {
  primary: {
    "050": "#FFF5F5",
    "100": "#FFE4E4",
    "200": "#FFD4D4",
    "300": "#F99E9B",
    "400": "#F17772",
    "500": "#F15953",
    "600": "#D2413B",
    "700": "#A82B26",
    "800": "#821410",
    "900": "#610404",
  },
  secondary: {
    "050": "#F3FFFE",
    "100": "#EBFAF9",
    "200": "#DAF2F1",
    "300": "#9EE5E0",
    "400": "#68D0C8",
    "500": "#55C3BA",
    "600": "#2EA59B",
    "700": "#168C82",
    "800": "#086B62",
    "900": "#014A44",
  },
  tertiary: {
    "050": "#E9F5FF",
    "100": "#E1EDF8",
    "200": "#D6E4F0",
    "300": "#80B7E4",
    "400": "#4891CD",
    "500": "#2E7FC2",
    "600": "#19629E",
    "700": "#105188",
    "800": "#073E6C",
    "900": "#023052",
  },
  yellow: {
    "050": "#FFFCF0",
    "100": "#FFF8E5",
    "200": "#FFF2CE",
    "300": "#FFE292",
    "400": "#F7CF61",
    "500": "#F7C948",
    "600": "#C99400",
    "700": "#905710",
    "800": "#844118",
    "900": "#672F0D",
  },
  green: {
    "050": "#f4fff5",
    "100": "#E0F9E0",
    "200": "#D4F4D4",
    "300": "#9EE9A1",
    "400": "#6DCA71",
    "500": "#4CAF50",
    "600": "#37983A",
    "700": "#1E7C21",
    "800": "#105E12",
    "900": "#043E06",
  },
  purple: {
    "050": "#F7F3FF",
    "100": "#F1EAFF",
    "200": "#EAE2F8",
    "300": "#A081D9",
    "400": "#835BCD",
    "500": "#673AB7",
    "600": "#51279B",
    "700": "#421987",
    "800": "#34126F",
    "900": "#240754",
  },
  pink: {
    "050": "#FFF2F9",
    "100": "#FDE5F2",
    "200": "#F9DBEC",
    "300": "#FF94C2",
    "400": "#F25087",
    "500": "#E91E63",
    "600": "#C91854",
    "700": "#A91354",
    "800": "#800C49",
    "900": "#5C0B33",
  },
  orange: {
    "050": "#FEF5F0",
    "100": "#FFF0E7",
    "200": "#FFEADE",
    "300": "#FFC4A3",
    "400": "#F5A375",
    "500": "#EF8E58",
    "600": "#C65D21",
    "700": "#8C3D10",
    "800": "#77340D",
    "900": "#572508",
  },
  gray: {
    "050": "#fbfcfd",
    "100": "#edf1f4",
    "200": "#dde2e7",
    "300": "#ccd2d8",
    "400": "#b3bac1",
    "500": "#888f96",
    "600": "#60686f",
    "700": "#4b565f",
    "800": "#3E464F",
    "900": "#232c35",
  },
  white: "#fff",
  black: "#11181e",
  error: "#9c2929",
  facebook: "#3b5998",
  google: "#db4437",
  linkedin: "#007bb5",
  pinterest: "#bd081c",
  twitter: "#1da1f2",
};

colors.elevateRed = colors.primary;

// backwards compatible colors
colors.primaryLight = colors.primary["050"];
colors.primaryDark = colors.primary["900"];
colors.secondaryLight = colors.secondary["050"];
colors.secondaryDark = colors.secondary["900"];
colors.tertiaryLight = colors.tertiary["050"];
colors.tertiaryDark = colors.tertiary["900"];
colors.quaternaryLight = colors.yellow["050"];
colors.quaternary = colors.yellow["500"];
colors.quaternaryDark = colors.yellow["900"];

// backwards compatible grays
colors.gray050 = colors.gray["050"];
colors.gray100 = colors.gray["100"];
colors.gray200 = colors.gray["200"];
colors.gray300 = colors.gray["300"];
colors.gray400 = colors.gray["400"];
colors.gray500 = colors.gray["500"];
colors.gray600 = colors.gray["600"];
colors.gray700 = colors.gray["700"];
colors.gray800 = colors.gray["800"];
colors.gray900 = colors.gray["900"];

const alertColors = {
  error: {
    color: colors.primary["900"],
    backgroundColor: colors.primary["050"],
    borderColor: colors.primary["200"],
  },
  info: {
    color: colors.tertiary["900"],
    backgroundColor: colors.tertiary["050"],
    borderColor: colors.tertiary["200"],
  },
  success: {
    color: colors.green["900"],
    backgroundColor: colors.green["050"],
    borderColor: colors.green["200"],
  },
  warning: {
    color: colors.yellow["900"],
    backgroundColor: colors.yellow["050"],
    borderColor: colors.yellow["200"],
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
