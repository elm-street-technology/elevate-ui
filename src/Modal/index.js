// @flow
import React, { Component } from "react";
import withStyles from "../withStyles";
import classNames from "classnames";
import AriaModal from "react-aria-modal";

import Paper from "../Paper";
import Typography from "../Typography";
import Button from "../Button";
import Cancel from "elevate-ui-icons/Cancel";
import CheckCircle from "elevate-ui-icons/CheckCircle";

// import ModalScaffold from "./ModalScaffold";

type $Props = {
  /**
   * Override the 'Cancel' text in the modal's cancel button
   */
  cancelText: string,
  /**
   * Override the 'Cancel' icon in the modal's cancel button. Use `false` to render no icon
   */
  cancelIcon?: HTMLElement | boolean,
  /**
   * Accepts any classNames to be passed to the component
   */
  className: string,
  classes: Object,
  children: any,
  /**
   * Function to be fired when the confirm button is clicked
   */
  confirmAction: Function,
  /**
   * Override the 'Confirm' text in the modal's confirmation button
   */
  confirmText: string,
  /**
   * Override the 'Confirm' icon in the modal's confirmation button. Use `false` to render no icon
   */
  confirmIcon?: HTMLElement | boolean,
  /**
   * Icon to be passed to the top section of the modal
   */
  icon?: HTMLElement,
  /**
   * Adjust the mask style properties
   */
  maskStyles?: Object,
  /**
   * Style object with any applicable overrides
   */
  style: Object,
  /**
   * Text/title of the modal
   */
  title: string,
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
    cancelText: "Cancel",
    cancelIcon: <Cancel />,
    confirmText: "Confirm",
    confirmIcon: <CheckCircle />,
    visible: false,
  };
  render() {
    const {
      cancelText,
      cancelIcon,
      classes,
      className,
      children,
      confirmAction,
      confirmText,
      confirmIcon,
      maskStyles,
      title,
      toggleModal,
      visible,
    } = this.props;
    const underlayStyle = {
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center",
    };
    if (!visible) {
      return null;
    }
    return (
      <AriaModal
        titleText={title}
        onExit={() => toggleModal()}
        underlayStyle={maskStyles ? maskStyles : underlayStyle}
      >
        <Paper
          className={classNames(classes.root, className)}
          withPadding={false}
        >
          <header className={classes.header}>
            <Typography type="heading4">{title}</Typography>
          </header>
          <div className={classes.body}>{children}</div>
          <footer className={classes.footer}>
            <Button
              type="button"
              isOutlined
              icon={cancelIcon}
              color="#f15953"
              onClick={() => toggleModal()}
            >
              {cancelText}
            </Button>
            <Button
              type="button"
              color="secondary"
              onClick={() => confirmAction()}
              icon={confirmIcon}
            >
              {confirmText}
            </Button>
          </footer>
        </Paper>
      </AriaModal>
    );
  }
}

const styles = (theme) => ({
  root: {
    margin: "0 auto",
    maxWidth: "90%",
  },
  header: {
    width: "calc(100% - 48px)",
    padding: "12px 0",
    margin: "0 auto 18px",
    borderBottom: `1px solid ${theme.colors["gray300"]}`,
    textAlign: "left",
  },
  body: {
    padding: "0 24px",
  },
  footer: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "12px 24px",
    backgroundColor: theme.colors["gray100"],
    marginTop: "22px",
    boxShadow:
      "0px -1px 3px 0px rgba(0, 0, 0, 0.2),0px -1px 1px 0px rgba(0, 0, 0, 0.14),0px -2px 1px -1px rgba(0, 0, 0, 0.12)",
    "& > * + *": {
      marginLeft: "12px",
    },
  },
});

export default withStyles(styles, { name: "EuiModal" })(Modal);
