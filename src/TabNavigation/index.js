// @flow
import React from "react";
import withStyles from "../withStyles";
import classNames from "classnames";

type $Props = {
  classes: Object,
  /**
   * Accepts any classNames to be passed down to the component.
   */
  className: string,
  children: any,
};

/**
 * A component that contains styled "tabs" to be used for navigation. Expects children to be one or more `<Tab />` components. See the source code for more information on how the Tab component is used.
 */
const TabNavigation = ({ classes, className, children }: $Props) => (
  <div className={classNames(classes.root, className)}>{children}</div>
);

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    padding: "12px 8px 36px",
    backgroundColor: theme.colors.white,
    [theme.breakpoints(670)]: {
      padding: "8px 0px",
      flexDirection: "row",
      alignItems: "center",
    },
  },
});

export default withStyles(styles)(TabNavigation);
