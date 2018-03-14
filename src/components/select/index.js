import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classNames from 'classnames';

import Label from '../label';
import Validation from '../validation';
import caret from './caret.svg';

const Select = ({
  id,
  label,
  error,
  value,
  onChange,
  children,
  classes,
  className,
  ...props
}) => {
  return (
    <div className={classNames(classes.scaffold, className)}>
      {label && (
        <Label htmlFor={id} error={error}>
          {label}
        </Label>
      )}
      <select
        id={id}
        className={classNames(classes.root, classes.select)}
        value={value}
        onChange={onChange}
        {...props}
      >
        {children}
      </select>
      {error && <Validation error={error} />}
    </div>
  );
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  value: PropTypes.string,
};

Select.defaultProps = {
  tabIndex: '0',
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
  select: {
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${caret})`,
    backgroundSize: '24px 24px',
    backgroundPosition: 'right 8px center',
    borderRadius: '0px',
    padding: '10px 36px 10px 12px',

    '::-ms-expand': {
      display: 'none',
    },
  },
}))(Select);
