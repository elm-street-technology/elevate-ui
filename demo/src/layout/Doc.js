import React, { Component } from "react";
import withStyles from "react-jss";
import classNames from "classnames";

import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import LiveExample from "./LiveExample";

type Props = {
  folder: string,
  classes: Object,
};

type State = {
  fileText: string,
};

const PropsTable = (props) => {
  const { classes, componentProps } = props;
  return (
    <div>
      <Typography type="heading2" id="props" className={classes.subHeading}>
        Available Props
      </Typography>
      <div className={classes.table}>
        <div className={classes.row}>
          <div className={classes.col}>
            <strong>Prop Name</strong>
          </div>
          <div className={classes.col}>
            <strong>Flow Type</strong>
          </div>
          <div className={classes.col}>
            <strong>Required</strong>
          </div>
          <div className={classes.col}>
            <strong>Default Value</strong>
          </div>
          <div className={classNames(classes.col, classes.description)}>
            <strong>Description</strong>
          </div>
        </div>
        {componentProps &&
          componentProps.map((componentProp) => {
            return (
              <div key={componentProp[0]} className={classes.row}>
                <div className={classes.col}>
                  <pre>
                    <code className={classes.code}>{componentProp[0]}</code>
                  </pre>
                </div>
                <div className={classes.col}>
                  {componentProp[1].flowType && componentProp[1].flowType.name}
                </div>
                <div className={classes.col}>
                  {componentProp[1].required ? `true` : `false`}
                </div>
                <div className={classes.col}>
                  {componentProp[1].defaultValue &&
                    componentProp[1].defaultValue.value}
                </div>
                <div className={classNames(classes.col, classes.description)}>
                  {componentProp[1].description}
                </div>
              </div>
            );
          })}
      </div>
      <hr className={classes.hr} />
    </div>
  );
};

const MethodsTable = (props) => {
  const { classes, componentMethods } = props;
  return (
    <div>
      <Typography type="heading2" id="props" className={classes.subHeading}>
        Available Methods
      </Typography>
      <div className={classes.table}>
        <div className={classes.row}>
          <div className={classes.col}>
            <strong>Method Name</strong>
          </div>
          <div className={classes.col}>
            <strong>Doc Block</strong>
          </div>
          <div className={classes.col}>
            <strong>Modifiers</strong>
          </div>
          <div className={classes.col}>
            <strong>Params</strong>
          </div>
          <div className={classes.col}>
            <strong>Returns</strong>
          </div>
        </div>
        {componentMethods &&
          componentMethods.map((componentMethod) => {
            return (
              <div key={componentMethod[1].name} className={classes.row}>
                <div className={classes.col}>
                  <pre>
                    <code className={classes.code}>
                      {componentMethod[1].name}
                    </code>
                  </pre>
                </div>
                <div className={classes.col}>
                  {componentMethod[1].docblock && componentMethod[1].docblock}
                </div>
                <div className={classes.col}>
                  {componentMethod[1].modifiers}
                </div>
                <div className={classes.col}>
                  {componentMethod[1].params.length > 0
                    ? componentMethod[1].params.map((param) => (
                        <pre key={param.name}>
                          <code className={classes.code}>{param.name}</code>
                        </pre>
                      ))
                    : ""}
                </div>
                <div className={classes.col}>
                  {componentMethod[1].returns ? (
                    componentMethod[1].returns
                  ) : (
                    <pre>
                      <code className={classes.code}>null</code>
                    </pre>
                  )}
                </div>
              </div>
            );
          })}
      </div>
      <hr className={classes.hr} />
    </div>
  );
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
      <Paper>
        <Typography type="title">{`<${
          documentation.displayName
        } />`}</Typography>
        <Typography type="body">{documentation.description}</Typography>
        <LiveExample element={Example} code={fileText} />
        <hr className={classes.hr} />
        {componentProps && (
          <PropsTable {...this.props} componentProps={componentProps} />
        )}
        {componentMethods.length > 0 && (
          <MethodsTable {...this.props} componentMethods={componentMethods} />
        )}
      </Paper>
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
    margin: "15px 0",
    background: theme.colors.white,
    border: `1px solid ${theme.colors.gray200}`,
    borderRadius: theme.globalBorderRadius,
  },
  row: {
    display: "flex",
    position: "relative",
    width: "100%",
    flex: "1",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    "&:nth-child(1)": {
      fontSize: "1.1rem",
      fontWeight: "bold",
      backgroundColor: "#e8e8e8",
    },
    "&:nth-child(even)": {
      backgroundColor: "#fbfbfb",
    },
  },
  col: {
    flex: "0 1 20%",
    padding: "20px 8px",
  },
  description: {
    flex: "0 1 45%",
  },
  hr: {
    margin: "25px 0",
    width: "100%",
    height: "2px",
    border: "none",
    backgroundColor: "#dadcde",
  },
  subHeading: {
    display: "block",
    margin: "1.5em 0",
    fontSize: "1.5rem",
  },
  code: {
    fontFamily: "monospace",
    fontWeight: "bold",
  },
}))(Doc);
