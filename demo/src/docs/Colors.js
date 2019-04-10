// ignore
import React from "react";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import { PrismCode } from "react-prism";
import CheckCircle from "elevate-ui-icons/CheckCircle";

import { Link } from "react-router-dom";

const Colors = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.headingContainer}>
      <Typography type="title" gutterBottom>{`Colors`}</Typography>
      <Typography type="body" className={classes.subheading}>
        This is how you would reference Elevate's Primary Red for a heading:
      </Typography>
    </div>
    <div>
      <div>
        <PrismCode component="pre" className="language-javascript">
          {`
  import React from "react";
  import withStyles from "elevate-ui/withStyles";
  import Typography from "elevate-ui/Typography";
  
  const Heading = ({ classes }) => (
    <div>
      <Typography type="heading4" className={classes.heading}>
        Hello there 👋
      </Typography>
    </div>
  );
  
  export default withStyles((theme) => ({
      heading: {
        color: theme.colors.primary["500"]
      }
  }))(Heading);
          `}
        </PrismCode>
        <div className={classes.example}>
          <Typography type="heading4" className={classes.exampleHeading}>
            Hello there{" "}
            <span role="img" aria-label="hand-waving">
              👋
            </span>
          </Typography>
        </div>
        <div className={classes.exampleHighlight}>
          <PrismCode component="pre" className="language-javascript">
            color: theme.colors.primary["500"]
          </PrismCode>
        </div>
      </div>
    </div>
    <div className={classes.section}>
      <Typography gutterTop type="heading3">
        Colors object
      </Typography>
      <Typography type="body" className={classes.subheading}>
        Our colors object looks like this:
      </Typography>

      <PrismCode component="pre" className="language-javascript">
        {`
      const colors = {
        primary: {
          "050": "#FFF5F5",
          "100": "#FFE4E4",
          "200": "#FFD4D4",
          "300": "#F99E9B",
          "400": "#F17772",
          "500": "#F15953",
          "600": "#D2413B",
          "700": "#A82B26",
          "800": "#821410",
          "900": "#610404",
        },
        secondary: {
          "050": "#F3FFFE",
          "100": "#EBFAF9",
          "200": "#DAF2F1",
          "300": "#9EE5E0",
          "400": "#68D0C8",
          "500": "#55C3BA",
          "600": "#2EA59B",
          "700": "#168C82",
          "800": "#086B62",
          "900": "#014A44",
        },
        // the rest of the colors found in our Color Palette
      }
        `}
      </PrismCode>
    </div>
    <Typography className={classes.sectionHeading} gutterTop type="heading3">
      Takeaways
    </Typography>

    <Typography className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>
          Using colors from the ElevateUI color palette is very simple through
          the power of theming in JSS. Look{" "}
          <a
            className={classes.link}
            href="https://cssinjs.org/react-jss/?v=v10.0.0-alpha.16#theming"
            target="blank"
          >
            here
          </a>{" "}
          for a more condensed example of how that is set up.
        </div>
      </div>
    </Typography>
    <Typography className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>
          To reference a color from ElevateUI, use dot notation to drill down
          into the theme object where the desired hex code is stored.
        </div>
      </div>
    </Typography>
    <Typography className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>
          Stick to using only the colors already included in our pre-defined{" "}
          <Link className={classes.link} to="/color-palette">
            palette{" "}
          </Link>
          instead of handpicked hex codes.
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
  exampleHighlight: {
    marginTop: theme.spacing.unit * 1.75,
  },
  subheading: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

export default withStyles(styles, { name: "Colors" })(Colors);
