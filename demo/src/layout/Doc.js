import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";

import MethodsTable from "./MethodsTable";
import PropsTable from "./PropsTable";

import Typography from "elevate-ui/Typography";
import LiveExample from "./LiveExample";
import FlowTypes from "./FlowTypes";

type Props = {
  folder: string,
  classes: Object,
};

type State = {
  fileText: string,
};

class Doc extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      fileText: "",
    };
  }

  componentDidMount() {
    this.getFileContents();
  }

  getFileContents = () => {
    const baseUrl = window.location.href.includes("github.io")
      ? "/elevate-ui"
      : "";
    fetch(`${baseUrl}/docs/${this.props.folder}.js`)
      .then((res) => res.text())
      .then((fileText) => this.setState({ fileText }));
  };

  render() {
    const { folder, classes } = this.props;
    const { fileText } = this.state;
    const documentation = require(`elevate-ui/src/${folder}/component.json`);
    const Example = require(`../docs/${folder}.js`).default;
    const componentProps: Array<any> =
      documentation.props && Object.entries(documentation.props);
    const componentMethods: Array<any> =
      documentation.methods && Object.entries(documentation.methods);

    return (
      <div className={classes.container}>
        <div className={classes.descriptionContainer}>
          <div className={classes.headingContainer}>
            <Typography gutterBottom type="title">{`<${
              documentation.displayName
            } />`}</Typography>
            <Typography type="body">{documentation.description}</Typography>
          </div>
          <LiveExample element={Example} code={fileText} />
          {componentProps && (
            <PropsTable {...this.props} componentProps={componentProps} />
          )}
          {componentMethods.length > 0 && (
            <MethodsTable {...this.props} componentMethods={componentMethods} />
          )}
          {folder === "Feed" ? <FlowTypes folder={folder} /> : null}
        </div>
      </div>
    );
  }
}

export default withStyles((theme) => ({
  table: {
    display: "flex",
    position: "relative",
    flexFlow: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    background: theme.colors.white,
    border: `1px solid ${theme.colors.gray200}`,
    borderRadius: theme.globalBorderRadius,
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
  },
  hr: {
    margin: "25px 0",
    width: "100%",
    height: "2px",
    border: "none",
    backgroundColor: "#dadcde",
  },
  code: {
    fontFamily: "monospace",
    fontWeight: "600",
    fontSize: "14px",
  },
  descriptionContainer: {
    maxWidth: "680px",
    margin: "45px auto",

    [theme.breakpoints(900)]: {
      margin: "45px 45px 45px 80px",
    },
  },
  headingContainer: {
    marginBottom: "24px",
  },
  container: {
    width: "100%",
    padding: "12px",

    [theme.breakpoints(600)]: {
      padding: "24px 0px",
    },

    border: "none",
    background: "#fafafa",
  },
}))(Doc);
