import React from "react";

import Typography from "elevate-ui/Typography";
import Button from "elevate-ui/Button";
import withStyles from "elevate-ui/withStyles";
import Paper from "elevate-ui/Paper";
import Person from "elevate-ui-icons/Person";
import Cart from "elevate-ui-icons/Cart";

const ButtonExample = ({ classes }) => (
  <div>
    <br />
    <Typography type="heading5" gutterTop gutterBottom>
      Primary Buttons
    </Typography>
    <Typography style={{ marginBottom: "8px" }} type="body2" gutterTop>
      These are buttons to be used for primary actions. In most cases, we'll
      want 1 primary action per page.
    </Typography>
    <Paper>
      <Typography type="body" gutterBottom gutterTop>
        Default Props, using {`type="button"`}
      </Typography>
      <Button type="button">Load More</Button>
      <br />
      <br />
      <Button type="button" color="secondary">
        Sign up
      </Button>
      <br />
      <br />
      <Button type="button" color="tertiary">
        Sign in
      </Button>
    </Paper>

    <Paper style={{ marginTop: "32px" }}>
      <Typography type="body" gutterBottom gutterTop>
        Stress test of a wide button using {`color="secondary"`}:
      </Typography>
      <Button
        isOutlined
        color="secondary"
        type="button"
        className={classes.wideButton}
      >
        Wide Button
      </Button>
    </Paper>
    <br />
    <br />
    <Typography type="heading5" gutterTop gutterBottom>
      Secondary Buttons
    </Typography>
    <Typography style={{ marginBottom: "8px" }} type="body2" gutterTop>
      These are buttons to be used for secondary actions. This style allows us
      to de-emphasize secondary actions in turn emphasizing primary actions.
    </Typography>
    <Paper>
      <Button isSecondary type="button" color="primary">
        Cancel
      </Button>
      <br />
      <br />
      <Button isSecondary type="button" color="tertiary">
        Update
      </Button>
      <br />
      <br />
      <Typography style={{ marginBottom: "8px" }} type="body" gutterTop>
        Passing in a custom hex value of {`color="#9EE5E0"`}:
      </Typography>
      <Button isSecondary type="button" color="#9EE5E0">
        Log in
      </Button>
    </Paper>
    <Typography type="heading5" gutterBottom className={classes.heading}>
      Outlined Buttons
    </Typography>
    <Typography style={{ marginBottom: "8px" }} type="body2" gutterTop>
      Outlined button are to be used for any actions not falling under primary
      or secondary.
    </Typography>
    <Paper>
      <Button isOutlined type="button">
        Load More
      </Button>
      <br />
      <br />
      <Button isOutlined type="button" color="secondary">
        Secondary Button
      </Button>
      <br />
      <br />
      <Button isOutlined type="button" color="tertiary">
        Tertiary Button
      </Button>
    </Paper>
    <br />
    <br />
    <Paper>
      <Typography type="body" gutterBottom gutterTop>
        Another outlined button using {`color="secondary"`}:
      </Typography>
      <Button isOutlined color="secondary" type="button">
        Filter Results
      </Button>
    </Paper>
    <br />
    <br />
    <Typography type="heading5" gutterTop gutterBottom>
      Transparent Buttons
    </Typography>
    <Typography style={{ marginBottom: "8px" }} type="body2" gutterTop>
      Transparent buttons allow you to use the structure and functionality of a
      standard button but appear just as text until hovered or clicked.
    </Typography>
    <Paper>
      <Button isTransparent type="button" color="primary">
        Cancel
      </Button>
      <br />
      <br />
      <Button isTransparent type="button" color="tertiary">
        Update
      </Button>
      <br />
      <br />
      <Typography style={{ marginBottom: "8px" }} type="body" gutterTop>
        Passing in a custom hex value of {`color="#bada55"`}:
      </Typography>
      <Button isTransparent type="button" color="#bada55">
        Log in
      </Button>
    </Paper>
    <br />
    <br />
    <Typography
      type="heading5"
      style={{ marginBottom: "8px" }}
      className={classes.heading}
    >
      Custom Color Buttons
    </Typography>
    <Paper>
      <br />
      <Button color="rgb(19, 30, 177)" type="button">
        Filter Results
      </Button>
      <br />
      <br />
      <Button color="#FFFFFF" type="button">
        White Button
      </Button>
      <br />
      <br />
      <Button
        element="a"
        href="http://elevate-ui.com"
        isOutlined
        color="rgb(32, 148, 232)"
        type="button"
      >
        Button With Link
      </Button>
      <br />
      <br />
      <Button
        element="a"
        href="http://elevate-ui.com"
        color="rgb(32, 148, 232)"
        type="button"
        disabled
      >
        Disabled Button With Link
      </Button>
      <br />
      <br />
      <Button isOutlined color="#333" type="button">
        Filter Results
      </Button>
    </Paper>
    <br />
    <br />
    <Typography type="heading5" gutterBottom className={classes.heading}>
      Buttons With Icons
    </Typography>
    <Paper>
      <Button color="primary" icon={<Person />} type="button">
        Add Lead
      </Button>
      <br />
      <br />
      <Button
        color="secondary"
        icon={<Cart />}
        iconAlign="right"
        isOutlined
        type="button"
      >
        Check Out
      </Button>
    </Paper>
    <br />
    <br />
    <Typography type="heading5" gutterBottom className={classes.heading}>
      Disabled Buttons
    </Typography>
    <Paper>
      <Button disabled color="primary" icon={<Person />} type="button">
        Add Lead
      </Button>
      <br />
      <br />
      <Button
        disabled
        color="secondary"
        isOutlined
        icon={<Person />}
        type="button"
      >
        Add Lead
      </Button>
      <br />
      <br />
      {/* {this will generate a console warning} */}
      <Button color="invalidColor" isOutlined icon={<Person />} type="button">
        Invalid Color
      </Button>
    </Paper>
    <br />
    <br />
  </div>
);

export default withStyles((theme) => ({
  preInline: {
    display: "inline-block",
    margin: "0 4px",
    backgroundColor: "rgb(250, 250, 250)",
  },
  code: {
    fontFamily: "monospace",
  },
  exampleContainer: {
    margin: "15px 0",
  },
  heading: {
    marginTop: "32px",
  },
  wideButton: {
    width: "300px",
    [theme.breakpoints(600)]: {
      width: "500px",
    },
  },
}))(ButtonExample);
