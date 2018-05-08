import React from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';

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
  type: string,
};

const Input = ({
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
    <input type={type} id={id} className={classes.root} {...field} {...rest} />
    {touched[field.name] &&
      errors[field.name] && <Validation error={errors[field.name]} />}
  </div>
);

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
