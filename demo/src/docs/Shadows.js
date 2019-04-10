import React from "react";
import PrismCode from "react-prism";
import Alert from "elevate-ui/Alert";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import CheckCircle from "elevate-ui-icons/CheckCircle";
import "../layout/prism-elevate.css";

const Shadows = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.headingContainer}>
      <Typography type="title" gutterBottom>{`Shadows`}</Typography>
      <Typography type="body" className={classes.subheading}>
        This is an example of how you would set boxShadow on an element:
      </Typography>
    </div>
    <div>
      <PrismCode component="pre" className="language-javascript">
        {` 
    const style = (theme) => ({
      profileImage: {
        boxShadow: theme.shadows[2],
      },
    });
      `}
      </PrismCode>
      <Typography
        type="body"
        className={classes.subheading}
        style={{ fontSize: "18px", marginTop: "24px" }}
      >
        The above example sets the boxShadow of the profileImage to the 3rd
        value down in our shadows array.
      </Typography>

      <Typography
        type="body"
        className={classes.subheading}
        style={{ fontSize: "18px", marginTop: "24px" }}
      >
        This is what the shadows array looks like inside our theme:
      </Typography>

      <PrismCode component="pre" className="language-javascript">
        {` 
    const shadows = [
      createShadow(0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1),
      createShadow(0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2),
      createShadow(0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2),
      createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
      createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
      createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
      createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
      createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
      createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
      createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
      createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
      createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
      createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
      createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
      createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
      createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
      createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
      createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
      createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
      createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
      createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
      createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
      createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
      createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
    ];
      `}
      </PrismCode>
      <div />
    </div>

    <Alert color="info" style={{ marginTop: "24px" }}>
      <Typography type="body" style={{ fontSize: "16px" }}>
        The number you set directly corresponds to that index in the shadows
        array. So if I say theme.shadows[0], I am referencing the 1st value
        stored in the shadows array.
      </Typography>
    </Alert>

    <Alert color="info" style={{ marginTop: "24px", marginBottom: "24px" }}>
      <Typography type="body" style={{ fontSize: "16px" }}>
        The higher the value, the higher the elevation of the element, 23 being
        the highest possible value.
      </Typography>
    </Alert>

    <Typography
      type="body"
      className={classes.subheading}
      style={{ fontSize: "18px", marginTop: "48px" }}
    >
      Examples:
    </Typography>

    <div className={classes.shadowExample}>
      <span style={{ fontWeight: "600" }}>theme.shadows[2]</span> is being
      applied to this here box.
    </div>

    <div className={classes.shadowExampleTwo}>
      <span style={{ fontWeight: "600" }}>theme.shadows[9]</span> is being
      applied to this here box.
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
          Elevate-UI ships with a createShadows array (displayed above).
        </div>
      </div>
    </Typography>
    <Typography element="div" className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>
          This is the preferred method of setting boxShadow an any element.
        </div>
      </div>
    </Typography>
    <Typography element="div" className={classes.body} type="body">
      <div className={classes.listItem}>
        <div className={classes.listIcon}>
          <CheckCircle size={22} color="#168C82" />
        </div>
        <div>
          The higher the value you set, the higher the perceived elevation of
          the element.
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
  link: {
    color: theme.colors.gray["900"],
    textDecoration: "none",
    fontWeight: "600",
    transition: theme.transitions.default,

    "&:hover": {
      color: theme.colors.gray["700"],
    },
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

export default withStyles(styles, { name: "Shadows" })(Shadows);
