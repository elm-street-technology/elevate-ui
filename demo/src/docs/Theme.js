import React from "react";
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
    {theme &&
      theme.colors && (
        <div className={classes.grid}>
          {Object.keys(theme.colors).map((color) => {
            if (isObject(theme.colors[color])) {
              return Object.keys(theme.colors[color]).map((subColor) => {
                const docColor = theme.colors[color][subColor];
                return (
                  <div key={subColor} className={classes.color}>
                    <div
                      className={classes.colorSwatch}
                      style={{ background: docColor }}
                    />
                    <div className={classes.colorDetails}>
                      <div
                        className={classes.colorName}
                      >{`${color} ${subColor}`}</div>
                      <div className={classes.colorHex}>{docColor}</div>
                    </div>
                  </div>
                );
              });
            } else {
              return (
                <div key={color} className={classes.color}>
                  <div
                    className={classes.colorSwatch}
                    style={{ backgroundColor: theme.colors[color] }}
                  />
                  <div className={classes.colorDetails}>
                    <div className={classes.colorName}>{color}</div>
                    <div className={classes.colorHex}>
                      {theme.colors[color]}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
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
    color: theme.colors["gray900"],
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: "32px",
    gridRowGap: "32px",
  },
  color: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // width: "128px",
    height: "auto",
    backgroundColor: "#fff",
    padding: "6px",
    border: `1px solid ${theme.colors.gray300}`,
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
    color: theme.colors["gray400"],
    fontStyle: "italic",
  },
  codePadding: {
    padding: "0 !important",
  },
}))(Theme);
