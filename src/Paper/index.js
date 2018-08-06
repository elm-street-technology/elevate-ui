import React from "react";
import withStyles from "react-jss";
import classNames from "classnames";

type Props = {
  /**
   * Any children to be passed through to the component.
   */
  children: any,
  classes: Object,
  /**
   * Accepts any classNames to be passed down to the component.
   */
  className: string,
  /**
   * Type of HTML Element that should be used for the component.
   */
  element: string,
  theme: Object,
  /**
   * If the component should include padding.
   */
  withPadding: boolean,
};

/**
 * A styled component for framing content and other components.
 */
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
