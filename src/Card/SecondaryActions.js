// @flow

import React, { Component } from "react";
import withStyles from "../withStyles";
import enhanceWithClickOutside from "react-click-outside";

type $Props = {
  classes: Object,
  handleClickOutside: Function,
  secondaryActions: Array<{|
    label: string,
    onClick: Function,
    color?: string,
    isOutlined?: boolean,
    icon?: any,
  |}>,
  visible: boolean,
};

class SecondaryActions extends Component<$Props> {
  handleClickOutside = () =>
    this.props.visible && this.props.handleClickOutside();

  render() {
    const { classes, secondaryActions, visible } = this.props;
    if (!secondaryActions || !visible) {
      return null;
    }
    if (visible) {
      return (
        <ul className={classes.root}>
          {secondaryActions.map((action) => {
            return (
              <li className={classes.action} onClick={action.onClick}>
                {action.label}
              </li>
            );
          })}
        </ul>
      );
    }
  }
}

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    top: "1px",
    right: "1px",
    width: "auto",
    maxWidth: "275px",
    height: "auto",
    listStyle: "none",
    margin: "0px",
    padding: "0px",
    backgroundColor: theme.colors["white"],
    boxShadow: theme.shadows[2],
  },
  action: {
    flex: "1 1 auto",
    width: "100%",
    padding: "8px",
    backgroundColor: theme.colors["gray050"],
    textAlign: "center",
    cursor: "default",
    "&:hover": {
      backgroundColor: theme.colors["gray100"],
    },
  },
});

export default withStyles(styles, { name: "SecondaryActions" })(
  enhanceWithClickOutside(SecondaryActions)
);
