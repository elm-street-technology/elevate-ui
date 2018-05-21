import React from "react";
import withStyles from "react-jss";
import classNames from "classnames";

type Props = {
  children: any,
  classes: Object,
  className: string,
  element: string,
  theme: Object,
  withPadding: boolean,
};

const Paper = ({
  children,
  classes,
  className,
  element: Element,
  theme,
  withPadding = true,
  ...rest
}: Props) => (
  <Element
    className={classNames(
      classes.root,
      withPadding && classes.withPadding,
      className
    )}
    {...rest}
  >
    {children}
  </Element>
);

Paper.defaultProps = {
  element: "div",
};

export default withStyles((theme) => ({
  root: {
    width: "100%",
    height: "auto",
    background: theme.colors.white,
    border: `1px solid ${theme.colors.gray200}`,
    borderRadius: theme.globalBorderRadius,
  },
  withPadding: {
    ...theme.globalPadding,
  },
}))(Paper);
