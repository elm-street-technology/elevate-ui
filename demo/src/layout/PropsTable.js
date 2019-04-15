import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

import Typography from "elevate-ui/Typography";

const PropsTable = (props) => {
  const { classes, componentProps } = props;
  return (
    <div className={classes.exampleContainer}>
      <Typography type="heading5" id="props" className={classes.subHeading}>
        Available Props
      </Typography>

      <div className={classes.table}>
        <div className={classes.row}>
          <div className={classes.col}>
            <span className={classes.label}>Prop Name</span>
          </div>
          <div className={classes.col}>
            <span className={classes.label}>Flow Type</span>
          </div>
          <div className={classes.col}>
            <span className={classes.label}>Required</span>
          </div>
          <div className={classes.col}>
            <span className={classes.label}>Default Value</span>
          </div>
          <div className={classNames(classes.col, classes.description)}>
            <span className={classes.label}>Description</span>
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
                <Typography type="body2" className={classes.col}>
                  {componentProp[1].description}
                </Typography>
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

    "&:first-child": {
      padding: "20px 24px",
      paddingRight: "12px",
    },
  },
  label: {
    color: theme.colors.gray["600"],
    fontSize: "13px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: ".8px",
  },
  exampleContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "48px",
  },
  subHeading: {
    display: "block",
    fontSize: "16px",
    fontWeight: "600",
    letterSpacing: ".8px",
    color: theme.colors.gray["600"],
    textTransform: "uppercase",
    marginBottom: "8px",
  },
}))(PropsTable);
