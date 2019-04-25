// @flow
import React from "react";
import withStyles from "../withStyles";
import classNames from "classnames";

type $Props = {
  classes: Object,
  Element: any,
  className?: string,
  children: any,
  isActive: boolean,
};

const Tab = ({ classes, Element, children, isActive, ...rest }: $Props) => (
  <Element
    {...rest}
    className={classNames({ [classes.root]: true, [classes.active]: isActive })}
  >
    {children}
  </Element>
);

const styles = (theme) => ({
  root: {
    padding: "24px",
    fontSize: "15px",
    fontWeight: "600",
    letterSpacing: ".5px",
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
