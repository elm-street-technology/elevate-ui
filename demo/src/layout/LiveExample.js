import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";

import Typography from "elevate-ui/Typography";
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
            type="heading5"
            className={classes.subHeading}
          >
            Live Example
          </Typography>
        </div>
        <div className={classes.exampleContainer}>
          <Element className={classes.example} />
        </div>
        <Typography id="example" type="heading5" className={classes.subHeading}>
          Source code for example
        </Typography>
        <div className={classes.exampleContainer}>
          <PrismCode component="pre" className="language-javascript">
            {code}
          </PrismCode>
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
  example: {
    padding: "24px 0px !important",
  },
  subHeading: {
    display: "block",
    margin: "1.5em 0 .25em",
    fontSize: "16px",
    fontWeight: "600",
    letterSpacing: ".8px",
    color: theme.colors.gray600,
    textTransform: "uppercase",
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
  exampleContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "48px",
  },
}))(LiveExample);
