// @flow
import React, { Component } from "react";
import classNames from "classnames";

import Typography from "../Typography";
import withStyles from "../withStyles";

type $Props = Object;

class Card extends Component<$Props> {
  render() {
    const {
      classes,
      className,
      title,
      children,
      icon,
      // secondaryActions,
      // actions,
    } = this.props;

    return (
      <div className={classNames(classes.root, className)}>
        <div className={classes.titleContainer}>
          <span>{icon}</span> <Typography type="heading6">{title}</Typography>
        </div>
        {children}
      </div>
    );
  }
}

const styles = () => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "250px",
    border: "1px solid #ccc",
    borderRadius: "3px",
    padding: "8px",
    marginRight: "4px",
  },
  titleContainer: {
    display: "flex",
  },
});

export default withStyles(styles)(Card);
