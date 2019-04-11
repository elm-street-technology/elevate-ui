import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";
import isObject from "lodash/isObject";
import Color from "color";
import Typography from "elevate-ui/Typography";
import Alert from "elevate-ui/Alert";

const ColorPalette = ({ classes, theme }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.headingContainer}>
        <Typography type="title" gutterBottom>{`Color Palette`}</Typography>
        <Typography type="body" className={classes.subheading}>
          All colors in the theme object are displayed here, with 10 shade
          variants for each base color. This wide spectrum gives us the ability
          to find a color for just about any possible use case.
        </Typography>
      </div>
      <div className={classes.alertContainer}>
        <Alert color="info">
          <Typography type="heading5">Tip</Typography>
          <Typography type="body" style={{ fontSize: "16px" }}>
            Check out{" "}
            <Link to="/colors" className={classes.link}>
              Colors
            </Link>{" "}
            for examples on how to access colors from the theme object.
          </Typography>
        </Alert>
      </div>
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
                            style={{
                              background: theme.colors[color][subColor],
                            }}
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
    </div>
  );
};

const styles = (theme) => ({
  wrapper: {
    width: "100%",
    margin: "45px auto",
    padding: "12px",

    [theme.breakpoints(900)]: {
      margin: "45px 45px 45px 220px",
      padding: "0px",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "680px",
  },
  heading: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: "12px",
  },
  headingLink: {
    textDecoration: "none",
    color: theme.colors.gray["900"],
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    marginBottom: "48px",
    borderRadius: "12px",
  },
  subColor: {
    display: "flex",
    justifyContent: "space-between",
    height: "140px",
    padding: "12px",
    transition: "all .3s ease",
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
  headingContainer: {
    marginTop: theme.spacing.unit * 1.5,
    marginBottom: theme.spacing.unit * 1.5,
    maxWidth: "680px",
  },
  link: {
    textDecoration: "none",
    fontWeight: "600",
    transition: theme.transitions.default,

    "&:hover": {
      color: theme.colors.yellow["700"],
    },
  },
  subheading: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  alertContainer: {
    marginTop: theme.spacing.unit * 2.5,
    maxWidth: "680px",
  },
});

export default withStyles(styles, { name: "ColorPalette" })(ColorPalette);
