import React, { Fragment } from "react";
import isObject from "lodash/isObject";
import classNames from "classnames";
import Link from "elevate-ui-icons/Link";
import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import Hr from "elevate-ui/Hr";
import PrismCode from "react-prism";
import "../layout/prism-elevate.css";

require("prismjs");

const Theme = ({ classes, theme }) => (
  <Paper>
    <Typography type="title">{`<ThemeProvider />`}</Typography>
    <Typography type="body" style={{ marginBottom: "32px" }}>
      Elevate-UI uses React-JSS under the hood. The ThemeProvider documentation
      can be found here. https://github.com/cssinjs/theming#themeprovider
    </Typography>
    <Typography type="title" gutterBottom>
      <a href="#colors" name="colors" className={classes.headingLink}>
        <Link />
        Colors
      </a>
    </Typography>
    <div className={classes.container}>
      {theme &&
        theme.colors && (
          <Fragment>
            {Object.keys(theme.colors).map((color) => {
              if (isObject(theme.colors[color])) {
                return (
                  <Fragment>
                    <Typography type="heading5" className={classes.heading}>
                      {color}
                    </Typography>
                    <div className={classes.grid}>
                      {Object.keys(theme.colors[color]).map((subColor) => (
                        <div
                          style={{ background: theme.colors[color][subColor] }}
                          className={classes.subColor}
                        >
                          <div className={classes.subColorText}>
                            {theme.colors[color][subColor]}
                          </div>
                          <div className={classes.subColorText}>{subColor}</div>
                        </div>
                      ))}
                    </div>
                  </Fragment>
                );
              }
            })}
          </Fragment>
        )}

      {/* Only bringing back black & white 
            since those are the only other colors that need to be displayed 
          and are also not part of an object */}
      {theme &&
        theme.colors && (
          <div>
            <Typography type="heading5" style={{ margin: "24px 0px" }}>
              Other Colors
            </Typography>
            <div className={classes.bottomContainer}>
              {Object.keys(theme.colors).map((color) => {
                if (
                  (!isObject(theme.colors[color]) &&
                    theme.colors[color] === theme.colors.black) ||
                  theme.colors[color] === theme.colors.white
                ) {
                  return (
                    <div
                      style={{ background: theme.colors[color] }}
                      className={classNames(
                        classes.otherColor,
                        theme.colors[color] === theme.colors.white &&
                          classes.addBorder
                      )}
                    >
                      <div className={classes.subColorText}>{color}</div>
                      <div className={classes.subColorText}>
                        {theme.colors[color]}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        )}
    </div>
    <Hr />
    <Typography type="title" gutterBottom>
      <a
        href="#responsive-breakpoints"
        name="responsive-breakpoints"
        className={classes.headingLink}
      >
        <Link />
        Responsive Breakpoints
      </a>
    </Typography>
    <Typography type="body" gutterBottom>
      Elevate-UI ships with a "breakpoints" function that allows the user to
      pass a number and receive a responsive media query in return.
    </Typography>
    <Typography type="heading3" gutterBottom>
      Example
    </Typography>
    <Paper withPadding={false}>
      <PrismCode component="pre" className="language-javascript">
        {`
        const styles = (theme) => ({
          root: {
            color: '#000000',
            [theme.breakpoints(900)]: {
              color: '#ff0000',
            },
          },
        });

        // The above JSS produces the following CSS:
        .root {
          color: '#000000';
        }
        @media (min-width: 900px) {
          .root {
            color: '#ff0000';
          }
        }
        `}
      </PrismCode>
    </Paper>
    <Hr />
    <Typography type="title" gutterBottom>
      <a
        href="#global-properties"
        name="global-properties"
        className={classes.headingLink}
      >
        <Link />
        Global Properties
      </a>
    </Typography>
    <Typography type="heading4" gutterBottom>
      <PrismCode
        component="pre"
        className={classNames("language-javascript", classes.codePadding)}
      >
        {`globalBorderRadius`}
      </PrismCode>
    </Typography>
    <Typography type="heading6">Usage Example</Typography>
    <Paper withPadding={false}>
      <PrismCode
        component="pre"
        className={classNames("language-javascript", classes.codePadding)}
      >
        {`
        const style = (theme) => ({
          button: {
            borderRadius: theme.globalBorderRadius,
          },
        });
        `}
      </PrismCode>
    </Paper>
    <Typography type="heading4" gutterBottom>
      <PrismCode
        component="pre"
        className={classNames("language-javascript", classes.codePadding)}
      >
        {`globalBoxShadow`}
      </PrismCode>
    </Typography>
    <Typography type="heading6">Usage Example</Typography>
    <Paper withPadding={false}>
      <PrismCode
        component="pre"
        className={classNames("language-javascript", classes.codePadding)}
      >
        {`
        const style = (theme) => ({
          profileImage: {
            boxShadow: theme.globalBoxShadow,
          },
        });
        `}
      </PrismCode>
    </Paper>
    <Typography type="heading4" gutterBottom>
      <PrismCode
        component="pre"
        className={classNames("language-javascript", classes.codePadding)}
      >
        {`globalPadding`}
      </PrismCode>
    </Typography>
    <Typography type="heading6">Usage Example</Typography>
    <Paper withPadding={false}>
      <PrismCode
        component="pre"
        className={classNames("language-javascript", classes.codePadding)}
      >
        {`
        const style = (theme) => ({
          grid: {
            ...theme.globalPadding,
          },
        });
        `}
      </PrismCode>
    </Paper>
    <Typography type="heading4" gutterBottom>
      <PrismCode
        component="pre"
        className={classNames("language-javascript", classes.codePadding)}
      >
        {`transition`}
      </PrismCode>
    </Typography>
    <Typography type="heading6">Usage Example</Typography>
    <Paper withPadding={false}>
      <PrismCode
        component="pre"
        className={classNames("language-javascript", classes.codePadding)}
      >
        {`
        const style = (theme) => ({
          button: {
            transition: theme.transitions['default'], // 'all 200ms linear'
          }
        });
        `}
      </PrismCode>
    </Paper>
    <Typography type="heading4" gutterBottom>
      <PrismCode
        component="pre"
        className={classNames("language-javascript", classes.codePadding)}
      >
        {`typography`}
      </PrismCode>
    </Typography>
    <Typography type="heading6">Usage Example</Typography>
    <Paper withPadding={false}>
      <PrismCode
        component="pre"
        className={classNames("language-javascript", classes.codePadding)}
      >
        {`
        const style = (theme) => ({
          caption: {
            color: theme.typography['bodyColor'], // '#2E2E35'
            fontFamily: theme.typography['fontFamily'], // "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
            fontSize: theme.typography['fontSize'], // '1rem'
          }
        });
        `}
      </PrismCode>
    </Paper>
    <Typography type="heading4" gutterBottom>
      <PrismCode
        component="pre"
        className={classNames("language-javascript", classes.codePadding)}
      >
        {`zIndex`}
      </PrismCode>
    </Typography>
    <Typography type="heading6">Available Values</Typography>
    <Paper withPadding={false}>
      <PrismCode
        component="pre"
        className={classNames("language-javascript", classes.codePadding)}
      >
        {`
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
        `}
      </PrismCode>
    </Paper>
  </Paper>
);

export default withStyles((theme) => ({
  "@global": {
    strong: {
      fontWeight: 800,
    },
  },
  headingLink: {
    textDecoration: "none",
    color: theme.colors.gray["900"],
  },
  container: {
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints(600)]: {
      padding: "24px",
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    marginBottom: "48px",
    borderRadius: "12px",
  },
  bottomContainer: {
    display: "flex",
  },
  heading: {
    marginTop: "12px",
    marginBottom: "12px",
  },
  color: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "auto",
    backgroundColor: "#fff",
    padding: "6px",
    border: `1px solid ${theme.colors.gray300}`,
  },
  subColor: {
    display: "flex",
    justifyContent: "space-between",
    height: "140px",
    padding: "12px",
    transition: "all .3s ease",
  },
  subColorText: {
    color: theme.colors.gray800,
    letterSpacing: ".6px",
    fontSize: "14px",
    fontWeight: "600",
  },
  colorSwatch: {
    width: "100%",
    height: "60px",
  },
  colorDetails: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    textAlign: "right",
    padding: "0 4px",
  },
  colorName: {
    lineHeight: "1.4",
    fontWeight: "600",
  },
  colorHex: {
    lineHeight: "1.4",
    fontSize: "14px",
  },
  deprecated: {
    color: theme.colors.gray["400"],
    fontStyle: "italic",
  },
  codePadding: {
    padding: "0 !important",
  },
  otherColor: {
    display: "flex",
    justifyContent: "space-between",
    width: "200px",
    height: "140px",
    padding: "12px",
    transition: "all .3s ease",
    marginRight: "12px",
  },
  addBorder: {
    border: `1px solid ${theme.colors.gray300}`,
  },
}))(Theme);
