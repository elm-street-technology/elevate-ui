// @flow
import React, { Component } from "react";
import withStyles from "../withStyles";
import classNames from "classnames";
import AriaModal from "react-aria-modal";

import Paper from "../Paper";
import Typography from "../Typography";
import Button from "../Button";
import Close from "elevate-ui-icons/Close";

type $Props = {
  /**
   * Override the 'Cancel' text in the modal's cancel button
   */
  cancelText: string,
  /**
   * Adds an icon in the modal's cancel button.
   */
  cancelIcon?: HTMLElement | boolean,
  /**
   * Accepts any classNames to be passed to the component
   */
  className?: string,
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
   * Adds an icon in the modal's Confirm button.
   */
  confirmIcon?: HTMLElement | boolean,
  /**
   * Icon to be passed to the top section of the modal
   */
  titleIcon?: HTMLElement,
  /**
   * Adjust the mask style properties
   */
  maskStyles?: Object,
  /**
   * Should footer with Cancel and Confirm buttons be shown
   */
  showFooter: boolean,
  /**
   * Style object with any applicable overrides
   */
  style?: Object,
  /**
   * Text/title of the modal
   */
  title: string,
  theme: Object,
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
    cancelIcon: false,
    confirmAction: () => null,
    confirmText: "Confirm",
    confirmIcon: false,
    showFooter: true,
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
      titleIcon,
      maskStyles,
      showFooter,
      style,
      theme,
      title,
      toggleModal,
      visible,
    } = this.props;
    const underlayStyle = {
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center",
      zIndex: theme.zIndex["modal"],
    };
    if (!visible) {
      return null;
    }
    return (
      <AriaModal
        titleText={title}
        onExit={() => toggleModal()}
        underlayStyle={maskStyles ? maskStyles : underlayStyle}
        dialogClass={classes.dialog}
        focusDialog={true}
      >
        <Paper
          className={classNames(classes.root, className)}
          withPadding={false}
          style={style}
        >
          <header className={classes.header}>
            <div>
              <Typography type="heading4" className={classes.title}>
                {titleIcon ? titleIcon : null}
                {title}
              </Typography>
            </div>
            <div>
              <Button
                className={classes.close}
                innerClassName={classes.closeInner}
                type="button"
                aria-label="Close"
                isOutlined
                color={"#232c35"}
                onClick={() => toggleModal()}
              >
                <Close />
              </Button>
            </div>
          </header>
          <div className={classes.body}>{children}</div>
          {showFooter ? (
            <footer className={classes.footer}>
              <Button
                type="button"
                isOutlined
                icon={cancelIcon}
                color="#ccc"
                className={classes.cancel}
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
          ) : null}
        </Paper>
      </AriaModal>
    );
  }
}

const styles = (theme) => ({
  root: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "0 auto",
    minWidth: "95%",
    maxWidth: "85%",
    maxHeight: "70vh",
    border: "none",
    boxShadow:
      "0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
    overflow: "hidden",
    [theme.breakpoints(450)]: {
      minWidth: "450px",
    },
    [theme.breakpoints(900)]: {
      maxHeight: "90vh",
    },
  },
  dialog: {
    position: "relative",
    maxHeight: "90vh",
  },
  header: {
    flex: "0 0 auto",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "12px 6px 12px 24px",
    margin: "0 auto",
    borderBottom: `1px solid ${theme.colors["gray100"]}`,
    textAlign: "left",
  },
  title: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",

    "& svg": {
      marginRight: "8px",
    },
  },
  close: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    borderColor: "transparent",
    "&:hover": {
      "& svg": {
        fill: theme.colors.white,
      },
    },
  },
  closeInner: {
    padding: "0",
  },
  body: {
    width: "100%",
    flex: "0 1 auto",
    padding: "18px 24px",
    overflowY: "scroll",
    WebkitOverflowScrolling: "touch",
  },
  footer: {
    flex: "0 0 auto",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    padding: "12px 16px",
    backgroundColor: theme.colors["gray050"],
    borderTop: `1px solid ${theme.colors["gray100"]}`,

    "& > * + *": {
      marginLeft: "12px",
    },
  },
  cancel: {
    borderColor: "transparent",
  },
});

export default withStyles(styles, { name: "EuiModal" })(Modal);
