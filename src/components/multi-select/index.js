// @flow
import React, { Component } from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';
import Downshift from 'downshift';
import AutosizeInput from 'react-input-autosize';

import Label from '../label';
import Validation from '../validation';
import Tag from './tag';

type Item = {
  label: string,
  value: string,
};

type Props = {
  classes: Object,
  className: string,
  field: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  form: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  items: Array<Item>,
  label: string,
};

type State = {
  inputValue: string,
};

const itemToString = item => (item ? item.label : '');
class MultiSelect extends Component<Props, State> {
  state = {
    inputValue: '',
  };
  _input;
  _inputWrapper;

  handleStateChange = (changes, downshiftStateAndHelpers) => {
    if (!downshiftStateAndHelpers.isOpen) {
      this.setState({ inputValue: '' });
    }
    if (changes.hasOwnProperty('selectedItem')) {
      this.onAddTag(changes.selectedItem);
    }
  };

  onInputChange = e => {
    const inputValue = e.target.value;
    this.setState({ inputValue });
  };

  onAddTag = item => {
    const { field: { name, value }, form: { setFieldValue } } = this.props;
    const updatedValue = [...value];
    updatedValue.push(item);
    setFieldValue(name, updatedValue);
  };

  onRemoveTag = item => {
    const { field: { name, value }, form: { setFieldValue } } = this.props;
    const index = value.findIndex(val => val.value === item.value);
    const updatedValue = [...value];
    updatedValue.splice(index, 1);
    setFieldValue(name, updatedValue);
  };

  onInputKeyDown = event => {
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
    const { field: { name, value }, form: { setFieldValue } } = this.props;
    const updatedValue = [...value];
    updatedValue.pop();
    setFieldValue(name, updatedValue);
  }

  onWrapperClick = e => {
    e.stopPropagation();
    e.preventDefault();
    this.focusOnInput();
  };

  focusOnInput() {
    this._input.focus();
    if (typeof this._input.getInput === 'function') {
      this._input.getInput().focus();
    }
  }

  inputRef = c => {
    this._input = c;
  };

  inputWrapperRef = c => {
    this._inputWrapper = c;
  };

  render() {
    const {
      classes,
      className,
      field: { name, value },
      form: { errors, setFieldTouched, touched },
      items = [],
      label,
    } = this.props;
    return (
      <Downshift
        itemToString={itemToString}
        onStateChange={this.handleStateChange}
        selectedItem={value}
        render={({
          getInputProps,
          getItemProps,
          getLabelProps,
          isOpen,
          highlightedIndex,
          openMenu,
        }) => {
          return (
            <div className={classNames(classes.scaffold, className)}>
              {label && <Label {...getLabelProps()}>{label}</Label>}
              <div
                ref={this.inputWrapperRef}
                className={classes.wrapper}
                onClick={this.onWrapperClick}
              >
                {value.map(item => (
                  <Tag
                    key={item.value}
                    tag={item}
                    onRemove={this.onRemoveTag}
                  />
                ))}
                <AutosizeInput
                  {...getInputProps({
                    ref: this.inputRef,
                    className: classes.root,
                    onChange: this.onInputChange,
                    onFocus: openMenu,
                    onKeyDown: this.onInputKeyDown,
                    value: this.state.inputValue,
                  })}
                  onBlur={selection => setFieldTouched(name, selection)}
                />
              </div>
              {isOpen && (
                <div className={classes.dropdown}>
                  {items
                    .filter(
                      i =>
                        value.findIndex(val => val.value === i.value) === -1 &&
                        (!this.state.inputValue ||
                          i.value.includes(this.state.inputValue.toLowerCase()))
                    )
                    .map((item, index) => (
                      <div
                        key={item.value}
                        className={classNames({
                          [classes.dropdownItem]: true,
                          [classes.dropdownItemSelected]:
                            value.findIndex(val => val.value === item.value) >
                            -1,
                          [classes.dropdownItemActive]:
                            highlightedIndex === index,
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
              )}
              {touched[name] &&
                errors[name] && <Validation error={errors[name]} />}
            </div>
          );
        }}
      />
    );
  }
}

export default withStyles(theme => ({
  scaffold: {
    width: '100%',
    margin: '8px auto 16px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    minHeight: '40px',
    backgroundColor: theme.colors.white,
    backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path fill="${
      theme.colors.gray300
    }" d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg>')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '24px 24px',
    backgroundPosition: 'right 8px center',
    border: `1px solid ${theme.colors.gray300}`,
    padding: '0 32px 0 8px',
    appearance: 'none', // Reset default Selects for iOS/etc.
    boxShadow: 'none', // Reset default Selects for mozilla

    '&::-ms-expand': {
      display: 'none',
    },

    '&:focus': {
      outline: 'none', // Disable default focus glow
      boxShadow: theme.globalBoxShadow, // Add back focus style
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
  root: {
    '& input': {
      color: 'inherit',
      fontFamily: 'inherit',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '20px',
      border: 'none',
      outline: 'none',
      cursor: 'inherit',
    },
  },
  dropdown: {
    maxHeight: '200px',
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.gray300}`,
    boxShadow: '0 2px 4px 0 rgba(18,24,29,.20)',
    marginTop: '-1px', // force overlapping border with input
    overflowY: 'scroll',
  },
  dropdownItem: {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: '400',
    padding: '8px 12px',
  },
  dropdownItemSelected: {
    fontWeight: '600',
    color: theme.colors.white,
    backgroundColor: theme.colors.secondaryDark,
  },
  dropdownItemActive: {
    fontWeight: '600',
    color: theme.colors.white,
    backgroundColor: theme.colors.secondary,
  },
}))(MultiSelect);
