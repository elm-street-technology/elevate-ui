import React from "react";
import PrismCode from "react-prism";
import Alert from "elevate-ui/Alert";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import CheckCircle from "elevate-ui-icons/CheckCircle";
import Paper from "elevate-ui/Paper";
import Button from "elevate-ui/Button";
import { withGlobalNotification } from "elevate-ui/GlobalNotification";
import "../layout/prism-elevate.css";

const GlobalNotification = ({ classes, theme, dispatchNotification }) => {
  // const throwNotification = (title, message, type) => {
  //   dispatchNotification(title, message, type);
  // };
  return (
    <div className={classes.wrapper}>
      <div className={classes.headingContainer}>
        <Typography type="title" gutterBottom>
          Global Notifications
        </Typography>
        <Typography type="body" gutterBottom>
          Elevate UI ships with a Global Notification system that makes sending
          alerts to the user easy and consistent. These are great for informing
          the user that something has been created, deleted, or editied as well
          as handling errors.
        </Typography>
        <Typography type="body" gutterBottom>
          These notifications are stackable - meaning you can show multiple at a
          time, and will dismiss themselves automatically.
        </Typography>
        <Alert color="info">
          <Typography type="body2">
            There is no need for you to wrap your app or components in a
            `GlobalNotificationProvider` as we are already doing that for you
            via the `ThemeProvider`
          </Typography>
        </Alert>
      </div>
      <div className={classes.exampleHeader}>
        <Typography id="example" type="heading5" className={classes.subHeading}>
          Live Example
        </Typography>
      </div>
      <div className={classes.exampleContainer}>
        <Paper withPadding className={classes.buttonContainers}>
          <Button
            type="button"
            onClick={() =>
              dispatchNotification({
                title: "Success",
                message: "Created new admin",
                type: "success",
              })
            }
            color={theme.colors.green["700"]}
          >
            Show Success
          </Button>
          <Button
            type="button"
            color={theme.colors.primary["700"]}
            onClick={() =>
              dispatchNotification({
                title: "Error",
                message: "Could not create new admin",
                type: "error",
              })
            }
          >
            Show Error
          </Button>
          <Button
            type="button"
            color={theme.colors.yellow["500"]}
            onClick={() =>
              dispatchNotification({
                title: "Warning",
                message: "An admin with that name already exists",
                type: "warning",
              })
            }
          >
            Show Warning
          </Button>
          <Button
            type="button"
            color={theme.colors.tertiary["700"]}
            onClick={() =>
              dispatchNotification({
                title: "Admin Rights",
                message: "This user can edit, create, and delete any posts",
                type: "info",
              })
            }
          >
            Show Info
          </Button>
        </Paper>
      </div>
      <Typography id="example" type="heading5" className={classes.subHeading}>
        Source code for example
      </Typography>
      <div className={classes.exampleContainer}>
        <PrismCode component="pre" className="language-javascript">
          {`
import React from "react";
import Paper from "elevate-ui/Paper";
import Button from "elevate-ui/Button";
import { withGlobalNotification } from "elevate-ui/GlobalNotification";
import withStyles from "elevate-ui/withStyles";

const GlobalNotificationExample = ({classes, theme, dispatchNotification}) => (
  <Paper withPadding className={classes.buttonContainers}>
    <Button
      type="button"
      onClick={() =>
        dispatchNotification({
          title: "Success",
          message: "Created new admin",
          type: "success",
        })
      }
      color={theme.colors.green["700"]}
    >
      Show Success
    </Button>
    <Button
      type="button"
      color={theme.colors.primary["700"]}
      onClick={() =>
        dispatchNotification({
          title: "Error",
          message: "Could not create new admin",
          type: "error",
        })
      }
    >
      Show Error
    </Button>
    <Button
      type="button"
      color={theme.colors.yellow["500"]}
      onClick={() =>
        dispatchNotification({
          title: "Warning",
          message: "An admin with that name already exists",
          type: "warning",
        })
      }
    >
      Show Warning
    </Button>
    <Button
      type="button"
      color={theme.colors.tertiary["700"]}
      onClick={() =>
        dispatchNotification({
          title: "Admin Rights",
          message: "This user can edit, create, and delete any posts",
          type: "info",
        })
      }
    >
      Show Info
    </Button>
  </Paper>
)

const styles = (theme) => ({
  //...your style definitions
});

export default withGlobalNotification(withStyles(styles)(GlobalNotificationExample));
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
            Use these alerts when an action has been performed to indicate to
            the user that an action has completed.
          </div>
        </div>
      </Typography>
      <Typography element="div" className={classes.body} type="body">
        <div className={classes.listItem}>
          <div className={classes.listIcon}>
            <CheckCircle size={22} color="#168C82" />
          </div>
          <div>
            The `dispatchNotification` function is passed as a prop, so you can
            use it any component exported with `withGlobalNotification`
          </div>
        </div>
      </Typography>
      <Typography element="div" className={classes.body} type="body">
        <div className={classes.listItem}>
          <div className={classes.listIcon}>
            <CheckCircle size={22} color="#168C82" />
          </div>
          <div>
            The `dispatchNotification` function expects an object composed of
            title, message, and type.
          </div>
        </div>
      </Typography>
      <Typography element="div" className={classes.body} type="body">
        <div className={classes.listItem}>
          <div className={classes.listIcon}>
            <CheckCircle size={22} color="#168C82" />
          </div>
          <div>
            There are four types of notifications - `success`, `warning`,
            `error`, `info`.
          </div>
        </div>
      </Typography>
    </div>
  );
};

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
  headingContainer: {
    marginTop: theme.spacing.unit * 1.5,
    marginBottom: theme.spacing.unit * 1.5,
  },
  exampleHeader: {
    display: "flex",
    width: "100%",
    flex: "1",
    justifyContent: "spaceBetween",
    alignItems: "center",
  },
  subHeading: {
    display: "block",
    margin: "1.5em 0 .25em",
    fontSize: "16px",
    fontWeight: "600",
    letterSpacing: ".8px",
    color: theme.colors.gray600,
    textTransform: "uppercase",
  },
  exampleContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "48px",
  },
  buttonContainers: {
    textAlign: "center",
    "& > * + *": {
      marginLeft: 8,
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

export default withGlobalNotification(withStyles(styles)(GlobalNotification));
