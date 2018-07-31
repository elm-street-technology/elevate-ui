import React, { Component } from "react";
import withStyles from "react-jss";

import Typography from "elevate-ui/Typography";
import Paper from "elevate-ui/Paper";
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
  code: string,
};

class LiveExample extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      showSource: false,
    };
  }

  toggleSource = () => {
    this.setState((state) => ({ showSource: !state.showSource }));
  };

  render() {
    const { classes, element: Element, code } = this.props;
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
            <Button
              onClick={this.toggleSource}
              type="button"
              color="primary"
              className={classes.button}
            >
              {this.state.showSource ? "Hide Source Code" : "Show Source Code"}
            </Button>
          </div>
        </div>
        <div
          className={this.state.showSource ? classes.hidden : classes.visible}
        >
          <Element />
        </div>
        <div
          className={this.state.showSource ? classes.visible : classes.hidden}
        >
          <Paper>
            <PrismCode component="pre" className="language-javascript">
              {code}
            </PrismCode>
          </Paper>
        </div>
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
  hidden: {
    display: "none",
  },
  visible: {
    display: "block",
  },
}))(LiveExample);
