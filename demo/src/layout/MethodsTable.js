import React from "react";
import withStyles from "elevate-ui/withStyles";

import Typography from "elevate-ui/Typography";

const MethodsTable = (props) => {
  const { classes, componentMethods } = props;
  return (
    <div>
      <Typography type="heading5" id="props" className={classes.subHeading}>
        Available Methods
      </Typography>
      <div className={classes.table}>
        <div className={classes.row}>
          <div className={classes.col}>
            <span className={classes.label}>Method Name</span>
          </div>
          <div className={classes.col}>
            <span className={classes.label}>Doc Block</span>
          </div>
          <div className={classes.col}>
            <span className={classes.label}>Modifiers</span>
          </div>
          <div className={classes.col}>
            <span className={classes.label}>Params</span>
          </div>
          <div className={classes.col}>
            <span className={classes.label}>Returns</span>
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
                          <code title={param.name} className={classes.code}>
                            {param.name}
                          </code>
                        </pre>
                      ))
                    : ""}
                </div>
                <div className={classes.col}>
                  {componentMethod[1].returns ? (
                    <pre>
                      <code className={classes.code}>
                        {JSON.stringify(componentMethod[1].returns)}
                      </code>
                    </pre>
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
    </div>
  );
};

export default withStyles((theme) => ({
  row: {
    display: "flex",
    position: "relative",
    flex: "1",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    width: "100%",

    "&:nth-child(odd) $col": {
      backgroundColor: "#fff",
    },
    "&:nth-child(even) $col": {
      backgroundColor: "#fbfbfb",
    },
    "&:nth-child(1)": {
      fontSize: "1.1rem",
      fontWeight: "600",
      backgroundColor: "#e8e8e8",
    },
  },
  col: {
    flex: "1",
    minWidth: "128px",
    padding: "20px 24px 20px 0px",
    fontSize: "16px",
    color: theme.colors.black,
    lineHeight: "1.5",

    "&:first-child": {
      padding: "20px 24px",
    },
  },
  description: {
    fontSize: "16px",
    color: theme.colors.black,
    lineHeight: "1.5",
  },
  label: {
    color: theme.colors.gray500,
    fontSize: "13px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: ".8px",
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
}))(MethodsTable);
