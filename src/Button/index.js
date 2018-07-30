// @flow
import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "react-jss";
import Color from "color";
import Icon from "../Icon/Icon";

type Props = {
  children: any,
  classes: Object,
  className: string,
  color: string,
  element?: string,
  icon: string,
  innerClassName?: string,
  isOutlined: boolean,
  onClick: Function,
  theme: Object,
  disabled?: boolean,
};

type State = {
  rippleActive: boolean,
};

function getChildColor(theme, props) {
  if (props.disabled) {
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
  } else if (props.disabled) {
    return theme.colors["gray100"];
  } else if (props.color !== "primary" && props.color !== "secondary") {
    return props.color;
  } else {
    return theme.colors[props.color];
  }
}

function getHoverColor(theme, props) {
  if (props.disabled && props.isOutlined) {
    // if disabled and outlined
    return "transparent";
  } else if (props.disabled) {
    // if disabled
    return theme.colors["gray100"];
  } else if (
    // if outlined and not primary or secondary color
    props.isOutlined &&
    props.color !== "primary" &&
    props.color !== "secondary"
  ) {
    // if the background is too dark fade it instead of lighten
    if (Color(props.color).isDark()) {
      return Color(props.color)
        .fade(0.75)
        .string();
    }
    return Color(props.color)
      .lighten(0.55)
      .string();
  } else if (
    // if not outlined and not primary or secondary color
    !props.isOutlined &&
    props.color !== "primary" &&
    props.color !== "secondary"
  ) {
    return Color(props.color)
      .darken(0.1)
      .string();
  } else if (props.isOutlined) {
    // if is outlined and using primary or secondary
    // if the background is too dark fade it instead of lighten
    if (Color(theme.colors[props.color]).isDark()) {
      return Color(theme.colors[props.color])
        .fade(0.75)
        .string();
    }
    return Color(theme.colors[props.color])
      .lighten(0.52)
      .string();
  } else {
    // anything else
    // if the background is too dark fade it instead of lighten
    if (Color(theme.colors[props.color]).isDark()) {
      return Color(theme.colors[props.color])
        .fade(0.75)
        .string();
    }
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
  if (props.disabled) {
    return theme.colors["gray100"];
  } else if (props.color !== "primary" && props.color !== "secondary") {
    return props.color;
  } else {
    return theme.colors[props.color];
  }
}

class Button extends Component<Props, State> {
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

  ripple: ?HTMLElement;

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
    const { onClick } = this.props;

    let parentOffset = button.getBoundingClientRect(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;

    if (this.ripple) {
      this.ripple.style.top = relY + "px";
      this.ripple.style.left = relX + "px";
    }

    this.toggleRipple();

    // Call this.props.onClick if it exists
    if (onClick) onClick(e);
  };

  render() {
    const {
      children,
      classes,
      className,
      color,
      element: Element,
      icon,
      innerClassName,
      isOutlined,
      theme,
      ...rest
    } = this.props;
    const { rippleActive } = this.state;

    return (
      // $FlowFixMe
      <Element
        className={classNames(classes.root, className)}
        {...rest}
        onClick={this.handleClick}
      >
        <div className={classNames(classes.children, innerClassName)}>
          {icon && <Icon name={icon} className={classes.icon} />}
          {children}
        </div>
        <span
          ref={(ripple) => (this.ripple = ripple)}
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
    padding: (props) => (props.icon ? "10px 20px 10px 16px" : "10px 16px"),
    zIndex: "1",
  },
  icon: {
    marginRight: "4px",
    pointerEvents: "none",
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
}))(Button);
