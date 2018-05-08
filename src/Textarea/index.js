import React from 'react';
import classNames from 'classnames';
import withStyles from 'react-jss';

import Label from '../Label';
import Validation from '../Validation';

type Props = {
  classes: Object,
  className: string,
  field: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  form: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  id: string,
  label: string,
  theme: Object,
};

const Textarea = ({
  classes,
  className,
  field,
  form: { touched, errors },
  id,
  label,
  theme,
  type,
  ...rest
}: Props) => (
  <div className={classNames(classes.scaffold, className)}>
    {label && <Label htmlFor={id}>{label}</Label>}
    <textarea
      id={id}
      className={classNames(classes.root, classes.textarea)}
      {...field}
      {...rest}
    />
    {touched[field.name] &&
      errors[field.name] && <Validation error={errors[field.name]} />}
  </div>
);

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
    height: 'auto',
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
  textarea: {
    minHeight: '120px',
    resize: 'vertical',
  },
}))(Textarea);
