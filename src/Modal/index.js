// @flow
import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "../withStyles";

import ModalScaffold from "./ModalScaffold";

type $Props = {
  /**
   * Accepts any classNames to be passed to the component.
   */
  className: string,
  classes: Object,
  children: any,
  /**
   * Icon to be passed to the top section of the modal
   */
  icon?: HTMLElement,
  /**
   * Adds a mask behind the modal to add extra focus to the active modal
   */
  mask?: boolean,
  /**
   * Adjust the mask opacity value
   */
  maskOpacity?: number,
  /**
   * Style object with any applicable overrides
   */
  style: Object,
  /**
   * Text/title of the modal
   */
  title?: string,
  /**
   * Method/Function used to toggle the modal on/off
   */
  toggleModal: Function,
  /**
   * Control visibility of the modal.
   */
  visible?: boolean,
};

/**
 * A modal that opens above other page content to display important information or user actions.
 */
class Modal extends Component<$Props> {
  static defaultProps = {
    mask: true,
    maskOpacity: 0.5,
    visible: false,
  };
  render() {
    const {
      classes,
      className,
      children,
      style,
      toggleModal,
      visible,
    } = this.props;
    return (
      <div className={classNames(classes.mask, !visible && classes.inActive)}>
        <ModalScaffold
          classes={classes}
          className={className}
          children={children}
          style={style}
          toggleModal={toggleModal}
          visible={visible}
        />
      </div>
    );
  }
}

const styles = () => ({
  root: {
    display: "none",
    flex: "0 0 auto",
    width: "auto",
    zIndex: 9999,
  },
  active: {
    display: "block",
  },
  mask: {
    display: "flex",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: (props) => `rgba(0,0,0,${props.maskOpacity})`,
    zIndex: 999,
  },
  inActive: {
    display: "none",
  },
});

export default withStyles(styles, { name: "EuiModal" })(Modal);
