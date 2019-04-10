import React from "react";
import PrismCode from "react-prism";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import "../layout/prism-elevate.css";

const FullScreenLoader = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.headingContainer}>
      <Typography
        type="title"
        gutterBottom
      >{`<FullScreenLoader />`}</Typography>
      <Typography type="body" className={classes.subheading}>
        A component you can show for loading states.
      </Typography>
    </div>

    <PrismCode component="pre" className="language-javascript">
      {` 
    import FullScreenLoader from 'elevate-ui/Loadable/FullscreenLoader';

    const state = {
      loading: false,
    }
    
    render() {
      if (this.state.loading) {
        <FullscreenLoader pastDelay />
      } 
    }
      `}
    </PrismCode>

    <div className={classes.pastDelayContainer}>
      <Typography gutterBottom type="heading3">
        pastDelay
      </Typography>
      <Typography type="body">
        Pass the prop`pastDelay` and you can control the length of time before
        the loader renders.
      </Typography>
    </div>

    <Typography
      type="body"
      className={classes.subheading}
      style={{ marginTop: "48px" }}
    >
      For example, you could have the following:
    </Typography>

    <PrismCode component="pre" className="language-javascript">
      {` 
      <FullscreenLoader pastDelay={() => setTimeout(() => true, 300)} />
      `}
    </PrismCode>

    <Typography
      style={{ marginTop: "24px" }}
      type="body"
      className={classes.subheading}
    >
      This makes it so the FullScreenLoader doesn't appear unless the state has
      been loading for more than 300ms.
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
  shadowExample: {
    boxShadow: theme.shadows[2],
    borderRadius: theme.globalBorderRadius,
    padding: theme.spacing.unit * 2,
  },
  shadowExampleTwo: {
    borderRadius: theme.globalBorderRadius,
    boxShadow: theme.shadows[9],
    padding: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 1.5,
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
  pastDelayContainer: {
    marginTop: theme.spacing.unit * 4,
  },
});

export default withStyles(styles, { name: "FullScreenLoader" })(
  FullScreenLoader
);
