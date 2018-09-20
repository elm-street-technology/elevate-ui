// @flow
import React, { Component, Fragment } from "react";
import withStyles from "react-jss";
import classNames from "classnames";
import Downshift from "downshift";
import AutosizeInput from "react-input-autosize";

import Scaffold from "../Scaffold";
import Tag from "./Tag";

type Item = {
  label: string,
  value: string,
};

type Props = {
  classes: Object,
  /**
   * Accepts any classNames to be passed down to the component.
   */
  className: string,
  /**
   * Whether or not the input should close when a value is selected.
   */
  closeOnSelect: boolean,
  field: Object,
  form: Object,
  items: Array<Item>,
  /**
   * Text input for the label used inside the component.
   */
  label: string,
  /**
   * Accepts a function to be passed down to the component that fires when selected.
   */
  onSelect?: Function,
  /**
   * Accepts a function to be passed down to the component that fires when a tag is removed.
   */
  onRemove?: Function,
  theme: Object,
  /**
   * If the scaffold should be used.
   */
  withScaffold: boolean,
};

type State = {
  /**
   * Current input state.
   */
  inputValue: string,
  fullValue: Array<Object>,
};

const itemToString = (item) => (item ? item.label : "");

/**
 * A component that renders a <MultiSelect /> to be used inside forms.
 */
class MultiSelect extends Component<Props, State> {
  constructor(props) {
    super(props);

    const {
      field: { value },
      items,
    } = props;

    this.state = {
      inputValue: "",
      fullValue: items.filter((item) => value.indexOf(item.value) > -1) || [],
    };
  }

  _input;
  _inputWrapper;

