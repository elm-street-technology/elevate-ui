// @flow
import React, { Component } from "react";
import withStyles from "../withStyles";

type Props = {
  /**
   * Accepts any classNames to be passed to the component.
   */
  className: string,
  /**
   * Color to be applied to the Hr component. Can be "primary", "secondary", or any custom value.
   */
  color: string,
  /**
   * Style object with any applicable overrides (common overrides are marginTop/marginBottom)
   */
  style: Object,
  /**
   * Default theme object from `withStyles`
   */
  theme: Object,
  /**
   * Height/thickness of the Hr component.
   */
  thickness: string | number,
};

/**
 * A component used to render a styled hr.
 */
class Hr extends Component<Props> {
  render() {
    const { color, style, theme, thickness, ...rest } = this.props;

    return (
      <div
        {...rest}
        style={{
          display: "flex",
          width: "100%",
          height: thickness || "1px",
          backgroundColor: theme.colors[color] || color || theme.colors.gray300,
          marginTop: "16px",
          marginBottom: "16px",
          ...style,
        }}
      />
    );
  }
}

export default withStyles(() => {})(Hr);
