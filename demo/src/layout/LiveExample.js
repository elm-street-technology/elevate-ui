// @flow
import React, { Component } from "react";
import withStyles from "react-jss";
import classNames from "classnames";

import Typography from "elevate-ui/Typography";
import Button from "elevate-ui/Button";
import PrismCode from "react-prism";
import "./prism-elevate.css";
require("prismjs");

type State = {
  showSource: boolean,
};

type Props = {
  classes: Object,
  element: Function,
};

class LiveExample extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      showSource: false,
    };
  }

  render() {
    const { classes, element: Element } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.exampleHeader}>
          <Typography
            id="example"
            type="heading2"
            className={classes.subHeading}
          >
            Live Example
          </Typography>
          <div>
            <Button type="button" color="primary" className={classes.button}>
              Show Source
            </Button>
          </div>
        </div>
        <Element />
        <PrismCode className="language-javascript">
          {`const id = x => x`}
        </PrismCode>
      </div>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    flexFlow: "column",
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
    margin: "1.5em 0",
    fontSize: "1.5rem",
  },
  button: {
    width: "175px",
  },
}))(LiveExample);
