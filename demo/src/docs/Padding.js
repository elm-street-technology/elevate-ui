import React from "react";
import { Link } from "react-router-dom";
import PrismCode from "react-prism";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import CheckCircle from "elevate-ui-icons/CheckCircle";
import Alert from "elevate-ui/Alert";

import "../layout/prism-elevate.css";

const Padding = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.headingContainer}>
      <Typography type="title" gutterBottom>{`Padding`}</Typography>
      <Typography type="body" className={classes.subheading}>
        This is how you would reference the default padding set in our
        globalPadding object:
      </Typography>
    </div>
    <div>
      <PrismCode component="pre" className="language-javascript">
        {` 
    const style = (theme) => ({
      grid: {
        ...theme.globalPadding,
      },
    });
      `}
      </PrismCode>

      <div className={classes.alertContainer}>
        <Alert color="info">
          <Typography type="body" style={{ fontSize: "16px" }}>
            As you can see from the above example, since the globalPadding
            object holds several values, we spread the{" "}
            <span style={{ fontWeight: "600" }}>entire</span> object onto
            whatever element we are styling.
          </Typography>
        </Alert>
      </div>
      <Typography
        type="body"
        className={classes.subheading}
        style={{ fontSize: "18px", marginTop: "24px" }}
      >
        The above example spreads the entire globalPadding object below:
      </Typography>

      <PrismCode component="pre" className="language-javascript">
        {` 
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

    <div className={classes.paddingExample}>
      The globalPadding is being applied to this here box.
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
          Elevate-UI ships with a globalPadding variable (value referenced
          above).
        </div>
      </div>
    </Typography>
    <Typography element="div" className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>
          This is the preferred method of setting padding an any element,
          however, you can also reference{" "}
          <Link className={classes.link} to="spacing">
            spacing
          </Link>
          .
        </div>
      </div>
    </Typography>
    <Typography element="div" className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>This is the default padding for Elevate UI components.</div>
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
  headingContainer: {
    marginTop: theme.spacing.unit * 1.5,
    marginBottom: theme.spacing.unit * 1.5,
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
  paddingExample: {
    boxShadow: theme.globalBoxShadow,
    borderRadius: theme.globalBorderRadius,
    ...theme.globalPadding,
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
  alertContainer: {
    marginTop: theme.spacing.unit * 1,
  },
});

export default withStyles(styles, { name: "Padding" })(Padding);
