// @flow

/**
 * Sample usage of onSearch:
 *
 * onSearch({inputValue, originalItems, setItems}) => {
 *   if (inputValue === '') {
 *     return setItems(originalItems);
 *   }
 *   return axios.get(`/your-autocomplete-endpoint?keywords=${inputValue}`)
 *    .then(({data: {newItems}}) => {
 *       return setItems(newItems); // replaces currentItems (if any exist)
 *    });
 * }
 *
 * render() {
 *    return <Select onSearch={this.onSearch} loading={this.state.loading} items={this.state.multiselectItems} />;
 * }
 */

import React, { Component } from "react";
import withStyles from "../withStyles";
import classNames from "classnames";
import Downshift from "downshift";
import get from "lodash/get";

import Scaffold from "../Scaffold";

type Item = {
  label: string,
  value: string,
  note?: string,
};
type Items = Array<Item>;

type Props = {
  classes: Object,
  /**
   * Accepts any classNames to be passed down to the component.
   */
  className: string,
  field: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  form: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  items: Items,
  /**
   * Text to be used for the label of the component.
   */
  label: string,
  /**
   * Shows loading indicator in dropdown
   */
  loading: boolean,
  /**
   * Method to get more dropdown items on search.
   */
  onSearch?: (value: {
    inputValue: string,
    originalItems: Items,
    currentItems: Items,
    setItems: (value: Items) => void,
  }) => Items,

  theme: Object,
  /**
   * If the scaffold component should be used when rendered.
   */
  withScaffold: boolean,
};

type State = {
  /**
   * Current inputValue for the component.
   */
  inputValue: string,

  // We move items into state here so that we can change or add items
  // Via autocomplete
  items: Items,
};

const itemToString = (item) => (item ? item.label : "");

/**
 * A component that renders styled select inputs for use in forms.
 */
class Select extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      items: props.items || [],
    };
  }

  _input;
  _inputWrapper;

  handleStateChange = (changes, downshiftStateAndHelpers) => {
    if (!downshiftStateAndHelpers.isOpen) {
      this.setState({ inputValue: "" });
    }
    if (changes.hasOwnProperty("selectedItem")) {
      this.onItemSelect(changes.selectedItem);
    }
  };

  onInputChange = (e) => {
    const inputValue = e.target.value;
    this.setState({ inputValue });

    if (this.props.onSearch) {
      this.props.onSearch({
        inputValue,
        originalItems: this.props.items,
        currentItems: this.state.items,
        setItems: this.setItems,
      });
    }
  };

  onItemSelect = (item) => {
    const {
      field: { name },
      form: { setFieldValue },
    } = this.props;

    setFieldValue(name, item.value);
  };

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

  renderTimesIcon(onItemSelect) {
    const {
      classes,
      theme: { colors },
    } = this.props;
    return (
      <button
        onClick={() => onItemSelect({ label: "", value: "" })}
        type="button"
        className={classes.arrow}
        title="Clear item(s)"
      >
        <svg width={24} height={24} viewBox="0 0 24 24">
          <path
            fill={colors.error || "currentColor"}
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          />
        </svg>
      </button>
    );
  }

  renderArrowIcon(isOpen) {
    const {
      classes,
      theme: { colors },
    } = this.props;
    return (
      <button type="button" className={classes.arrow} title="Expand dropdown">
        <svg
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
      </button>
    );
  }

  /**
   * Used by onSearch to change the dropdown items that exist
   * @param {*} items
   */
  setItems = (items: Items): void => {
    if (!(items && Array.isArray(items))) {
      return;
    }
    this.setState({ items });
  };

  render() {
    const {
      classes,
      className,
      field: { name, value },
      form: { errors, setFieldTouched, touched },
      label,
      withScaffold = true,
    } = this.props;

    const { inputValue, items } = this.state;
    const selectedItem = items.find((item) => {
      return item.value === value;
    }) || { label: "", value: "" };

    return (
      <Downshift
        itemToString={itemToString}
        onStateChange={this.handleStateChange}
        selectedItem={selectedItem}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          highlightedIndex,
          openMenu,
          closeMenu,
          selectedItem,
        }) => {
          const Input = (
            <div
              ref={this.inputWrapperRef}
              className={classNames(classes.root, className)}
              onClick={this.onWrapperClick}
            >
              <input
                className={classes.input}
                {...getInputProps({
                  ref: this.inputRef,
                  onChange: this.onInputChange,
                  onFocus: !isOpen ? openMenu : closeMenu,
                  value: !isOpen ? selectedItem.label : inputValue,
                })}
                onBlur={(selection) => setFieldTouched(name, selection)}
              />
              <input type="hidden" name={name} value={selectedItem.value} />
              {this.renderArrowIcon(isOpen)}
              {selectedItem &&
                selectedItem.value &&
                this.renderTimesIcon(this.onItemSelect)}
            </div>
          );

          const Dropdown = (
            <div className={classes.dropdown}>
              {this.props.loading ? (
                <div className={classes.dropdownItem}>Loading...</div>
              ) : null}
              {items
                .filter(
                  (i) =>
                    !inputValue ||
                    i.label.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((item, index) => (
                  <div
                    key={index}
                    className={classNames({
                      [classes.dropdownItem]: true,
                      [classes.dropdownItemActive]: highlightedIndex === index,
                      [classes.dropdownItemSelected]: selectedItem === item,
                    })}
                    {...getItemProps({
                      index,
                      item,
                    })}
                  >
                    {itemToString(item)}
                    {item.note && (
                      <span className={classes.dropdownItemNote}>
                        {item.note}
                      </span>
                    )}
                  </div>
                ))}
            </div>
          );

          return withScaffold ? (
            <div>
              <Scaffold
                label={label}
                error={get(touched, name) && get(errors, name)}
              >
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
      </Downshift>
    );
  }
}

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    minHeight: "40px",
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.gray300}`,
    padding: "0 12px",
    cursor: (props) => (props.disabled ? "not-allowed" : "default"),
  },
  input: {
    width: "calc(100% - 72px)",
    flexGrow: "1",
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
    display: "inline-flex",
    marginLeft: "auto",
  },
  dropdown: {
    position: "absolute",
    zIndex: theme.zIndex["selectDropdown"],
    width: "100%",
    maxHeight: "200px",
    cursor: "default",
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.gray300}`,
    boxShadow: theme.globalBoxShadow, // Add back focus style
    marginTop: "-1px", // force overlapping border with input
    overflowY: "scroll",
    WebkitOverflowScrolling: "touch",
  },
  dropdownItem: {
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "400",
    padding: "8px 12px",
  },
  dropdownItemNote: {
    fontSize: "14px",
    position: "absolute",
    right: "10px",
    color: theme.colors.gray400,
  },
  dropdownItemActive: {
    backgroundColor: theme.colors.gray100,
  },
  dropdownItemSelected: {
    backgroundColor: theme.colors.gray200,
  },
});

export default withStyles(styles, { name: "EuiSelect" })(Select);
