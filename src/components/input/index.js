import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classNames from 'classnames';

import Label from '../label';
import Validation from '../validation';

const Input = ({
  classes,
  className,
  field,
  form: { touched, errors },
  id,
  label,
  theme,
  type,
  ...props
}) => {
  return (
    <div className={classNames(classes.scaffold, className)}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input
        id={id}
        className={classes.root}
        type={type}
        {...field}
        {...props}
      />
      {touched[field.name] &&
        errors[field.name] && <Validation error={errors[field.name]} />}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.object,
  id: PropTypes.string.isRequired,
  label: PropTypes.any,
  name: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  tabIndex: '0',
  type: 'text',
};

export default withStyles(theme => ({
  scaffold: {
    width: '100%',
    margin: '8px auto 16px',
  },
  root: {
    display: 'block',
    width: '100%',
    height: '40px',
    color: theme.typography.bodyColor,
    fontFamily: 'inherit',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '20px',
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.gray300}`,
    padding: '8px 12px',
    boxShadow: 'none', // Reset default inputs for mozilla
    '-webkit-appearance': 'none', // Reset default browser styles
    '-moz-appearance': 'none', // Reset default browser styles

    '&:focus': {
      outline: 'none', // Disable default focus glow
      boxShadow: theme.globalBoxShadow, // Add back focus style
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
}))(Input);
