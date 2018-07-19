// @flow
import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "react-jss";
import Color from "color";

type Props = {
  children: any,
  classes: Object,
  className: string,
  color: string,
  element?: string,
  innerClassName?: string,
  theme: Object,
  isOutlined: boolean,
};

type State = {
  rippleActive: boolean,
};

function getChildColor(theme, props) {
  if (props.isDisabled) {
    return theme.colors["gray300"];
  } else if (props.isOutlined) {
    if (props.color !== "primary" && props.color !== "secondary") {
      return Color(props.color)
        .darken(0.25) // darken the outlined button text a bit to give us better contrast
        .string();
    } else {
      return Color(theme.colors[props.color])
        .darken(0.25) // darken the outlined button text a bit to give us better contrast
        .string();
    }
  } else {
    return theme.colors.white;
  }
}

function getBackgroundColor(theme, props) {
  if (props.isOutlined) {
    return "transparent";
  } else if (props.color !== "primary" && props.color !== "secondary") {
    return props.color;
  } else {
    return theme.colors[props.color];
  }
}

function getHoverColor(theme, props) {
  if (
    props.isOutlined &&
    props.color !== "primary" &&
    props.color !== "secondary"
  ) {
    return Color(props.color)
      .lighten(0.55)
      .string();
  } else if (
    !props.isOutlined &&
    props.color !== "primary" &&
    props.color !== "secondary"
  ) {
    return Color(props.color)
      .darken(0.1)
      .string();
  } else if (props.isOutlined) {
    return Color(theme.colors[props.color])
      .lighten(0.55)
      .string();
  } else {
    return Color(theme.colors[props.color])
      .darken(0.1)
      .string();
  }
}

function getRippleColor(theme, props) {
  if (
    props.isOutlined &&
    props.color !== "primary" &&
    props.color !== "secondary"
  ) {
    return Color(props.color)
      .lighten(0.45)
      .string();
  } else if (
    !props.isOutlined &&
    props.color !== "primary" &&
    props.color !== "secondary"
  ) {
    return props.color;
  } else if (props.isOutlined) {
    return Color(theme.colors[props.color])
      .lighten(0.45)
      .string();
  } else {
    return theme.colors[props.color];
  }
}

function getBorderColor(theme, props) {
  if (props.color !== "primary" && props.color !== "secondary") {
    return props.color;
  } else {
    return theme.colors[props.color];
  }
}

class NewButton extends Component<Props, State> {
  static defaultProps = {
    element: "button",
    color: "primary",
    isOutlined: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      rippleActive: false,
    };
  }

  toggleRipple = () => {
    this.setState(
      (state) => ({
        rippleActive: !state.rippleActive,
      }),
      () => {
        return setTimeout(() => {
          this.setState((state) => ({
            rippleActive: !state.rippleActive,
          }));
        }, 401);
      }
    );
  };

  handleClick = (e) => {
    const button = e.target;

    let parentOffset = button.getBoundingClientRect(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;

    const span = button.parentElement.getElementsByTagName("span");

    span[0].style.top = relY + "px";
    span[0].style.left = relX + "px";

    this.toggleRipple();
  };

  render() {
    const {
      children,
      classes,
      className,
      color,
      element: Element,
      innerClassName,
      isOutlined,
      theme,
      ...rest
    } = this.props;
    const { rippleActive } = this.state;

    return (
      // $FlowFixMe
      <Element className={classNames(classes.root, className)} {...rest}>
        <div
          onClick={this.handleClick}
          className={classNames(classes.children, innerClassName)}
        >
          {children}
        </div>
        <span
          className={classNames(
            classes.ripple,
            rippleActive && classes.rippleActive
          )}
        />
      </Element>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    display: "inline-flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    backgroundColor: (props) => getBackgroundColor(theme, props),
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: (props) =>
      props.isOutlined ? getBorderColor(theme, props) : "transparent",
    borderRadius: theme.globalBorderRadius,
    transition: theme.transitions.default,
    overflow: "hidden",

    "&:hover": {
      backgroundColor: (props) => getHoverColor(theme, props),
    },
  },
  children: {
    display: "flex",
    alignItems: "center",
    color: (props) => getChildColor(theme, props),
    fontFamily: theme.typography.sans,
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "600",
    padding: "10px 16px",
    zIndex: "1",
  },
  ripple: {
    display: "block",
    position: "absolute",
    width: "0",
    height: "0",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    transition: "width 0.4s ease-in-out, height 0.4s ease-in-out",
    backgroundClip: "padding-box",
    zIndex: "0",
    backgroundColor: (props) => getRippleColor(theme, props),
  },
  rippleActive: {
    animation: "ripple .4s ease-in",
  },
  "@keyframes ripple": {
    "0%": {
      opacity: "0",
    },
    "25%": {
      opacity: "1",
    },
    "100%": {
      width: "200%",
      paddingBottom: "200%",
      opacity: "0",
    },
  },
}))(NewButton);
