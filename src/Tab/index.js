// @flow
import React from "react";
import withStyles from "../withStyles";
import classNames from "classnames";

type $Props = {
  classes: Object,
  /**
   * Accepts any element to be used as the component base.
   */
  element: any,
  /**
   * Accepts any classNames to be passed down to the component.
   */
  className?: string,
  children: any,
  /**
   * Should the tab show an active state.
   */
  isActive: boolean,
};

/**
 * A component meant to be wrapped in `<TabNavigation />` that allows you to create a "tab-style" navigation.
 */
const Tab = ({
  classes,
  element,
  children,
  className,
  isActive,
  ...rest
}: $Props) => {
  const Element = element || "button";
  return (
    <Element
      {...rest}
      className={classNames({
        [classes.root]: true,
        [classes.active]: isActive,
        className,
      })}
    >
      {children}
    </Element>
  );
};

const styles = (theme) => ({
  root: {
    padding: "24px",
    fontSize: "15px",
    fontWeight: "600",
    letterSpacing: ".5px",
    lineHeight: 1,
    textTransform: "uppercase",
    borderLeft: `4px solid ${theme.colors.gray["100"]}`,
    transition: theme.transitions.default,
    color: theme.colors.gray["600"],
    textDecoration: "none",
    "&:hover": {
      color: theme.colors.black,
    },
    [theme.breakpoints(670)]: {
      fontSize: "14px",
      padding: "12px 24px",
      borderBottom: `2px solid ${theme.colors.gray["100"]}`,
      borderLeft: "none",
    },
  },
  active: {
    color: theme.colors.black,
    borderLeft: `4px solid ${theme.colors.tertiary["300"]}`,
    [theme.breakpoints(670)]: {
      borderBottom: `2px solid ${theme.colors.tertiary["300"]}`,
      borderLeft: "none",
    },
  },
});

export default withStyles(styles)(Tab);
