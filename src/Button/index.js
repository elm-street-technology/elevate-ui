// @flow
import React from "react";
import classNames from "classnames";
import withStyles from "react-jss";

type Props = {
  element?: string,
  children: any,
  classes: Object,
  className: string,
  color: "primary" | "secondary",
  innerClassName?: string,
  isRounded: true | false,
  isOutlined: true | false,
  theme: Object,
};

const Button = ({
  children,
  classes,
  className,
  color,
  element: Element,
  innerClassName,
  isOutlined,
  isRounded,
  theme,
  ...rest
}: Props) => (
  // $FlowFixMe -- it doesn't understand the element: Element
  <Element className={classNames(classes.root, className)} {...rest}>
    <div className={classNames(classes.children, innerClassName)}>
      {children}
    </div>
  </Element>
);

Button.defaultProps = {
  element: "button",
  color: "primary",
  isRounded: true,
  isOutlined: false,
};

function getChildColor(theme, props) {
  if (props.isDisabled) {
    return theme.colors["gray300"];
  } else if (props.isOutlined) {
    return theme.colors[props.color];
  } else {
    return theme.colors.white;
  }
}

export default withStyles((theme) => ({
  root: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    backgroundColor: (props) =>
      props.isOutlined ? "transparent" : theme.colors[props.color],
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: (props) =>
      props.isOutlined ? theme.colors[props.color] : "transparent",
    borderRadius: (props) =>
      props.isRounded ? theme.globalBorderRadius : "0px",

    "&:disabled": {
      cursor: "not-allowed",
      background: (props) =>
        props.isOutlined ? "transparent" : theme.colors["gray100"],
      color: theme.colors["gray300"],
      borderColor: (props) =>
        props.isOutlined ? theme.colors["gray200"] : "none",
    },
  },
  children: {
    display: "flex",
    alignItems: "center",
    color: (props) => getChildColor(theme, props),
    fontFamily: theme.typography.sans,
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "600",
    padding: "10px 16px",
  },
}))(Button);
