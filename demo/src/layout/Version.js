import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import Typography from "elevate-ui/Typography";
import axios from "axios";
import first from "lodash/first";
import "./prism-elevate.css";
require("prismjs");

type State = {
  version: string,
};

type Props = {
  classes: Object,
  code: string,
};

class Version extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      version: "",
    };
  }

  componentDidMount() {
    this.getVersion();
  }

  getVersion = async () => {
    await axios
      .get(
        "https://api.github.com/repos/elm-street-technology/elevate-ui/tags?per_page=1"
      )
      .then((response) => {
        const latest = first(response.data);
        return this.setState({ version: latest && latest.name });
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <Typography type="body2" className={classes.root}>
        {this.state.version}
      </Typography>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    fontSize: "14px",
    letterSpacing: ".5px",
    color: theme.colors.gray["700"],
  },
}))(Version);
