import React from "react";
import PrismCode from "react-prism";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import CheckCircle from "elevate-ui-icons/CheckCircle";
import Alert from "elevate-ui/Alert";
import "../layout/prism-elevate.css";

const Breakpoints = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.headingContainer}>
      <Typography type="title" gutterBottom>{`Breakpoints`}</Typography>
      <Typography type="body" className={classes.subheading}>
        This is how you would reference our standard mobile breakpoint of 900px:
      </Typography>
    </div>
    <div>
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
      `}
      </PrismCode>
      <div className={classes.alertContainer}>
        <Alert color="warning">
          <Typography type="body" style={{ fontSize: "16px" }}>
            <span style={{ fontWeight: "600" }}>900px</span> is typically the
            breakpoint at which we go to a desktop layout.
          </Typography>
          <Typography type="body" style={{ fontSize: "16px" }}>
            Screens below that size can{" "}
            <span style={{ fontWeight: "600" }}>usually</span> be given a mobile
            layout.{" "}
          </Typography>
        </Alert>
      </div>
      <Typography
        type="body"
        className={classes.subheading}
        style={{ fontSize: "18px", marginTop: "24px" }}
      >
        The above JSS produces the following CSS:
      </Typography>

      <PrismCode component="pre" className="language-javascript">
        {` 
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
      <div />
    </div>

    <div className={classes.section}>
      <Typography gutterTop type="heading3">
        theme.breakpoints
      </Typography>
      <Typography type="body" className={classes.subheading}>
        This is what breakpoints looks like inside our theme:
      </Typography>

      <PrismCode component="pre" className="language-javascript">
        {`
    const breakpoints = (minWidth) => {
      if (!minWidth) {
        return new Error("Must enter a valid minWidth to use theme breakpoints");
      }
      return @media (min-width: (minWidth)px);
    };
        `}
      </PrismCode>
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
          Elevate-UI ships with a "breakpoints" function that allows the user to
          pass a number and receive a responsive media query in return.
        </div>
      </div>
    </Typography>
    <Typography element="div" className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>You can pass any number you'd like for your min-width.</div>
      </div>
    </Typography>
    <Typography element="div" className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>We typically use 900px as the mobile/desktop breakpoint.</div>
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

export default withStyles(styles, { name: "Breakpoints" })(Breakpoints);
