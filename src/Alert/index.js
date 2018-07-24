// @flow
import React from "react";
import classNames from "classnames";
import withStyles from "react-jss";

import Icon from "../Icon/Icon";

type Props = {
  children: any,
  element?: string,
  classes: Object,
  className: string,
  color: "error" | "info" | "success" | "warning",
  icon: string,
  theme: Object,
};

const Alert = ({
  children,
  classes,
  className,
  color,
  element: Element,
  icon,
  theme,
  ...rest
}: Props) => (
  // $FlowIgnore -- it doesn't understand the element: Element
  <Element className={classNames(classes.root, className)} {...rest}>
    {icon && (
      <div className={classes.icon}>
        <Icon name={icon} />
      </div>
    )}
    <div className={classes.children}>{children}</div>
  </Element>
);

Alert.defaultProps = {
  element: "div",
  color: "error",
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: (props) =>
      (theme.alertColors[props.color] &&
        theme.alertColors[props.color].backgroundColor) ||
      "#fff",
    borderRadius: "2px",
    borderColor: (props) =>
      (theme.alertColors[props.color] &&
        theme.alertColors[props.color].borderColor) ||
      "#eee",
    borderWidth: "1px",
    borderStyle: "solid",
  },
  icon: {
    flexShrink: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: (props) =>
      (theme.alertColors[props.color] &&
        theme.alertColors[props.color].color) ||
      "#000",
    padding: "10px 0 10px 16px",
  },
  children: {
    width: "100%",
    color: (props) =>
      (theme.alertColors[props.color] &&
        theme.alertColors[props.color].color) ||
      "#000",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "600",
    padding: "10px 16px",

    // Override default link styling
    "& a": {
      color: (props) =>
        (theme.alertColors[props.color] &&
          theme.alertColors[props.color].color) ||
        "#000",
      whiteSpace: "nowrap",
    },
  },
}))(Alert);
