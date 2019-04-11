import React from "react";
import PrismCode from "react-prism";
import Alert from "elevate-ui/Alert";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import CheckCircle from "elevate-ui-icons/CheckCircle";
import "../layout/prism-elevate.css";

const zIndex = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.headingContainer}>
      <Typography type="title" gutterBottom>{`zIndex`}</Typography>
      <Typography type="body" className={classes.subheading}>
        This is an example of referencing one of the available values set in our
        zIndex object:
      </Typography>
    </div>
    <div>
      <PrismCode component="pre" className="language-javascript">
        {` 
    const style = (theme) => ({
      modal: {
        zIndex: theme.zIndex.modal,
      }
    });
      `}
      </PrismCode>
      <Typography
        type="body"
        className={classes.subheading}
        style={{ fontSize: "18px", marginTop: "24px" }}
      >
        Below is what the zIndex object looks like in our theme:
      </Typography>

      <PrismCode component="pre" className="language-javascript">
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
      <div />
    </div>

    <div className={classes.alertContainer}>
      <Alert color="info">
        <Typography type="body" style={{ fontSize: "16px" }}>
          Each property is named after the element it should be set on.
        </Typography>
        <Typography type="body" style={{ fontSize: "16px" }}>
          For example, say you are styling a tooltip, you would simply use the
          tooltip property within the zIndex object.
        </Typography>
      </Alert>
    </div>
    <Typography
      type="body"
      className={classes.subheading}
      style={{ fontSize: "18px", marginTop: "16px" }}
    />

    <Alert className={classes.alertContainer} color="warning">
      <Typography type="body" style={{ fontSize: "18px" }}>
        This allows us to avoid, for example, writing the below just to make
        sure our element appears on top:
      </Typography>
    </Alert>

    <PrismCode component="pre" className="language-javascript">
      {` 
    const style = (theme) => ({
      tooltip: {
        zIndex: 9999999999,
      }
    });
      `}
    </PrismCode>

    <Typography
      type="body"
      className={classes.subheading}
      style={{ fontSize: "18px", marginTop: "24px" }}
    >
      By setting these values up front and sticking to them, we're avoiding
      potential zIndex hell. No longer do you need to fight other elements for
      positioning, elements simply fall into their designated space.
    </Typography>

    <Typography className={classes.sectionHeading} gutterTop type="heading3">
      Takeaways
    </Typography>

    <Typography element="div" className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>
          Elevate-UI ships with a zIndex object which holds several properties.
        </div>
      </div>
    </Typography>
    <Typography element="div" className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>
          Each property is named after the element that it should be applied to.
        </div>
      </div>
    </Typography>
    <Typography element="div" className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>
          Using the zIndex from our theme negates the need to hardcode any
          zIndex values.
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
    marginTop: theme.spacing.unit * 1.5,
  },
});

export default withStyles(styles, { name: "zIndex" })(zIndex);
