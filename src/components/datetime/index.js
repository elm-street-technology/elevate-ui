// @flow
import React from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';
import ReactDatetime from 'react-datetime';

import Label from '../label';
import Validation from '../validation';

type Props = {
  classes: Object,
  className: string,
  field: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  form: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  id: string,
  label: string,
};

const Datetime = (props: Props) => {
  const {
    classes,
    className,
    field,
    form: { errors, setFieldValue, setFieldTouched, touched },
    id,
    label,
    ...rest
  } = props;
  return (
    <div className={classNames(classes.scaffold, className)}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <ReactDatetime
        id={id}
        className={classes.root}
        inputProps={{ id: id }}
        onBlur={date => setFieldTouched(field.name, date)}
        onChange={date => setFieldValue(field.name, date)}
        {...rest}
      />
      {touched[field.name] &&
        errors[field.name] && <Validation error={errors[field.name]} />}
    </div>
  );
};

export default withStyles(theme => ({
  scaffold: {
    width: '100%',
    margin: '8px auto 16px',
  },
  root: {
    '&.rdt': {
      position: 'relative',
    },
    '& .rdtPicker': {
      display: 'none',
      position: 'absolute',
      width: '250px',
      padding: '4px',
      marginTop: '1px',
      zIndex: '99999 !important',
      background: 'red',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #f9f9f9',
    },
    '&.rdtOpen .rdtPicker': {
      display: 'block',
    },
    '&.rdtStatic .rdtPicker': {
      boxShadow: 'none',
      position: 'static',
    },
    '& .rdtPicker .rdtTimeToggle': {
      textAlign: 'center',
    },

    '& .form-control': {
      display: 'block',
      width: '100%',
      height: '40px',
      color: 'inherit',
      fontFamily: 'inherit',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '20px',
      backgroundColor: theme.colors.white,
      border: `1px solid ${theme.colors.gray300}`,
      padding: '8px 12px',
      appearance: 'none', // Reset default inputs for iOS/etc.
      boxShadow: 'none', // Reset default inputs for mozilla

      '&:focus': {
        outline: 'none', // Disable default focus glow
        boxShadow: theme.globalBoxShadow, // Add back focus style
      },

      '&:disabled': {
        cursor: 'not-allowed',
      },
    },
  },
}))(Datetime);
