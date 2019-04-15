import React from "react";
import PrismCode from "react-prism";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import CheckCircle from "elevate-ui-icons/CheckCircle";
import Sizing from "./images/sizing.png";
import "../layout/prism-elevate.css";
import Alert from "elevate-ui/Alert";

const Spacing = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.headingContainer}>
      <Typography type="title" gutterBottom>{`Spacing`}</Typography>
      <Typography type="body" className={classes.subheading}>
        Below is the base unit set for spacing in ElevateUI.
      </Typography>
    </div>
    <div>
      <PrismCode component="pre" className="language-javascript">
        {` 
    const spacing = {
      unit: 16,
    };
      `}
      </PrismCode>
      <Typography
        gutterBottom
        type="heading3"
        className={classes.sizingHeading}
      >
        Sizing Chart
      </Typography>
      <Typography
        type="body"
        className={classes.subheading}
        style={{ fontSize: "18px" }}
      >
        Below is the sizing chart for ElevateUI. This will help us keep spacing
        consistent accross all Elevate products.
      </Typography>
      <div className={classes.sizingContainer}>
        <img className={classes.sizing} src={Sizing} alt={"sizing-chart"} />
      </div>

      <Typography
        type="body"
        className={classes.subheading}
        style={{ fontSize: "18px", marginTop: "48px" }}
      >
        When you want to apply spacing around or outside an element (margin,
        padding) use the spacing unit like so:
      </Typography>

      <PrismCode component="pre" className="language-javascript">
        {` 
    const style = (theme) => ({
      wrapper: {
        marginTop: theme.spacing.unit,
      },
    });
      `}
      </PrismCode>
      <div />
    </div>

    <div>
      <Typography
        type="body"
        className={classes.subheading}
        style={{ fontSize: "18px", marginTop: "48px" }}
      >
        To increase or decrease the amount of spacing, take any of the multiples
        from the sizing chart above and apply like so:
      </Typography>

      <PrismCode component="pre" className="language-javascript">
        {` 
    const style = (theme) => ({
      wrapper: {
        marginTop: theme.spacing.unit * 3,
      },

      heading: {
        paddingLeft: theme.spacing.unit * 0.5,
      },
    });
      `}
      </PrismCode>
      <Alert style={{ marginTop: "24px" }} color="warning">
        <Typography type="body" style={{ fontSize: "16px" }}>
          To achieve consistency across our UI's it's important we only use
          multiples from the sizing chart instead of handpicked values like 3.4,
          4.8, .333.
        </Typography>
      </Alert>
      <div />
    </div>

    <Typography
      type="body"
      className={classes.subheading}
      style={{ fontSize: "18px", marginTop: "48px" }}
    >
      The above JSS would result in the following CSS:
    </Typography>
    <PrismCode component="pre" className="language-javascript">
      {` 
    .wrapper {
      margin-top: 48px;
    }

    .heading {
      padding-left: 8px;
    }
      `}
    </PrismCode>

    <Typography className={classes.sectionHeading} gutterTop type="heading3">
      Takeaways
    </Typography>

    <Typography element="div" className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>
          Following the spacing guidelines above is necessary in order for us to
          produce consistent, clean UI.
        </div>
      </div>
    </Typography>
    <Typography element="div" className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>
          If you need to add spacing around or inside of an element, grab a
          value from the sizing chart and multiply{" "}
          <span style={{ fontWeight: "600" }}>theme.spacing.unit</span> by that
          number
        </div>
      </div>
    </Typography>
    <Typography element="div" className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>
          This spacing system helps us create better designs, with less effort,
          in less time.
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
  shadowExample: {
    boxShadow: theme.globalBoxShadow,
    borderRadius: theme.globalBorderRadius,
    padding: theme.spacing.unit * 2,
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
  sizingContainer: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.unit * 2,
    boxShadow: "0px 8px 12px rgba(0,0,0,0.05)",
    borderRadius: theme.globalBorderRadius,
  },
  sizing: {
    width: "100%",
  },
  sizingHeading: {
    marginTop: theme.spacing.unit * 4,
  },
});

export default withStyles(styles, { name: "Spacing" })(Spacing);
