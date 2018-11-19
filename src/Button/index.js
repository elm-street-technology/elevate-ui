// @flow
import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "../withStyles";
import Color from "color";

type Props = {
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

type State = {
  rippleActive: boolean,
};

function getChildColor(theme, props) {
  try {
    Color(props.color); // if string resolves to color
    if (props.isOutlined) {
      return Color(props.color)
        .darken(0.25)
        .string();
    } else {
      if (Color(props.color).isDark()) {
        return theme.colors.white;
      } else {
        return theme.colors.black;
      }
    }
  } catch (error) {
    if (props.isOutlined) {
      return Color(theme.colors[props.color])
        .darken(0.25) // darken the outlined button text a bit to give us better contrast
        .string();
    } else if (props.disabled) {
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
}

function getBackgroundColor(theme, props) {
  try {
    Color(props.color);

    if (props.isOutlined) {
      return "transparent";
    }

    return props.color;
  } catch (error) {
    if (props.isOutlined) {
      return "transparent";
    } else if (props.disabled) {
      return theme.colors["gray100"];
    } else if (theme.colors[props.color]) {
      return theme.colors[props.color];
    } else {
      return theme.colors.black;
    }
  }
}

function getHoverColor(theme, props) {
  try {
    Color(props.color);
    // if the background is too dark fade it instead of lighten
    if (Color(props.color).isDark()) {
      return Color(props.color)
        .fade(0.75)
        .string();
    } else {
      return Color(props.color)
        .lighten(0.55)
        .string();
    }
  } catch (error) {
    if (props.disabled && props.isOutlined) {
      // if disabled and outlined
      return "transparent";
    } else if (props.disabled) {
      // if disabled
      return theme.colors["gray100"];
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
}

function getRippleColor(theme, props) {
  try {
    Color(props.color);

    if (props.isOutlined) {
      return Color(props.color)
        .lighten(0.45)
        .string();
    } else {
      return props.color;
    }
  } catch (error) {
    if (props.isOutlined) {
      return Color(theme.colors[props.color])
        .lighten(0.45)
        .string();
    } else {
      return theme.colors[props.color];
    }
  }
}

function getBorderColor(theme, props) {
  try {
    Color(props.color);
    return props.color;
  } catch (error) {
    if (props.disabled) {
      return theme.colors["gray100"];
    } else if (!props.disabled && theme.colors[props.color]) {
      return theme.colors[props.color];
    }
    return theme.colors.black;
  }
}

/**
 * A component used to render a styled button.
 */
class Button extends Component<Props, State> {
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

  handleClick = (e) => {
    const button = e.target;
    const { onClick } = this.props;

    let parentOffset = button.getBoundingClientRect();
    let relX = Math.round(e.clientX - parentOffset.left);
    let relY = Math.round(e.clientY - parentOffset.top);

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

const styles = (theme) => ({
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

    "&:hover": {
      backgroundColor: (props) => getHoverColor(theme, props),
    },
  },
  innerContainer: {
    position: "relative",
    zIndex: "0",
  },
  children: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    color: (props) => getChildColor(theme, props),
    fontFamily: theme.typography.sans,
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "600",
    textDecoration: "inherit",
    padding: (props) => (props.icon ? "8px 16px" : "10px 16px"),
    zIndex: "1",
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
});

export default withStyles(styles, { name: "EuiButton" })(Button);
