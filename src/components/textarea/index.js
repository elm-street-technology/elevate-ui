import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classNames from 'classnames';

import Label from '../label';
import Validation from '../validation';

const Textarea = ({
  id,
  label,
  error,
  value,
  onChange,
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
      <textarea
        id={id}
        className={classNames(classes.root, classes.textarea)}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <Validation error={error} />}
    </div>
  );
};

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  value: PropTypes.string,
};

Textarea.defaultProps = {
  tabIndex: '0',
};

export default withStyles(theme => ({
  scaffold: {
    width: '100%',
    margin: '8px auto 16px',
  },
  root: {
    display: 'block',
    width: '100%',
    minHeight: '120px',
    resize: 'vertical',
    color: theme.typography.bodyColor,
    fontFamily: 'inherit',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.gray300}`,
    padding: '10px 12px',
    appearance: 'none', // Reset default Textareas for iOS/etc.
    boxShadow: 'none', // Reset default Textareas for mozilla

    '&:focus': {
      outline: 'none', // Disable default focus glow
      boxShadow: theme.globalBoxShadow, // Add back focus style
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
  textarea: {
    minHeight: '120px',
    resize: 'vertical',
  },
}))(Textarea);
