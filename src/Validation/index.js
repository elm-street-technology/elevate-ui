import React from "react";
import withStyles from "../withStyles";
import classNames from "classnames";

type Props = {
  classes: Object,
  className: string,
  color: "success" | "error",
  error: any,
  theme: Object,
};

const Validation = ({
  classes,
  className,
  color,
  error,
  theme,
  ...rest
}: Props) => (
  <div className={classNames(classes.root, className)} {...rest}>
    {error}
  </div>
);

Validation.defaultProps = {
  color: "error",
};

const styles = (theme) => ({
  root: {
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "18px",
    color: (props) => theme.alertColors[props.color].color,
    backgroundColor: (props) => theme.alertColors[props.color].backgroundColor,
    borderRadius: "2px",
    borderColor: (props) => theme.alertColors[props.color].borderColor,
    borderWidth: "1px",
    borderStyle: "solid",
    marginTop: "4px",
    padding: "2px 8px",
  },
});

export default withStyles(styles, { name: "EuiValidation" })(Validation);