  stateReducer = (state, changes) => {
    // this prevents the menu from being closed when the user
    // selects an item with a keyboard or mouse
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          isOpen: this.props.closeOnSelect ? false : state.isOpen,
          highlightedIndex: state.highlightedIndex,
        };
      default:
        return changes;
    }
  };

  handleStateChange = (changes, downshiftStateAndHelpers) => {
    if (!downshiftStateAndHelpers.isOpen) {
      this.setState({ inputValue: "" });
    }
    if (changes.hasOwnProperty("selectedItem")) {
      this.onAddTag(changes.selectedItem);
      this.setState({ inputValue: "" });
    }
  };

  onInputChange = (e) => {
    const inputValue = e.target.value;
    this.setState({ inputValue });
  };

  onAddTag = (item) => {
    const {
      field: { name, value },
      form: { setFieldValue },
    } = this.props;
    const { fullValue } = this.state;
    const updatedFullValue = [...fullValue];
    updatedFullValue.push(item);
    this.setState({ fullValue: updatedFullValue });

    const updatedValue = [...value];
    updatedValue.push(item.value);
    setFieldValue(name, updatedValue);

    if (this.props.onSelect) {
      this.props.onSelect(name, updatedValue);
    }
  };

  onRemoveTag = (item) => {
    const {
      field: { name, value },
      form: { setFieldValue },
    } = this.props;
    const { fullValue } = this.state;

    const stateIndex =
      fullValue && fullValue.findIndex((val) => val.value === item.value);
    const updatedFullValue = [...fullValue];
    updatedFullValue.splice(stateIndex, 1);
    this.setState({ fullValue: updatedFullValue });

    const index = value && value.findIndex((val) => val === item.value);
    const updatedValue = [...value];
    updatedValue.splice(index, 1);
    setFieldValue(name, updatedValue);

    if (this.props.onRemove) {
      this.props.onRemove(name, updatedValue);
    }
  };

  onInputKeyDown = (event) => {
    const currentValue = event.target.value;
    switch (event.keyCode) {
      case 8: // backspace
        if (!currentValue) {
          event.preventDefault();
          this.popValue();
        }
        return;
      case 9: // tab
        // Blur input, close dropdown
        return;
      default:
        return;
    }
  };

  popValue() {
    const {
      field: { name, value },
      form: { setFieldValue },
    } = this.props;
    const { fullValue } = this.state;
    const updatedFullValue = [...fullValue];
    updatedFullValue.pop();
    this.setState({ fullValue: updatedFullValue });

    const updatedValue = [...value];
    updatedValue.pop();
    setFieldValue(name, updatedValue);
  }

  onWrapperClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.focusOnInput();
  };

  focusOnInput() {
    this._input.focus();
    if (typeof this._input.getInput === "function") {
      this._input.getInput().focus();
    }
  }

  inputRef = (c) => {
    this._input = c;
  };

  inputWrapperRef = (c) => {
    this._inputWrapper = c;
  };

  renderArrowIcon(isOpen) {
    const {
      classes,
      theme: { colors },
    } = this.props;

    return (
      <svg
        className={classes.arrow}
        width={24}
        height={24}
        viewBox="0 0 1792 1792"
        transform={isOpen ? "rotate(180)" : null}
      >
        <path
          fill={colors.gray300 || "currentColor"}
          d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
        />
      </svg>
    );
  }

  render() {
    const {
      classes,
      className,
      field: { name, value },
      form: { errors, setFieldTouched, touched },
      items = [],
      label,
      withScaffold = true,
    } = this.props;

    const { fullValue } = this.state;

    return (
      <Downshift
        itemToString={itemToString}
        stateReducer={this.stateReducer}
        onStateChange={this.handleStateChange}
        selectedItem={value}
        render={({
          getInputProps,
          getItemProps,
          isOpen,
          highlightedIndex,
          openMenu,
        }) => {
          const Input = (
            <div
              ref={this.inputWrapperRef}
              className={classNames(classes.wrapper, className)}
              onClick={this.onWrapperClick}
            >
              <div className={classes.tagWrapper}>
                {fullValue.map((item) => {
                  return (
                    <Fragment key={item.value}>
                      <Tag tag={item} onRemove={this.onRemoveTag} />
                      <input type="hidden" name={name} value={item.value} />
                    </Fragment>
                  );
                })}
                <AutosizeInput
                  {...getInputProps({
                    ref: this.inputRef,
                    inputClassName: classes.root,
                    onChange: this.onInputChange,
                    onFocus: openMenu,
                    onKeyDown: this.onInputKeyDown,
                    value: this.state.inputValue,
                  })}
                  onBlur={(selection) => setFieldTouched(name, selection)}
                />
              </div>
              {this.renderArrowIcon(isOpen)}
            </div>
          );

          const Dropdown = (
            <div className={classes.dropdown}>
              {items
                .filter(
                  (i) =>
                    this.state.fullValue &&
                    this.state.fullValue.findIndex(
                      (val) => val.value === i.value
                    ) === -1 &&
                    (!this.state.inputValue ||
                      i.label
                        .toLowerCase()
                        .includes(this.state.inputValue.toLowerCase()))
                )
                .map((item, index) => (
                  <div
                    key={item.value}
                    className={classNames({
                      [classes.dropdownItem]: true,
                      [classes.dropdownItemSelected]:
                        value &&
                        value.findIndex((val) => val.value === item.value) > -1,
                      [classes.dropdownItemActive]: highlightedIndex === index,
                    })}
                    {...getItemProps({
                      index,
                      item,
                    })}
                  >
                    {itemToString(item)}
                  </div>
                ))}
            </div>
          );

          return withScaffold ? (
            <div>
              <Scaffold label={label} error={touched[name] && errors[name]}>
                {Input}
                {isOpen && Dropdown}
              </Scaffold>
            </div>
          ) : (
            <div>
              {Input}
              {isOpen && Dropdown}
            </div>
          );
        }}
      />
    );
  }
}

export default withStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    minHeight: "40px",
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.gray300}`,
    padding: "2px 12px 2px 8px",
    cursor: (props) => (props.disabled ? "not-allowed" : "default"),
  },
  tagWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  root: {
    color: "inherit",
    fontFamily: "inherit",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    border: "none",
    outline: "none",
    cursor: "inherit",
    boxShadow: "none", // Reset default inputs for mozilla
    "-webkit-appearance": "none", // Reset default browser styles
    "-moz-appearance": "none", // Reset default browser styles
  },
  arrow: {
    flexShrink: "0",
    display: "block",
    marginLeft: "auto",
  },
  dropdown: {
    position: "absolute",
    zIndex: "1",
    width: "100%",
    maxHeight: "200px",
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.gray300}`,
    boxShadow: theme.globalBoxShadow, // Add back focus style
    marginTop: "-1px", // force overlapping border with input
    overflowY: "scroll",
  },
  dropdownItem: {
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "400",
    padding: "8px 12px",
  },
  dropdownItemSelected: {
    fontWeight: "600",
    color: theme.colors.white,
    backgroundColor: theme.colors.secondaryDark,
  },
  dropdownItemActive: {
    fontWeight: "600",
    color: theme.colors.white,
    backgroundColor: theme.colors.secondary,
  },
}))(MultiSelect);
