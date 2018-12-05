// @flow
import React, { Component } from "react";
import withStyles from "../withStyles";
import classNames from "classnames";
import get from "lodash/get";
import ReactCurrencyInput from "./react-currency-input";

import Scaffold from "../Scaffold";

type Props = {
  /**
   * Autofocus the input
   */
  autoFocus: boolean,
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
   * Number of digits after the decimal separator.
   */
  precision: boolean,
  /**
   * Currency prefix
   */
  prefix: string,
  /**
   * Sets the tab index of the input.
   */
  tabIndex: string,
  /**
   * Use the scaffold for the input or if the input should just be the raw input.
   */
  withScaffold: boolean,
  /**
   * Currency value
   */
  value: number,
};

/**
 * Currency input component that returns an unformatted number. Based on a modified version of `react-current-input`. See https://github.com/jsillitoe/react-currency-input for more configuration options.
 */
class CurrencyInput extends Component<Props> {
  currencyInput: any;
  render() {
    const {
      classes,
      className,
      field,
      form: { touched, errors, setFieldValue },
      id,
      label,
      tabIndex = "0",
      theme,
      withScaffold = true,
      ...rest
    } = this.props;
    if (withScaffold) {
      return (
        <Scaffold
          id={id}
          label={label}
          error={get(touched, field.name) && get(errors, field.name)}
        >
          <ReactCurrencyInput
            prefix="$"
            ref={(node) => (this.currencyInput = node)}
            id={id}
            className={classNames(classes.root, className)}
            tabIndex={tabIndex}
            onChangeEvent={() =>
              setFieldValue(id, this.currencyInput.state.value)
            }
            {...field}
            {...rest}
          />
        </Scaffold>
      );
    } else {
      return (
        <ReactCurrencyInput
          prefix="$"
          ref={(node) => (this.currencyInput = node)}
          id={id}
          className={classNames(classes.root, className)}
          tabIndex={tabIndex}
          onChangeEvent={() =>
            setFieldValue(id, this.currencyInput.state.value)
          }
          {...field}
          {...rest}
        />
      );
    }
  }
}

const styles = (theme) => ({
  root: {
    display: "block",
    width: "100%",
    height: "40px",
    color: theme.typography.bodyColor,
    fontFamily: "inherit",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    backgroundColor: "#fff",
    border: `1px solid ${theme.colors.gray300}`,
    padding: "8px 12px",
    boxShadow: "none", // Reset default inputs for mozilla
    "-webkit-appearance": "none", // Reset default browser styles
    "-moz-appearance": "none", // Reset default browser styles

    "&:focus": {
      outline: "none", // Disable default focus glow
      boxShadow: theme.globalBoxShadow, // Add back focus style
    },

    "&:disabled": {
      cursor: "not-allowed",
    },
  },
});

export default withStyles(styles, { name: "EuiCurrencyInput" })(CurrencyInput);
