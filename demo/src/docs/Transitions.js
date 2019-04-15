import React from "react";
import PrismCode from "react-prism";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import CheckCircle from "elevate-ui-icons/CheckCircle";
import "../layout/prism-elevate.css";

const Transitions = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.headingContainer}>
      <Typography type="title" gutterBottom>{`Shadows`}</Typography>
      <Typography type="body" className={classes.subheading}>
        This is how you would reference the default transition:
      </Typography>
    </div>
    <div>
      <PrismCode component="pre" className="language-javascript">
        {` 
    const style = (theme) => ({
      button: {
        transition: theme.transitions['default'],
      }
    });
      `}
      </PrismCode>
      <Typography
        type="body"
        className={classes.subheading}
        style={{ fontSize: "18px", marginTop: "24px" }}
      >
        The above sets the transition property to the value stored in the theme:
      </Typography>

      <PrismCode component="pre" className="language-javascript">
        {` 
    const transitions = {
      default: "all 200ms linear",
    };
      `}
      </PrismCode>
      <div />
    </div>
    <Typography
      type="body"
      className={classes.subheading}
      style={{ fontSize: "18px", marginTop: "24px" }}
    >
      We also have another tansition value stored in the theme called
      "accordion":
    </Typography>

    <PrismCode component="pre" className="language-javascript">
      {` 
    const transitions = {
      default: "all 200ms linear",
      accordion: "all 2s ease-in-out",
    };
      `}
    </PrismCode>

    <Typography
      type="body"
      className={classes.subheading}
      style={{ fontSize: "18px", marginTop: "48px" }}
    >
      Result:
    </Typography>

    <div className={classes.transitionExample}>
      The default transition is being applied to this box for hover states.
    </div>

    <PrismCode component="pre" className="language-javascript">
      {` 
      const style = (theme) => ({
        exampleBox: {
          transition: theme.transitions['default'],

          "&:hover": {
            color: theme.colors.white,
            backgroundColor: theme.colors.purple["600"],
          },

        }
      });
      `}
    </PrismCode>
    <div />

    <Typography className={classes.sectionHeading} gutterTop type="heading3">
      Takeaways
    </Typography>

    <Typography element="div" className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>
          Elevate-UI ships with a default transition value (see above examples).
        </div>
      </div>
    </Typography>
    <Typography element="div" className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>
          This is the preferred method of setting a basic transition an any
          element.
        </div>
      </div>
    </Typography>
    <Typography element="div" className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>
          This is the default transition to be used for Elevate UI components.
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
  headingContainer: {
    marginTop: theme.spacing.unit * 1.5,
    marginBottom: theme.spacing.unit * 1.5,
  },
  subheading: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  transitionExample: {
    boxShadow: theme.globalBoxShadow,
    borderRadius: theme.globalBorderRadius,
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    transition: theme.transitions["default"],

    "&:hover": {
      color: theme.colors.white,
      backgroundColor: theme.colors.purple["600"],
    },
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

export default withStyles(styles, { name: "Transitions" })(Transitions);
