// @flow
import React, { Component } from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';
import Downshift from 'downshift';

import Label from '../label';
import Validation from '../validation';

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
  theme: Object,
};

type State = {
  inputValue: string,
};

const itemToString = item => (item ? item.label : '');
class Select extends Component<Props, State> {
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
      this.onItemSelect(changes.selectedItem);
    }
  };

  onInputChange = e => {
    const inputValue = e.target.value;
    this.setState({ inputValue });
  };

  onItemSelect = item => {
    const { field: { name }, form: { setFieldValue } } = this.props;
    setFieldValue(name, item);
  };

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

  renderArrowIcon(isOpen) {
    const { classes, theme: { colors } } = this.props;
    return (
      <svg
        className={classes.arrow}
        width={24}
        height={24}
        viewBox="0 0 1792 1792"
        transform={isOpen ? 'rotate(180)' : null}
      >
        <path
          fill={colors.gray300 || 'currentColor'}
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
    } = this.props;
    const { inputValue } = this.state;

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
          selectedItem,
        }) => (
          <div className={classNames(classes.scaffold, className)}>
            {label && <Label {...getLabelProps()}>{label}</Label>}
            <div
              ref={this.inputWrapperRef}
              className={classes.wrapper}
              onClick={this.onWrapperClick}
            >
              <input
                className={classes.root}
                {...getInputProps({
                  ref: this.inputRef,
                  onChange: this.onInputChange,
                  onFocus: openMenu,
                  value: !isOpen ? value.label : inputValue,
                })}
                onBlur={selection => setFieldTouched(name, selection)}
              />
              {this.renderArrowIcon(isOpen)}
            </div>
            {isOpen && (
              <div className={classes.dropdown}>
                {items
                  .filter(
                    i =>
                      !inputValue ||
                      i.label.toLowerCase().includes(inputValue.toLowerCase())
                  )
                  .map((item, index) => (
                    <div
                      key={item.value}
                      className={classNames({
                        [classes.dropdownItem]: true,
                        [classes.dropdownItemActive]:
                          highlightedIndex === index,
                        [classes.dropdownItemSelected]: selectedItem === item,
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
        )}
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    minHeight: '40px',
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.gray300}`,
    padding: '0 8px',
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
    color: 'inherit',
    fontFamily: 'inherit',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '20px',
    border: 'none',
    outline: 'none',
    cursor: 'inherit',
  },
  arrow: {
    flexShrink: '0',
    display: 'block',
    marginLeft: 'auto',
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
  dropdownItemActive: {
    fontWeight: '600',
    color: theme.colors.white,
    backgroundColor: theme.colors.secondary,
  },
  dropdownItemSelected: {
    fontWeight: '600',
    color: theme.colors.white,
    backgroundColor: theme.colors.secondaryDark,
  },
}))(Select);
