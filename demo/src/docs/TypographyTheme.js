import React from "react";
import PrismCode from "react-prism";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import CheckCircle from "elevate-ui-icons/CheckCircle";
import "../layout/prism-elevate.css";

const TypographyTheme = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.headingContainer}>
      <Typography type="title" gutterBottom>{`Typography`}</Typography>
      <Typography type="body" className={classes.subheading}>
        This is how you would reference the values set in our typography object:
      </Typography>
    </div>
    <div>
      <PrismCode component="pre" className="language-javascript">
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
        type="body"
        className={classes.subheading}
        style={{ fontSize: "18px", marginTop: "24px" }}
      >
        Below is what the typography object looks like in our theme:
      </Typography>

      <PrismCode component="pre" className="language-javascript">
        {` 
    const typography = {
      bodyColor: "#2E2E35",
      fontFamily:
        "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      fontSize: "1rem",
    };
      `}
      </PrismCode>
      <div />
    </div>

    <Typography
      type="body"
      className={classes.subheading}
      style={{ fontSize: "18px", marginTop: "48px" }}
    >
      Result:
    </Typography>

    <div className={classes.typographyExample}>
      The default typography values are being applied to this here text.
    </div>

    <Typography className={classes.sectionHeading} gutterTop type="heading3">
      Takeaways
    </Typography>

    <Typography element="div" className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>
          Elevate-UI ships with a typography object which holds several default
          values for text.
        </div>
      </div>
    </Typography>

    <Typography element="div" className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>
          These are the default values to be used for text within Elevate
          products.
        </div>
      </div>
    </Typography>
  </div>
);

const styles = (theme) => ({
  wrapper: {
    maxWidth: "680px",
    width: "100%",
    margin: "45px auto",
    padding: "12px",

    [theme.breakpoints(900)]: {
      margin: "45px auto 90px 100px",
      padding: "0px",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    marginTop: "24px",
    marginBottom: "12px",
  },
  exampleHeading: {
    color: theme.colors.primary["500"],
  },
  headingContainer: {
    marginTop: theme.spacing.unit * 1.5,
    marginBottom: theme.spacing.unit * 1.5,
  },
  headingLink: {
    textDecoration: "none",
    color: theme.colors.gray["900"],
  },
  subheading: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  link: {
    color: theme.colors.gray["900"],
    textDecoration: "none",
    fontWeight: "600",
    transition: theme.transitions.default,

    "&:hover": {
      color: theme.colors.gray["700"],
    },
  },
  example: {
    margin: "auto",
    padding: theme.spacing.unit * 2,
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.colors.white,
    marginTop: theme.spacing.unit * 1.5,
    boxShadow: "0px 4px 8px rgba(0,0,0,.05)",
    borderRadius: "6px",
  },
  typographyExample: {
    boxShadow: theme.globalBoxShadow,
    borderRadius: theme.globalBorderRadius,
    padding: theme.spacing.unit * 2,
    color: theme.typography["bodyColor"],
    fontFamily: theme.typography["fontFamily"],
    fontSize: theme.typography["fontSize"],
  },
  section: {
    marginTop: theme.spacing.unit * 6,
  },
  sectionHeading: {
    marginTop: theme.spacing.unit * 6,
  },
  body: {
    marginTop: theme.spacing.unit * 2,
    lineHeight: "34px",
  },
  listItem: {
    display: "flex",
  },
  listIcon: {
    marginRight: theme.spacing.unit * 1,
    marginTop: theme.spacing.unit * 0.25,
  },
});

export default withStyles(styles, { name: "TypographyTheme" })(TypographyTheme);
