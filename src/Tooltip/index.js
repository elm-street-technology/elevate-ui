// @flow
import React, { Component } from "react";
import withStyles from "../withStyles";
import classNames from "classnames";

type $Props = {
  clickEnabled?: boolean,
  classes: Object,
  className?: Object,
  children: any,
  position: string,
  text: string,
};

type $State = {
  open: boolean,
};

/**
 * A component that allows a small tooltip to appear when hovered or clicked.
 */
class Tooltip extends Component<$Props, $State> {
  static defaultProps = {
    position: "top",
  };
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  toggleTooltip = () => this.setState((state) => ({ open: !state.open }));

  render() {
    const { classes, className, clickEnabled, children } = this.props;
    const { open } = this.state;
    return (
      <div
        className={classNames(classes.root, open && classes.active, className)}
        onMouseEnter={() => (!clickEnabled ? this.toggleTooltip() : null)}
        onMouseLeave={() => (!clickEnabled ? this.toggleTooltip() : null)}
        onFocus={() => (!clickEnabled ? this.toggleTooltip() : null)}
        onClick={() => (clickEnabled ? this.toggleTooltip() : null)}
        onBlur={() => (open ? this.toggleTooltip() : null)}
        role="tooltip"
        aria-hidden={!open}
      >
        {children}
      </div>
    );
  }
}

const calculateRotation = (props) => {
  if (props.position === "top") {
    return "rotate(180deg)";
  } else if (props.position === "right") {
    return "rotate(-90deg)";
  } else if (props.position === "left") {
    return "rotate(90deg)";
  }
};

const styles = (theme) => ({
  root: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "visible",
    "&:before": {
      content: "''",
      display: "none",
      position: "absolute",
      top: (props) => (props.position === "bottom" ? "calc(100% + 4px)" : null),
      left: (props) => (props.position === "right" ? "100%" : null),
      right: (props) => (props.position === "left" ? "100%" : null),
      bottom: (props) => (props.position === "top" ? "calc(100% + 4px)" : null),
      width: 0,
      height: 0,
      borderStyle: "solid",
      borderWidth: "0 10px 10px 10px",
      borderColor: "transparent transparent rgba(0,0,0,0.95) transparent",
      transform: (props) => calculateRotation(props),
    },
    "&:after": {
      content: (props) => `"${props.text}"`,
      display: "none",
      position: "absolute",
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "auto",
      maxWidth: "350px",
      padding: "8px 10px",
      backgroundColor: "rgba(0,0,0,0.95)",
      borderRadius: "3px",
      fontSize: "14px",
      color: theme.colors["white"],
      whiteSpace: "nowrap",
      zIndex: theme.zIndex["tooltip"],
      top: (props) =>
        props.position === "bottom" ? "calc(100% + 10px)" : null,
      left: (props) =>
        props.position === "right" ? "calc(100% + 10px)" : null,
      right: (props) =>
        props.position === "left" ? "calc(100% + 10px)" : null,
      bottom: (props) =>
        props.position === "top" ? "calc(100% + 10px)" : null,
    },
  },
  active: {
    "&:before": {
      display: "block",
    },
    "&:after": {
      display: "flex",
    },
  },
});

export default withStyles(styles, { name: "EUITooltip" })(Tooltip);
