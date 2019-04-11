/**
    Based on the package 'react-currency-input' (https://github.com/jsillitoe/react-currency-input)
    This modified version fixes a known issue in Safari (https://github.com/jsillitoe/react-currency-input/issues/50)
 */
import PropTypes from "prop-types";
import React, { Component } from "react";
// import ReactDOM from "react-dom";
import mask from "./mask.js";

// IE* parseFloat polyfill
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat#Polyfill
Number.parseFloat = parseFloat;

class CurrencyInput extends Component {
  constructor(props) {
    super(props);
    this.prepareProps = this.prepareProps.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.state = this.prepareProps(this.props);

    this.inputSelectionStart = 1;
    this.inputSelectionEnd = 1;
  }

  /**
   * Exposes the current masked value.
   *
   * @returns {String}
   */
  getMaskedValue() {
    return this.state.maskedValue;
  }

  /**
   * General function used to cleanup and define the final props used for rendering
   * @returns {{ maskedValue: {String}, value: {Number}, customProps: {Object} }}
   */
  prepareProps(props) {
    let customProps = { ...props }; // babeljs converts to Object.assign, then polyfills.
    delete customProps.onChange;
    delete customProps.onChangeEvent;
    delete customProps.value;
    delete customProps.decimalSeparator;
    delete customProps.thousandSeparator;
    delete customProps.precision;
    delete customProps.inputType;
    delete customProps.allowNegative;
    delete customProps.allowEmpty;
    delete customProps.prefix;
    delete customProps.suffix;
    delete customProps.selectAllOnFocus;

    let initialValue = props.value;
    if (initialValue === null) {
      initialValue = props.allowEmpty ? null : "";
    } else {
      if (typeof initialValue == "string") {
        // Some people, when confronted with a problem, think "I know, I'll use regular expressions."
        // Now they have two problems.

        // Strip out thousand separators, prefix, and suffix, etc.
        if (props.thousandSeparator === ".") {
          // special handle the . thousand separator
          initialValue = initialValue.replace(/\./g, "");
        }

        if (props.decimalSeparator !== ".") {
          // fix the decimal separator
          initialValue = initialValue.replace(
            new RegExp(props.decimalSeparator, "g"),
            "."
          );
        }

        //Strip out anything that is not a digit, -, or decimal separator
        initialValue = initialValue.replace(/[^0-9-.]/g, "");

        // now we can parse.
        initialValue = Number.parseFloat(initialValue);
      }
      initialValue = Number(initialValue).toLocaleString(undefined, {
        style: "decimal",
        minimumFractionDigits: props.precision,
        maximumFractionDigits: props.precision,
      });
    }

    const { maskedValue, value } = mask(
      initialValue,
      props.precision,
      props.decimalSeparator,
      props.thousandSeparator,
      props.allowNegative,
      props.prefix,
      props.suffix
    );

    return { maskedValue, value, customProps };
  }

  /**
   * Component lifecycle function.
   * Invoked when a component is receiving new props. This method is not called for the initial render.
   *
   * @param nextProps
   * @see https://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops
   */
  componentWillReceiveProps(nextProps) {
    this.setState(this.prepareProps(nextProps));
  }

  /**
   * onChange Event Handler
   * @param event
   */
  handleChange(event) {
    event.preventDefault();
    let { maskedValue, value } = mask(
      event.target.value,
      this.props.precision,
      this.props.decimalSeparator,
      this.props.thousandSeparator,
      this.props.allowNegative,
      this.props.prefix,
      this.props.suffix
    );

    event.persist(); // fixes issue #23

    this.setState({ maskedValue, value }, () => {
      this.props.onChange(maskedValue, value, event);
      this.props.onChangeEvent(event, maskedValue, value);
    });
  }

  /**
   * onFocus Event Handler
   * @param event
   */
  handleFocus(event) {
    if (!this.theInput) return;

    //Whenever we receive focus check to see if the position is before the suffix, if not, move it.
    let selectionEnd = this.theInput.value.length - this.props.suffix.length;
    let isNegative = (this.theInput.value.match(/-/g) || []).length % 2 === 1;
    let selectionStart = this.props.prefix.length + (isNegative ? 1 : 0);
    this.props.selectAllOnFocus &&
      event.target.setSelectionRange(selectionStart, selectionEnd);
    this.inputSelectionStart = selectionStart;
    this.inputSelectionEnd = selectionEnd;
  }

  /* eslint-disable */
  handleBlur(event) {
    this.inputSelectionStart = 0;
    this.inputSelectionEnd = 0;
  }
  /* eslint-enable */

  /**
   * Component lifecycle function.
   * @returns {XML}
   * @see https://facebook.github.io/react/docs/component-specs.html#render
   */
  render() {
    return (
      <input
        ref={(input) => {
          this.theInput = input;
        }}
        type={this.props.inputType}
        value={this.state.maskedValue}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onMouseUp={this.handleFocus}
        {...this.state.customProps}
      />
    );
  }
}

/**
 * Prop validation.
 * @see https://facebook.github.io/react/docs/component-specs.html#proptypes
 */

CurrencyInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  decimalSeparator: PropTypes.string,
  thousandSeparator: PropTypes.string,
  precision: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  inputType: PropTypes.string,
  allowNegative: PropTypes.bool,
  allowEmpty: PropTypes.bool,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  selectAllOnFocus: PropTypes.bool,
};

CurrencyInput.defaultProps = {
  /* eslint-disable */
  onChange: function(maskValue, value, event) {
    /*no-op*/
  },
  onChangeEvent: function(event, maskValue, value) {
    /*no-op*/
  },
  /* eslint-enable */
  value: "0",
  decimalSeparator: ".",
  thousandSeparator: ",",
  precision: "2",
  inputType: "text",
  allowNegative: false,
  prefix: "",
  suffix: "",
  selectAllOnFocus: false,
};

export default CurrencyInput;
