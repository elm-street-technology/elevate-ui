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
        onBlur={() => this.toggleTooltip()}
        role="tooltip"
        aria-hidden={!open}
      >
        {children}
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    display: "inline-flex",
    position: "relative",
    overflow: "visible",
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
      zIndex: "999",
      top: (props) => (props.position === "bottom" ? "105%" : null),
      left: (props) => (props.position === "right" ? "105%" : null),
      right: (props) => (props.position === "left" ? "105%" : null),
      bottom: (props) => (props.position === "top" ? "105%" : null),
    },
  },
  active: {
    "&:after": {
      display: "flex",
    },
  },
});

export default withStyles(styles, { name: "EUITooltip" })(Tooltip);
