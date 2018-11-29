import React from "react";

import Typography from "elevate-ui/Typography";
import Button from "elevate-ui/Button";
import withStyles from "elevate-ui/withStyles";
import Paper from "elevate-ui/Paper";
import Person from "elevate-ui-icons/Person";
import Cart from "elevate-ui-icons/Cart";

const ButtonExample = () => (
  <Paper>
    <h2>Standard Button</h2>
    <Typography type="body" gutterBottom gutterTop>
      Default Props, using {`type="button"`}
    </Typography>
    <br />
    <Button type="button">Load More</Button>
    <Typography type="body" gutterBottom gutterTop>
      Stress test of a wide button using {`color="secondary"`}:
    </Typography>
    <Button isOutlined color="secondary" type="button" style={{ width: 500 }}>
      Wide Button
    </Button>
    <br />
    <br />
    <h2>Outlined Buttons</h2>
    <br />
    <Button isOutlined type="button">
      Load More
    </Button>
    <br />
    <br />
    <Typography type="body" gutterBottom gutterTop>
      Another outlined button using {`color="secondary"`}:
    </Typography>
    <Button isOutlined color="secondary" type="button">
      Filter Results
    </Button>
    <br />
    <br />
    <h2>Custom Color Buttons</h2>
    <br />
    <Button color="rgb(19, 30, 177)" type="button">
      Filter Results
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
    <Button isOutlined color="#333" type="button">
      Filter Results
    </Button>
    <br />
    <br />
    <h2>Buttons With Icons</h2>
    <br />
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
    <br />
    <br />
    <h2>Disabled Buttons</h2>
    <br />
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
  </Paper>
);

export default withStyles(() => ({
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
}))(ButtonExample);
