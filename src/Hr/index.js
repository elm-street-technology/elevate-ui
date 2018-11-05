// @flow
import React, { Component } from "react";
import withStyles from "../withStyles";
import classNames from "classnames";

type Props = {
  /**
   * Accepts any classNames to be passed to the component.
   */
  className: string,
  classes: Object,
  /**
   * Color to be applied to the Hr component. Can be "primary", "secondary", or any custom value.
   */
  color?: string,
  /**
   * Adds default margin bottom
   */
  gutterBottom: boolean,
  /**
   * Adds default margin top
   */
  gutterTop: boolean,
  /**
   * Style object with any applicable overrides
   */
  style: Object,
  /**
   * Default theme object from `withStyles`
   */
  theme: Object,
  /**
   * Height/thickness of the Hr component.
   */
  thickness?: string | number,
};

/**
 * A component used to render a styled hr.
 */
class Hr extends Component<Props> {
  static defaultProps = {
    gutterTop: true,
    gutterBottom: true,
  };
  render() {
    const { classes, className, style, ...rest } = this.props;

    return (
      <div
        className={classNames(classes.root, className)}
        {...rest}
        style={{
          ...style,
        }}
      />
    );
  }
}

const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: (props) => props.thickness || "1px",
    backgroundColor: (props) =>
      theme.colors[props.color] || props.color || theme.colors.gray300,
    marginTop: (props) => (props.gutterTop ? "1em" : 0),
    marginBottom: (props) => (props.gutterBottom ? "1em" : 0),
  },
});

export default withStyles(styles, { name: "EuiHr" })(Hr);
