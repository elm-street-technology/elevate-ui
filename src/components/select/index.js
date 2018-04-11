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
};

type State = {
  inputValue: string,
};

const itemToString = item => (item ? item.label : '');
class Select extends Component<Props, State> {
  state = {
    inputValue: '',
  };

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
            <input
              className={classes.root}
              {...getInputProps({
                onChange: this.onInputChange,
                onFocus: openMenu,
                value: !isOpen ? value.label : inputValue,
              })}
              onBlur={selection => setFieldTouched(name, selection)}
            />
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
  root: {
    display: 'block',
    width: '100%',
    height: '40px',
    color: 'inherit',
    fontFamily: 'inherit',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '20px',
    backgroundColor: theme.colors.white,
    backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path fill="${
      theme.colors.gray300
    }" d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg>')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '24px 24px',
    backgroundPosition: 'right 8px center',
    border: `1px solid ${theme.colors.gray300}`,
    padding: '10px 36px 10px 12px',
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
