// @flow
import React from "react";
import classNames from "classnames";
import withStyles from "../withStyles";

type Props = {
  /**
   * Children to be passed to the component.
   */
  children: any,
  /**
   * Element type to be used
   */
  element?: string,
  classes: Object,
  /**
   * Accepts any classNames to be passed down to the component.
   */
  className: string,
  /**
   * Color to be used on the alert, can be "error", "info", "success", or "warning"
   */
  color: "error" | "info" | "success" | "warning",
  /**
   * Icon component to be used in the alert component
   */
  icon: any,
  theme: Object,
};

/**
 * A component used for showing important information such as success messages, warnings, or errors.
 */
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
    {icon && <div className={classes.icon}>{icon}</div>}
    <div className={classes.children}>{children}</div>
  </Element>
);

Alert.defaultProps = {
  element: "div",
  color: "error",
};

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: (props) =>
      (theme.alertColors[props.color] &&
        theme.alertColors[props.color].backgroundColor) ||
      "#fff",
    borderRadius: "6px",
    borderColor: (props) =>
      (theme.alertColors[props.color] &&
        theme.alertColors[props.color].borderColor) ||
      "#eee",
    borderWidth: "2px",
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
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
    color: (props) =>
      (theme.alertColors[props.color] &&
        theme.alertColors[props.color].color) ||
      "#000",
    fontSize: "14px",
    letterSpacing: ".3px",
    lineHeight: "20px",
    padding: "16px 24px",

    // Override default link styling
    "& a": {
      color: (props) =>
        (theme.alertColors[props.color] &&
          theme.alertColors[props.color].color) ||
        "#000",
      wordBreak: "break-word", // long URLs or emails should break+wrap to the next line
    },

    "& p": {
      color: (props) =>
        (theme.alertColors[props.color] &&
          theme.alertColors[props.color].color) ||
        "#4b565f",
    },
  },
});

export default withStyles(styles, { name: "EuiAlert" })(Alert);
