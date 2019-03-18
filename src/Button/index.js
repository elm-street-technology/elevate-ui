// @flow
import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "../withStyles";
import Color from "color";
import { checkString } from "../util";

type $Props = {
  /**
   * Children to be passed to the component.
   */
  children: any,
  classes: Object,
  /**
   * Accepts any classNames to be passed to the component.
   */
  className: string,
  /**
   * Color to be applied to the Button component. Can be "primary", "secondary", or any custom value.
   */
  color: string,
  /**
   * Element type to be used.
   */
  element?: string,
  /**
   * Icon component to use in the component.
   */
  icon?: any,
  /**
   * Icon alignment inside of the button component. Can be "left" or "right"
   */
  iconAlign?: "left" | "right",
  /**
   * Inner className to be applied to the children of the component.
   */
  innerClassName?: string,
  /**
   * Allows the component to be styled as an outlined button.
   */
  isOutlined: boolean,
  /**
   * Function to be passed to the component on click.
   */
  onClick?: Function,
  theme: Object,
  /**
   * Disabled the component so it cannot be clicked.
   */
  disabled?: boolean,
};

type $State = {
  rippleActive: boolean,
};

const getChildColor = (theme: Object, props: Object): mixed => {
  let color;
  try {
    // if the button is disabled
    if (props.disabled) {
      return theme.colors["gray300"];
    }
    // if the button is using one of the string keys for color
    if (checkString(props.color)) {
      color = theme.colors[props.color]["500"];
      if (props.isOutlined) {
        return color;
      } else {
        return Color(color).isDark() ? theme.colors.white : theme.colors.black;
      }
    } else {
      if (Color(props.color)) {
        if (props.isOutlined) {
          return Color(props.color).string();
        } else {
          return Color(props.color).isDark()
            ? theme.colors.white
            : theme.colors.black;
        }
      } else {
        throw new Error("Not a valid color string for prop type 'color'");
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn(err);
    return theme.colors.white;
  }
};

const getBackgroundColor = (theme: Object, props: Object): mixed => {
  try {
    if (props.disabled && props.isOutlined) {
      return "transparent";
    }
    if (props.disabled) {
      return theme.colors["gray100"];
    }
    let color;
    if (checkString(props.color)) {
      color = theme.colors[props.color]["500"];
      if (props.isOutlined) {
        return "transparent";
      } else {
        return color;
      }
    } else {
      if (Color(props.color)) {
        if (props.isOutlined) {
          return "transparent";
        }
        return props.color;
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn(err);
    return theme.colors.black;
  }
};

const getHoverColor = (theme: Object, props: $Props): mixed => {
  try {
    if (props.disabled) {
      return theme.colors["gray100"];
    }
    if (checkString(props.color)) {
      if (props.isOutlined) {
        return theme.colors[props.color]["50"];
      }
      if (Color(theme.colors[props.color]["500"]).isDark()) {
        return theme.colors[props.color]["300"];
      } else {
        return theme.colors[props.color]["700"];
      }
    } else {
      if (Color(props.color)) {
        if (props.isOutlined) {
          return Color(props.color)
            .lighten(0.5)
            .string();
        }
        if (Color(props.color).isDark()) {
          return Color(props.color)
            .lighten(0.2)
            .string();
        } else {
          return Color(props.color)
            .darken(0.2)
            .string();
        }
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn(err);
    return theme.colors["gray700"];
  }
};

const getRippleColor = (theme: Object, props: $Props): mixed => {
  try {
    if (props.disabled) {
      return theme.colors["gray100"];
    }
    if (checkString(props.color)) {
      if (props.isOutlined) {
        return theme.colors[props.color]["200"];
      }
      return theme.colors[props.color]["500"];
    } else {
      if (Color(props.color)) {
        return props.color;
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn(err);
    return theme.colors.black;
  }
};

const getBorderColor = (theme: Object, props: $Props): mixed => {
  try {
    if (props.disabled) {
      return theme.colors["gray100"];
    }
    if (checkString(props.color)) {
      return theme.colors[props.color]["500"];
    } else {
      if (Color(props.color)) {
        return props.color;
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn(err);
    return theme.colors.black;
  }
};

/**
 * A component used to render a styled button.
 */
class Button extends Component<$Props, $State> {
  static defaultProps = {
    color: "primary",
    element: "button",
    iconAlign: "left",
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

  handleClick = (e: Object) => {
    const button = e.target;
    const { onClick, disabled } = this.props;

    let parentOffset = button.getBoundingClientRect();
    let relX = Math.round(e.clientX - parentOffset.left);
    let relY = Math.round(e.clientY - parentOffset.top);

    if (this.ripple) {
      this.ripple.style.top = relY + "px";
      this.ripple.style.left = relX + "px";
    }

    this.toggleRipple();

    // Call this.props.onClick if it exists, or don't do anything if disabled
    if (onClick && !disabled) {
      onClick(e);
    } else if (disabled) {
      e.preventDefault();
    }
  };

  render() {
    const {
      children,
      classes,
      className,
      color,
      element: Element,
      icon,
      iconAlign,
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
        <div className={classes.innerContainer}>
          <div className={classNames(classes.children, innerClassName)}>
            {icon && iconAlign === "left" ? (
              <div className={classNames(classes.icon, classes.iconLeft)}>
                {icon}
              </div>
            ) : null}
            {children}
            {icon && iconAlign === "right" ? (
              <div className={classNames(classes.icon, classes.iconRight)}>
                {icon}
              </div>
            ) : null}
          </div>
          <span
            ref={(ripple) => (this.ripple = ripple)}
            className={classNames(
              classes.ripple,
              rippleActive && classes.rippleActive
            )}
          />
        </div>
      </Element>
    );
  }
}

const styles = (theme: Object): Object => ({
  root: {
    display: "inline-flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none !important",
    backgroundColor: (props) => getBackgroundColor(theme, props),
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: (props) =>
      props.isOutlined ? getBorderColor(theme, props) : "transparent",
    borderRadius: theme.globalBorderRadius,
    transition: theme.transitions.default,
    overflow: "hidden",
    cursor: (props) => {
      if (props.disabled) {
        return "not-allowed";
      } else if (props.element === "a") {
        return "pointer";
      } else {
        return "default";
      }
    },
    "&:hover, &:active": {
      backgroundColor: (props) => getHoverColor(theme, props),
    },
  },
  innerContainer: {
    flex: "1 1 auto",
    position: "relative",
    zIndex: theme.zIndex["buttonBase"],
  },
  children: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    color: (props) => getChildColor(theme, props),
    fontFamily: theme.typography.sans,
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "600",
    textDecoration: "inherit",
    padding: (props) => (props.icon ? "8px 16px" : "10px 16px"),
    zIndex: theme.zIndex["buttonChildren"],
  },
  icon: {
    flexShrink: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "none",
  },
  iconLeft: {
    marginLeft: "-4px",
    marginRight: "6px",
  },
  iconRight: {
    marginLeft: "6px",
    marginRight: "-4px",
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
    zIndex: theme.zIndex["buttonBase"],
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
});

export default withStyles(styles, { name: "EuiButton" })(Button);
