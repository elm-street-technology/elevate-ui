// @flow
import React, { Component } from "react";
import classNames from "classnames";

import Paper from "../Paper";

type $Props = {
  className: string,
  classes: Object,
  children: any,
  style: Object,
  visible?: boolean,
  toggleModal: Function,
};

class ModalScaffold extends Component<$Props> {
  handleClickOutside = () => {
    if (this.props.visible) {
      this.props.toggleModal();
    }
    return;
  };
  render() {
    const { classes, className, children, style, visible } = this.props;
    return (
      <Paper
        className={classNames(
          classes.root,
          visible && classes.active,
          className
        )}
        style={style}
      >
        {children}
      </Paper>
    );
  }
}

export default ModalScaffold;
