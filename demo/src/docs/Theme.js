import React, { Fragment } from "react";
import isObject from "lodash/isObject";
import classNames from "classnames";
import Link from "elevate-ui-icons/Link";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import Hr from "elevate-ui/Hr";
import PrismCode from "react-prism";
import "../layout/prism-elevate.css";
import Color from "color";

require("prismjs");

const Theme = ({ classes, theme }) => (
  <div className={classes.wrapper}>
    <div className={classes.headingContainer}>
      <Typography type="title">{`<ThemeProvider />`}</Typography>
      <Typography type="body">
        Elevate-UI uses React-JSS under the hood.
        <div className={classes.linkContainer}>
          The ThemeProvider documentation can be found here: {""}
          <a
            className={classes.link}
            target="blank"
            href="https://github.com/cssinjs/theming#themeprovider"
          >
            https://github.com/cssinjs/theming#themeprovider
          </a>
        </div>
      </Typography>
    </div>

    <Typography type="title" gutterBottom className={classes.heading}>
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
                  <Fragment key={color}>
                    <Typography type="heading5" className={classes.heading}>
                      {color}
                    </Typography>
                    <div className={classes.grid}>
                      {Object.keys(theme.colors[color]).map((subColor) => (
                        <div
                          key={subColor}
                          style={{ background: theme.colors[color][subColor] }}
                          className={classes.subColor}
                        >
                          <div
                            className={classes.subColorText}
                            style={{
                              color: Color(
                                theme.colors[color][subColor]
                              ).isDark()
                                ? theme.colors.white
                                : theme.colors.gray800,
                            }}
                          >
                            {theme.colors[color][subColor]}
                          </div>
                          <div
                            className={classes.subColorText}
                            style={{
                              color: Color(
                                theme.colors[color][subColor]
                              ).isDark()
                                ? theme.colors.white
                                : theme.colors.gray800,
                            }}
                          >
                            {subColor}
                          </div>
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
                      key={color}
                      style={{ background: theme.colors[color] }}
                      className={classNames(
                        classes.otherColor,
                        theme.colors[color] === theme.colors.white &&
                          classes.addBorder
                      )}
                    >
                      <div
                        className={classes.subColorText}
                        style={{
                          color: Color(theme.colors[color]).isDark()
                            ? theme.colors.white
                            : theme.colors.gray800,
                        }}
                      >
                        {color}
                      </div>
                      <div
                        className={classes.subColorText}
                        style={{
                          color: Color(theme.colors[color]).isDark()
                            ? theme.colors.white
                            : theme.colors.gray800,
                        }}
                      >
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
    <Typography type="title" gutterBottom className={classes.heading}>
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
    <Typography type="heading3" gutterBottom className={classes.heading}>
      Example
    </Typography>
    <div style={{ marginBottom: "48px" }}>
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
    </div>
    <Hr />
    <Typography type="title" gutterBottom className={classes.heading}>
      <a
        href="#global-properties"
        name="global-properties"
        className={classes.headingLink}
      >
        <Link />
        Global Properties
      </a>
    </Typography>
    <div className={classes.exampleHeader}>
      <Typography id="example" type="heading5" className={classes.subHeading}>
        Usage examples
      </Typography>
    </div>
    <Typography type="heading4" gutterBottom>
      <Typography
        className={classNames(classes.codePadding, classes.propHeading)}
      >
        {`globalBorderRadius`}
      </Typography>
    </Typography>
    <PrismCode
      component="pre"
      className={classNames(
        "language-javascript",
        classes.codePadding,
        classes.codeBlock
      )}
    >
      {`
        const style = (theme) => ({
          button: {
            borderRadius: theme.globalBorderRadius,
          },
        });
        `}
    </PrismCode>
    <Typography
      className={classNames(classes.codePadding, classes.propHeading)}
      type="heading4"
      gutterBottom
    >
      {`globalBoxShadow`}
    </Typography>
    <PrismCode
      component="pre"
      className={classNames(
        "language-javascript",
        classes.codePadding,
        classes.codeBlock
      )}
    >
      {`
        const style = (theme) => ({
          profileImage: {
            boxShadow: theme.globalBoxShadow,
          },
        });
        `}
    </PrismCode>
    <Typography
      className={classNames(classes.codePadding, classes.propHeading)}
      type="heading4"
      gutterBottom
    >
      {`globalPadding`}
    </Typography>
    <PrismCode
      component="pre"
      className={classNames(
        "language-javascript",
        classes.codePadding,
        classes.codeBlock
      )}
    >
      {`
        const style = (theme) => ({
          grid: {
            ...theme.globalPadding,
          },
        });
        `}
    </PrismCode>
    <Typography
      className={classNames(classes.codePadding, classes.propHeading)}
      type="heading4"
      gutterBottom
    >
      {`spacing`}
    </Typography>
    <PrismCode
      component="pre"
      className={classNames(
        "language-javascript",
        classes.codePadding,
        classes.codeBlock
      )}
    >
      {`
        const style = (theme) => ({
          grid: {
            marginTop: theme.spacing.unit * 4,
          },
        });
        `}
    </PrismCode>
    <Typography
      className={classNames(classes.codePadding, classes.propHeading)}
      type="heading4"
      gutterBottom
    >
      {`transition`}
    </Typography>
    <PrismCode
      component="pre"
      className={classNames(
        "language-javascript",
        classes.codePadding,
        classes.codeBlock
      )}
    >
      {`
        const style = (theme) => ({
          button: {
            transition: theme.transitions['default'], // 'all 200ms linear'
          }
        });
        `}
    </PrismCode>
    <Typography
      className={classNames(classes.codePadding, classes.propHeading)}
      type="heading4"
      gutterBottom
    >
      {`typography`}
    </Typography>
    <PrismCode
      component="pre"
      className={classNames(
        "language-javascript",
        classes.codePadding,
        classes.codeBlock
      )}
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
    <Typography
      className={classNames(classes.codePadding, classes.propHeading)}
      type="heading4"
      gutterBottom
    >
      {`zIndex`}{" "}
      <span className={classes.propSubHeading}>(Available Values)</span>
    </Typography>
    <PrismCode
      component="pre"
      className={classNames(
        "language-javascript",
        classes.codePadding,
        classes.codeBlock
      )}
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
          dropdown: 1500,
          modal: 2000,
        };
        `}
    </PrismCode>
  </div>
);

export default withStyles((theme) => ({
  "@global": {
    strong: {
      fontWeight: 800,
    },
  },
  link: {
    color: `${theme.colors.tertiary["600"]} !important`,
    textDecoration: "none",
    wordWrap: "break-word",
  },
  headingLink: {
    textDecoration: "none",
    color: theme.colors.gray["900"],
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    marginBottom: "48px",
    borderRadius: "12px",
  },
  bottomContainer: {
    display: "flex",
    marginBottom: "48px",
  },
  headingContainer: {
    marginBottom: "24px",
    marginTop: "45px",
  },
  heading: {
    marginTop: "48px",
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
    letterSpacing: ".6px",
    fontSize: "13px",
    fontWeight: "600",
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
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
  codeBlock: {
    marginBottom: "48px !important",
  },
  codePadding: {
    padding: "0 !important",
  },
  propHeading: {
    color: theme.colors.black,
    fontSize: "18px",
  },
  propSubHeading: {
    color: theme.colors.gray600,
    fontSize: "16px",
    letterSpacing: ".5px",
  },
  subHeading: {
    display: "block",
    margin: "1.5em 0 .25em",
    fontWeight: "600",
    fontSize: "16px",
    letterSpacing: ".8px",
    color: theme.colors.gray600,
    textTransform: "uppercase",
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
  linkContainer: {
    marginTop: "32px",
  },
  wrapper: {
    maxWidth: "800px",
    width: "100%",
    margin: "24px auto",
    padding: "12px",

    [theme.breakpoints(900)]: {
      margin: "24px auto 45px 80px",
      padding: "0px",
    },
  },
}))(Theme);
