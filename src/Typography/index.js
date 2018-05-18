import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import classNames from "classnames";

type Props = {
  children: any,
  classes: Object,
  className: string,
  component: string,
  theme: Object,
  type: "title" | "body",
};

const typeElementMap = {
  title: "h1",
  body: "p",
};

const Typography = ({
  children,
  classes,
  className,
  component: componentProp,
  type,
  ...rest
}: Props) => {
  const Element = componentProp || typeElementMap[type] || "span";
  return (
    <Element
      className={classNames(classes.root, classes[type], className)}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default withStyles((theme) => ({
  root: {
    width: "100%",
  },
  title: {
    fontSize: "36px",
    lineHeight: "48px",
    fontWeight: "600",
    color: theme.colors.gray800,
  },
  body: {
    maxWidth: "600px",
    fontSize: "14px",
    lineHeight: "18px",
  },
}))(Typography);
