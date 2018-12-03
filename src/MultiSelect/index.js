// @flow
import React, { Component, Fragment } from "react";
import withStyles from "../withStyles";
import classNames from "classnames";
import Downshift from "downshift";
import AutosizeInput from "react-input-autosize";
import get from "lodash/get";

import Scaffold from "../Scaffold";
import Tag from "./Tag";

type Item = {
  label: string,
  value: string,
};
type Items = Array<Item>;

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

  /**
   * Sample usage:
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
   *    return <Multiselect onSearch={this.onSearch} items={this.state.multiselectItems} />;
   * }
   */
  onSearch?: ({
    inputValue: string,
    originalItems: Items,
    currentItems: Items,
    setItems: (Items) => void,
  }) => Items,

  /**
   * Accepts an array of objects with the shape { label: 'Banana', value: 'Banana' }
   */
  items: Items,
  /**
   * Text input for the label used inside the component.
   */
  label: string,
  /**
   * Whether or not custom tags can be added to the MultiSelect.
   * Tags are strings that the user can type and select that are not included in Items
   */
  tags?: boolean,
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
  selectedItems: Items,

  // We move items into state here so that we can change or add items
  // Via autocomplete
  items: Items,
};

const itemToString = (item) => (item ? item.label : "");
const getSelectedItems = (props) => {
  const {
    field: { value },
    items,
  } = props;

  let selectedItems = [];

  // Sometimes, we might have some this.props.field.values that aren't
  // part of the this.props.items collection that gets passed in. We'll want
  // to add these so we have access to them in this.state.selectedItems
  // (they won't show up in the dropdown items but they'll show as selected)
  if (value && value.length > 0) {
    value.forEach((singleValue) => {
      const existingItem = items.find(
        (item) => singleValue.indexOf(item.value) > -1
      );
      if (existingItem) {
        selectedItems.push(existingItem);
      } else {
        selectedItems.push({
          label: singleValue,
          value: singleValue,
        });
      }
    });
  }

  return selectedItems;
};

/**
 * A component that renders a <MultiSelect /> to be used inside forms.
 */
class MultiSelect extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      selectedItems: getSelectedItems(props),
      items: props.items || [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (
      props.field &&
      props.field.value &&
      props.field.value.length !== state.selectedItems.length
    ) {
      return {
        inputValue: "",
        selectedItems: getSelectedItems(props),
      };
    }
    return null;
  }

  _input;
  _inputWrapper;

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

  /**
   * Callback Fn from Downshift that exposes
   * state and event triggers such as keyboard
   * and mouse events
   */
  stateReducer = (state, changes) => {
    // this prevents the menu from being closed when the user
    // selects an item with a keyboard or mouse
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        // Check the prop to decide whether we close the dropdown after an item is selected
        return {
          ...changes,
          isOpen: this.props.closeOnSelect ? false : state.isOpen,
        };
      case Downshift.stateChangeTypes.blurInput:
        // If a user tabs through the input, we want to make sure it's marked as
        // `touched` for formik's validation to run
        if (this.props.form && this.props.field) {
          this.props.form.setFieldTouched(this.props.field.name, true);
        }
        // Always close the dropdown on blur
        return {
          isOpen: false,
        };
      default:
        return changes;
    }
  };

  /**
   * Callback Fn from downshift that exposes changes
   */
  handleStateChange = (changes, downshiftStateAndHelpers) => {
    if (!downshiftStateAndHelpers.isOpen) {
      this.setState({ inputValue: "" });
    }
    if (changes.hasOwnProperty("selectedItem")) {
      this.onAddTag(changes.selectedItem);
    }
  };

  onAddTag = (item) => {
    const {
      field: { name, value },
      form: { setFieldValue },
      tags,
    } = this.props;
    const { inputValue, selectedItems } = this.state;

    if (item) {
      const updatedSelectedItems = [...selectedItems];
      updatedSelectedItems.push(item);
      this.setState({
        selectedItems: updatedSelectedItems,
        inputValue: "",
      });

      const updatedValue = [...value];
      updatedValue.push(item.value);
      setFieldValue(name, updatedValue);
    } else if (tags && inputValue !== "" && !value.includes(inputValue)) {
      const updatedSelectedItems = [...selectedItems];
      updatedSelectedItems.push({ label: inputValue, value: inputValue });
      this.setState({
        selectedItems: updatedSelectedItems,
        inputValue: "",
      });

      const updatedValue = [...value];
      updatedValue.push(inputValue);
      setFieldValue(name, updatedValue);
    }
  };

  onRemoveTag = (item) => {
    const {
      field: { name, value },
      form: { setFieldValue },
    } = this.props;
    const { selectedItems } = this.state;

    const stateIndex =
      selectedItems &&
      selectedItems.findIndex((val) => val.value === item.value);
    const updatedSelectedItems = [...selectedItems];
    updatedSelectedItems.splice(stateIndex, 1);
    this.setState({ selectedItems: updatedSelectedItems });

    const index = value && value.findIndex((val) => val === item.value);
    const updatedValue = [...value];
    updatedValue.splice(index, 1);
    setFieldValue(name, updatedValue);
  };

  popValue() {
    const {
      field: { name, value },
      form: { setFieldValue },
    } = this.props;
    const { selectedItems } = this.state;
    const updatedSelectedItems = [...selectedItems];
    updatedSelectedItems.pop();
    this.setState({ selectedItems: updatedSelectedItems });

    const updatedValue = [...value];
    updatedValue.pop();
    setFieldValue(name, updatedValue);
  }

  /**
   * Change state to reflect new inputValue typed by user.
   *
   * If onSearch is passed into props, call onSearch to allow AJAX autocomplete
   */
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
      case 13: // enter
        if (currentValue !== "") {
          event.preventDefault();
          // This is wrapped in a setTimeout to force it to trigger *after* the
          // built-in downshift state reducer fires (fixes a timing issue if a
          // user has typed-ahead *and* keyboard-selected an item from the dropdown)
          setTimeout(() => {
            this.onAddTag();
          }, 1);
        }
        return;
      default:
        return;
    }
  };

  /**
   * When user clicks on Dropdown, focus on the text input inside the dropdown
   */
  onWrapperClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.focusInput();
  };

  focusInput() {
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
      form: { errors, touched },
      label,
      withScaffold = true,
    } = this.props;

    const { selectedItems, items } = this.state;

    return (
      <Downshift
        itemToString={itemToString}
        stateReducer={this.stateReducer}
        onStateChange={this.handleStateChange}
        selectedItem={value}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          highlightedIndex,
          openMenu,
          closeMenu,
        }) => {
          const Input = (
            <div
              ref={this.inputWrapperRef}
              className={classNames(classes.root, className)}
              onClick={this.onWrapperClick}
            >
              <div className={classes.tagWrapper}>
                {selectedItems.map((item) => {
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
                    inputClassName: classes.input,
                    onChange: this.onInputChange,
                    onFocus: !isOpen ? openMenu : closeMenu,
                    onKeyDown: this.onInputKeyDown,
                    value: this.state.inputValue,
                  })}
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
                    this.state.selectedItems &&
                    this.state.selectedItems.findIndex(
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
    alignItems: "center",
    overflowX: "auto",
  },
  input: {
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
  dropdownItemActive: {
    backgroundColor: theme.colors.gray100,
  },
  dropdownItemSelected: {
    backgroundColor: theme.colors.gray200,
  },
});

export default withStyles(styles, { name: "EuiMultiSelect" })(MultiSelect);
