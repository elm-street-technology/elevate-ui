// @flow

// this view will render a 'flow-types' code block based on /:folder/flow-types.js

import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";

import Typography from "elevate-ui/Typography";
import Paper from "elevate-ui/Paper";
import PrismCode from "react-prism";
import "./prism-elevate.css";
require("prismjs");

type $Props = {
  classes: Object,
  folder: string,
};

type $State = {
  flowTypeCode: string,
};

class FlowTypes extends Component<$Props, $State> {
  constructor(props) {
    super(props);

    this.state = {
      flowTypeCode: "",
    };
  }

  componentDidMount() {
    this.getFileContents();
  }

  getFileContents = () => {
    const baseUrl = window.location.href.includes("github.io")
      ? "/elevate-ui"
      : "";
    fetch(`${baseUrl}/docs/${this.props.folder}/flow-types.js`)
      .then((res) => res.text())
      .then((flowTypeCode) => this.setState({ flowTypeCode }));
  };

  render() {
    const { classes } = this.props;
    const { flowTypeCode } = this.state;
    return (
      <div className={classes.root}>
        <Typography type="heading2" gutterBottom gutterTop>
          Flow Type Definitions
        </Typography>
        <Paper>
          <PrismCode component="pre" className="language-javascript">
            {flowTypeCode}
          </PrismCode>
        </Paper>
      </div>
    );
  }
}

const styles = () => ({
  root: {
    position: "relative",
  },
});

export default withStyles(styles, { name: "FlowTypes" })(FlowTypes);
