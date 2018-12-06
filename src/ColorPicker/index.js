// @flow
import React, { Component } from "react";
import withStyles from "../withStyles";
import classNames from "classnames";
import get from "lodash/get";
import omit from "lodash/omit";
import { SketchPicker } from "react-color";
import Scaffold from "../Scaffold";

type $Props = {
  classes: Object,
  /**
   * Accepts any classNames to be passed down to the component.
   */
  className: string,
  field: Object,
  form: Object,
  id: string,
  /**
   * Text input to be used as the label for inside the component.
   */
  label: string,
  theme: Object,
  /**
   * Use the scaffold for the input or if the input should just be the raw input.
   */
  withScaffold: boolean,
  /**
   * Custom Props
   */
  colorMode: "rgb" | "hex" | "hsa",
  disableAlpha: boolean,
};

type $State = {
  displayColorPicker: boolean,
};

/**
 * Color Picker component that returns hex string, rgb object and RGBA object.
 */
class ColorPicker extends Component<$Props, $State> {
  getColor(color) {
    const mode = this.props.colorMode || "hex";
    if (typeof color === "string") {
      return color;
    }
    if (mode in color) {
      if (mode === "rgb" && this.props.disableAlpha) {
        return omit(color[mode], ["a"]);
      }
      return color[mode];
    }
    return color;
  }

  isAlphaDisabled() {
    const { colorMode = "hex", disableAlpha } = this.props;
    if (colorMode !== "rgb") {
      return true;
    }
    return disableAlpha;
  }

  handleValueChange = (value) => {
    return this.props.form.setFieldValue(
      this.props.field.name,
      this.getColor(value)
    );
  };

  state = {
    displayColorPicker: false,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  render() {
    const {
      classes,
      className,
      field,
      form: { touched, errors },
      id,
      label,
      withScaffold = true,
    } = this.props;

    let color = field.value;
    let colorStyle;

    switch (typeof color) {
      case "object":
        if ("r" in color && "g" in color && "b" in color) {
          if ("a" in color) {
            colorStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
          } else {
            colorStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
          }
        }
        break;
      default:
        colorStyle = color || "transparent";
        if (color === "transparent") {
          color = { a: 100 };
        }
    }
    const colorStyles = colorStyle
      ? {
          backgroundColor: colorStyle,
        }
      : {};
    const ColorInput = (
      <div className={classNames(classes.root, className)}>
        <div className={classes.swatch} onClick={this.handleClick}>
          <div className={classes.color} style={colorStyles} />
        </div>
        {this.state.displayColorPicker ? (
          <div className={classes.popover}>
            <div className={classes.cover} onClick={this.handleClick} />
            <SketchPicker
              color={color}
              onChange={this.handleValueChange}
              disableAlpha={this.isAlphaDisabled()}
            />
          </div>
        ) : null}
      </div>
    );
    if (withScaffold) {
      return (
        <Scaffold
          id={id}
          label={label}
          error={get(touched, field.name) && get(errors, field.name)}
        >
          {ColorInput}
        </Scaffold>
      );
    } else {
      return ColorInput;
    }
  }
}

const styles = (theme) => ({
  root: {
    position: "relative",
  },

  color: {
    height: "28px",
    borderRadius: "2px",
  },
  swatch: {
    padding: "5px",
    background: "#fff",
    border: `1px solid ${theme.colors.gray300}`,
    cursor: "pointer",
  },
  popover: {
    position: "absolute",
    zIndex: "2",
  },
  cover: {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  },
});

export default withStyles(styles, { name: "EuiColorPicker" })(ColorPicker);
