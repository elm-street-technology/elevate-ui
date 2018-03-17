import React from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';
import Downshift from 'downshift';

import Label from '../label';
import Validation from '../validation';
import caret from './caret.svg';

const SelectDownshift = ({
  classes,
  className,
  field: { name, value },
  form: { touched, errors, setFieldValue, setFieldTouched },
  items = [],
  label,
  ...props
}) => {
  const error = errors[name];
  return (
    <Downshift
      onChange={selection => setFieldValue(name, selection)}
      selectedItem={value}
      render={({
        getInputProps,
        getItemProps,
        getLabelProps,
        isOpen,
        inputValue,
        highlightedIndex,
        openMenu,
        selectedItem,
      }) => (
        <div className={classNames(classes.scaffold, className)}>
          {label && (
            <Label error={error} {...getLabelProps()}>
              {label}
            </Label>
          )}
          <input
            className={classes.root}
            {...getInputProps({
              onFocus: openMenu,
            })}
            onBlur={selection => setFieldTouched(name, selection)}
          />
          {isOpen && (
            <div className={classes.dropdown}>
              {items
                .filter(i => !inputValue || i.value.includes(inputValue))
                .map((item, index) => (
                  <div
                    className={classNames({
                      [classes.dropdownItem]: true,
                      [classes.dropdownItemActive]: highlightedIndex === index,
                    })}
                    {...getItemProps({
                      key: item.value,
                      index,
                      item: item.value,
                    })}
                  >
                    {item.label}
                  </div>
                ))}
            </div>
          )}
          {error && <Validation error={error} />}
        </div>
      )}
    />
  );
};

export default withStyles(theme => ({
  scaffold: {
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
    backgroundImage: `url(${caret})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '24px 24px',
    backgroundPosition: 'right 8px center',
    border: `1px solid ${theme.colors.gray300}`,
    padding: '10px 40px 10px 16px',
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
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.gray300}`,
    boxShadow: '0 2px 4px 0 rgba(18,24,29,.20)',
    marginTop: '-1px', // force overlapping border with input
  },
  dropdownItem: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '20px',
    padding: '8px',
  },
  dropdownItemActive: {
    fontWeight: '600',
    color: theme.colors.white,
    backgroundColor: theme.colors.secondary,
  }
}))(SelectDownshift);
