import React, { Component } from "react";
import withStyles from "../withStyles";
import classNames from "classnames";
import Remove from "elevate-ui-icons/Remove";
import Add from "elevate-ui-icons/Add";
import get from "lodash/get";

import Scaffold from "../Scaffold";

type Props = {
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
};

/**
 * Number input that can be adjusted incrementally
 */
class NumberIncrement extends Component<Props> {
  handleValueChange = (direction) => {
    let newValue = this.input.value;
    if (direction === "increment") {
      newValue++;
    } else {
      newValue--;
    }
    return this.props.form.setFieldValue(this.props.field.name, newValue);
  };

  render() {
    const {
      classes,
      className,
      field,
      form: { touched, errors, setFieldValue },
      id,
      label,
      theme,
      withScaffold = true,
      ...rest
    } = this.props;

    const NumberInput = (
      <div className={classNames(classes.root, className)}>
        <button
          className={classNames(classes.button, classes.buttonLeft)}
          type="button"
          onClick={() => this.handleValueChange("decrement")}
        >
          <Remove size={16} />
        </button>
        <input
          className={classes.input}
          type="number"
          id={id}
          ref={(node) => (this.input = node)}
          {...field}
          {...rest}
          onChange={() => {
            setFieldValue(field.name, this.input.value);
            if (this.props.onChange) {
              this.props.onChange(this.input.value);
            }
          }}
        />
        <button
          className={classNames(classes.button, classes.buttonRight)}
          type="button"
          onClick={() => this.handleValueChange("increment")}
        >
          <Add size={16} />
        </button>
      </div>
    );

    if (withScaffold) {
      return (
        <Scaffold
          id={id}
          label={label}
          error={get(touched, field.name) && get(errors, field.name)}
        >
          {NumberInput}
        </Scaffold>
      );
    } else {
      return NumberInput;
    }
  }
}

const styles = (theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    position: "relative",
  },
  input: {
    display: "inline-block",
    width: "68px",
    height: "auto",
    color: theme.typography.bodyColor,
    fontFamily: "inherit",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    textAlign: "center",
    backgroundColor: "#fff",
    border: `1px solid ${theme.colors.gray300}`,
    borderLeft: "none",
    borderRight: "none",
    borderRadius: 0,
    padding: "8px 5px 8px 17px",
    boxShadow: "none", // Reset default inputs for mozilla
    "-webkit-appearance": "none", // Reset default browser styles
    "-moz-appearance": "none", // Reset default browser styles
    "&:disabled": {
      cursor: "not-allowed",
    },
  },
  button: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    width: 40,
    backgroundColor: theme.colors["primary"],
    color: "#fff",
  },
  buttonLeft: {
    borderTopLeftRadius: theme.globalBorderRadius,
    borderBottomLeftRadius: theme.globalBorderRadius,
  },
  buttonRight: {
    borderTopRightRadius: theme.globalBorderRadius,
    borderBottomRightRadius: theme.globalBorderRadius,
  },
});

export default withStyles(styles, { name: "NumberIncrement" })(NumberIncrement);
