import React from "react";
import PrismCode from "react-prism";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import CheckCircle from "elevate-ui-icons/CheckCircle";
import "../layout/prism-elevate.css";

const Breakpoints = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.headingContainer}>
      <Typography type="title" gutterBottom>{`Borders`}</Typography>
      <Typography type="body" className={classes.subheading}>
        We currently have 1 value to reference for borders, it is for the
        borderRadius property:
      </Typography>
    </div>
    <div>
      <PrismCode component="pre" className="language-javascript">
        {` 
    const style = (theme) => ({
      button: {
        borderRadius: theme.globalBorderRadius,
      },
    });
      `}
      </PrismCode>
      <Typography
        type="body"
        className={classes.subheading}
        style={{ fontSize: "18px", marginTop: "24px" }}
      >
        The above sets the borderRadius of the targeted element to 4px.
      </Typography>

      <PrismCode component="pre" className="language-javascript">
        {` 
        const globalBorderRadius = "4px";
      `}
      </PrismCode>
      <div />
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
          Elevate-UI ships with a globalBorderRadius variable set to 4px.
        </div>
      </div>
    </Typography>
    <Typography element="div" className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>
          This is the preferred method of setting borderRadius an any element.
        </div>
      </div>
    </Typography>
    <Typography element="div" className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>
          This is the default border radius for the EUI Button, Paper Component.
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
  headingContainer: {
    marginTop: theme.spacing.unit * 1.5,
    marginBottom: theme.spacing.unit * 1.5,
  },
  subheading: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
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

export default withStyles(styles, { name: "Breakpoints" })(Breakpoints);
