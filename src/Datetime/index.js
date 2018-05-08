// @flow
import React from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';
import ReactDatetime from 'react-datetime';

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

const Datetime = ({
  classes,
  className,
  field,
  form: { errors, setFieldValue, setFieldTouched, touched },
  id,
  label,
  theme,
  ...rest
}: Props) => (
  <div className={classNames(classes.scaffold, className)}>
    {label && <Label htmlFor={id}>{label}</Label>}
    <ReactDatetime
      className={classes.rdt}
      inputProps={{ id: id, className: classes.input, autoComplete: 'off' }}
      {...field} // contains name, value, onBlur, onChange
      onBlur={date => setFieldTouched(field.name, date)} // overrides `field.onBlur`
      onChange={date => setFieldValue(field.name, date)} // overrides `field.onChange`
      {...rest}
    />
    {touched[field.name] &&
      errors[field.name] && <Validation error={errors[field.name]} />}
  </div>
);

export default withStyles(theme => ({
  scaffold: {
    width: '100%',
    margin: '8px auto 16px',
  },
  input: {
    display: 'block',
    width: '100%',
    height: '40px',
    color: theme.typography.bodyColor,
    fontFamily: 'inherit',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '20px',
    backgroundColor: theme.colors.white,
    backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="${
      theme.colors.gray300
    }" d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '24px 24px',
    backgroundPosition: 'right 8px center',
    border: `1px solid ${theme.colors.gray300}`,
    padding: '8px 36px 8px 12px',
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
  rdt: {
    '&.rdt': {
      position: 'relative',
    },
    '& .rdtPicker': {
      display: 'none',
      position: 'absolute',
      width: '250px',
      padding: '4px',
      marginTop: '6px',
      zIndex: '99999 !important',
      backgroundColor: theme.colors.white,
      border: `1px solid ${theme.colors.gray300}`,
      boxShadow: theme.globalBoxShadow,
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
    '& .rdtPicker table': {
      width: '100%',
      margin: '0',
    },
    '& .rdtPicker td, & .rdtPicker th': {
      verticalAlign: 'middle',
      textAlign: 'center',
      height: '28px',
    },
    '& .rdtPicker td': {
      cursor: 'pointer',
    },
    '& .rdtPicker td.rdtDay:hover, & .rdtPicker td.rdtHour:hover, & .rdtPicker td.rdtMinute:hover, & .rdtPicker td.rdtSecond:hover, & .rdtPicker .rdtTimeToggle:hover': {
      background: '#eeeeee',
      cursor: 'pointer',
    },
    '& .rdtPicker td.rdtOld, & .rdtPicker td.rdtNew,': {
      color: '#999999',
    },

    '& .rdtPicker td.rdtToday': {
      position: 'relative',
    },
    '& .rdtPicker td.rdtToday:before': {
      content: "''",
      display: 'inline-block',
      borderLeft: '7px solid transparent',
      borderBottom: `7px solid ${theme.colors.secondary}`,
      borderTopColor: 'rgba(0, 0, 0, 0.2)',
      position: 'absolute',
      bottom: '4px',
      right: '4px',
    },
    '& .rdtPicker td.rdtActive, & .rdtPicker td.rdtActive:hover': {
      backgroundColor: theme.colors.secondary,
      color: '#fff',
      textShadow: '0 -1px 0 rgba(0, 0, 0, 0.25)',
    },
    '& .rdtPicker td.rdtActive.rdtToday:before': {
      borderBottomColor: '#fff',
    },
    '& .rdtPicker td.rdtDisabled, & .rdtPicker td.rdtDisabled:hover, & .rdtPicker td span.rdtDisabled, & .rdtPicker td span.rdtDisabled:hover': {
      background: 'none',
      color: '#999999',
      cursor: 'not-allowed',
    },
    '& .rdtPicker td span.rdtOld': {
      color: '#999999',
    },
    '& .rdtPicker thead tr:first-child th': {
      cursor: 'pointer',
    },
    '& .rdtPicker thead tr:first-child th:hover': {
      background: '#eeeeee',
    },
    '& .rdtPicker .dow': {
      width: '14.2857%',
      borderBottom: 'none',
      cursor: 'default',
    },
    '.rdtPicker th.rdtSwitch': {
      width: '100px',
    },
    '& .rdtPicker th.rdtNext, & .rdtPicker th.rdtPrev': {
      fontSize: '24px',
      verticalAlign: 'top',
    },
    '& .rdtPrev span, & .rdtNext span': {
      display: 'block',
      userSelect: 'none',
    },
    '& .rdtPicker th.rdtDisabled, & .rdtPicker th.rdtDisabled:hover': {
      background: 'none',
      color: '#999999',
      cursor: 'not-allowed',
    },
    '& .rdtPicker tfoot': {
      borderTop: `1px solid #f9f9f9`,
      paddingTop: '4px',
    },
    '& .rdtPicker button': {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
    },
    '& .rdtPicker button:hover': {
      backgroundColor: '#eee',
    },
    '& .rdtPicker thead button': {
      width: '100%',
      height: '100%',
    },
    '& td.rdtMonth, & td.rdtYear': {
      height: '50px',
      width: '25%',
      cursor: 'pointer',
    },
    '& td.rdtMonth:hover, & td.rdtYear:hover': {
      background: '#eee',
    },
    '& .rdtCounters': {
      display: 'inline-block',
    },

    '& .rdtCounters > div': {
      float: 'left',
    },
    '& .rdtCounter': {
      width: '40px',
      height: '100px',
    },
    '& .rdtCounterSeparator': {
      lineHeight: '100px',
    },
    '& .rdtCounter .rdtBtn': {
      height: '40%',
      lineHeight: '40px',
      cursor: 'pointer',
      display: 'block',
      userSelect: 'none',
    },
    '& .rdtCounter .rdtBtn:hover': {
      background: '#eee',
    },
    '& .rdtCounter .rdtCount': {
      height: '20%',
      fontSize: '1.2em',
    },
    '& .rdtMilli': {
      verticalAlign: 'middle',
      paddingLeft: '8px',
      width: '48px',
    },
    '& .rdtMilli input': {
      width: '100%',
      fontSize: '1.2em',
      marginTop: '37px',
    },
    '& .rdtTime td': {
      cursor: 'default',
    },
  },
}))(Datetime);
