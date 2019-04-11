import React, { Fragment } from "react";
import classNames from "classnames";
import Link from "elevate-ui-icons/Link";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import PrismCode from "react-prism";
import "../layout/prism-elevate.css";
import Color from "color";
import { generatePalette } from "elevate-ui/Color";

require("prismjs");

const customPalette = generatePalette("#9EE5E0");

const ColorDoc = ({ classes, theme }) => (
  <div className={classes.wrapper}>
    <div className={classes.headingContainer}>
      <Typography type="title">{`Color Palette Generation`}</Typography>
      <Typography type="body">
        Elevate UI has a handy color palette generation function that allows you
        to generate a wide range of colors off a single hex value.
      </Typography>
    </div>

    <Typography type="title" gutterBottom className={classes.heading}>
      <a
        href="#generatePalette"
        name="generatePalette"
        className={classes.headingLink}
      >
        <Link />
        generatePalette(hex)
      </a>
    </Typography>
    <div className={classes.container}>
      <div className={classes.grid}>
        {Object.keys(customPalette).map((color) => {
          return (
            <Fragment key={color}>
              <div
                className={classes.subColor}
                style={{ background: customPalette[color] }}
              >
                <div
                  className={classes.subColorText}
                  style={{
                    color: Color(customPalette[color]).isDark()
                      ? theme.colors.white
                      : theme.colors.gray800,
                  }}
                >
                  {`${color} - ${customPalette[color]}`}
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
      <PrismCode
        component="pre"
        className={classNames(
          "language-javascript",
          classes.codePadding,
          classes.codeBlock
        )}
      >
        {`
        import { generatePalette } from "elevate-ui/Color";
        
        ...

        const customPalette = generatePalette('#ba4a22');
        `}
      </PrismCode>
    </div>
  </div>
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
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    marginBottom: "48px",
    borderRadius: "12px",
  },
  headingContainer: {
    marginBottom: "24px",
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
  codeBlock: {
    marginBottom: "48px !important",
  },
  codePadding: {
    padding: "0 !important",
  },
  addBorder: {
    border: `1px solid ${theme.colors.gray300}`,
  },
  wrapper: {
    maxWidth: "680px",
    width: "100%",
    margin: "45px auto",
    padding: "12px",

    [theme.breakpoints(900)]: {
      margin: "45px 45px 45px -220px",
      padding: "0px",
    },
  },
}))(ColorDoc);
