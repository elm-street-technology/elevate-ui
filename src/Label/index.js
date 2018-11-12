import React from "react";
import withStyles from "../withStyles";
import classNames from "classnames";

const Label = ({ classes, className, children, theme, ...rest }) => {
  return (
    <label className={classNames(classes.root, className)} {...rest}>
      {children}
    </label>
  );
};

const styles = (theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: "700",
    color: theme.colors.gray500,
    marginBottom: "4px",
  },
});

export default withStyles(styles, { name: "EuiLabel" })(Label);
