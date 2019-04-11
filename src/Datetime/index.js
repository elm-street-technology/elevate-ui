// @flow

import React from "react";
import withStyles from "../withStyles";
import ReactDatePicker from "react-datepicker";
import classNames from "classnames";
import get from "lodash/get";

import Scaffold from "../Scaffold";

type $Props = {
  classes: Object,
  /**
   * classNames to be passed to the component.
   */
  className: string,
  field: Object,
  form: Object,
  id: string,
  /**
   * Text input to be used as the label for the component.
   */
  label: string,
  theme: Object,
  withScaffold: boolean,
  /**
   * onChange event to fire when a date changes.
   */
  onChange?: Function,
};

/**
 * A Date/Time component for use in forms. The <Datetime /> component is a styled wrapper around React-Datepicker.
 */
const Datetime = ({
  classes,
  className,
  field: { name, value },
  form: { errors, setFieldValue, setFieldTouched, touched },
  id,
  label,
  theme,
  withScaffold = true,
  onChange,
  ...rest
}: $Props) =>
  withScaffold ? (
    <Scaffold
      id={id}
      label={label}
      error={get(touched, name) && get(errors, name)}
    >
      <div className={classNames(classes.root, className)}>
        <ReactDatePicker
          name={name}
          selected={value || null}
          timeFormat="h:mma"
          timeCaption="Time"
          locale="en"
          onBlur={(date) => setFieldTouched(name, date)} // overrides `field.onBlur`
          onChange={(date) => {
            setFieldValue(name, date);
            onChange && onChange(date);
          }}
          {...rest}
        />
      </div>
    </Scaffold>
  ) : (
    <div className={classNames(classes.root, className)}>
      <ReactDatePicker
        selected={value || new Date()}
        timeFormat="h:mma"
        timeCaption="Time"
        locale="en"
        onBlur={(date) => setFieldTouched(name, date)} // overrides `field.onBlur`
        onChange={(date) => {
          setFieldValue(name, date);
          onChange && onChange(date);
        }}
        {...rest}
      />
    </div>
  );

const styles = (theme) => ({
  root: {
    display: "block",
    position: "relative",
    "& .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle, .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow": {
      marginLeft: -8,
      position: "absolute",
    },

    "& .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle, .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before, .react-datepicker__month-read-view--down-arrow::before, .react-datepicker__month-year-read-view--down-arrow::before": {
      boxSizing: "content-box",
      position: "absolute",
      border: "8px solid transparent",
      height: 0,
      width: 1,
    },

    "& .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before, .react-datepicker__month-read-view--down-arrow::before, .react-datepicker__month-year-read-view--down-arrow::before": {
      content: "''",
      zIndex: -1,
      borderWidth: 8,
      left: -8,
      borderBottomColor: "#aeaeae",
    },

    "& .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle": {
      top: 0,
      marginTop: -8,
    },

    "& .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle, .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::before": {
      borderTop: "none",
      borderBottomColor: "#f0f0f0",
    },

    ".react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::before": {
      top: -1,
      borderBottomColor: "#aeaeae",
    },

    "& .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow": {
      bottom: 0,
      marginBottom: -8,
    },

    "& .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before, .react-datepicker__month-read-view--down-arrow::before, .react-datepicker__month-year-read-view--down-arrow::before": {
      borderBottom: "none",
      borderTopColor: theme.colors.white,
    },

    "& .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before, .react-datepicker__month-read-view--down-arrow::before, .react-datepicker__month-year-read-view--down-arrow::before": {
      bottom: -1,
      borderTopColor: "#aeaeae",
    },

    "& .react-datepicker-wrapper": {
      display: "inline-block",
    },

    "& .react-datepicker": {
      fontSize: 14,
      backgroundColor: theme.colors.gray["050"],
      color: theme.colors.black,
      border: `1px solid ${theme.colors.gray["200"]}`,
      borderRadius: theme.globalBorderRadius,
      display: "inline-flex",
      position: "relative",
      boxShadow: theme.shadows[2],
      height: 265,
    },

    "& .react-datepicker--time-only .react-datepicker__triangle": {
      left: 35,
    },

    "& .react-datepicker--time-only .react-datepicker__time-container": {
      borderLeft: 0,
    },

    "& .react-datepicker--time-only .react-datepicker__time": {
      borderRadius: theme.globalBorderRadius,
    },

    "& .react-datepicker--time-only .react-datepicker__time-box": {
      borderRadius: theme.globalBorderRadius,
    },

    "& .react-datepicker__triangle": {
      position: "absolute",
      left: 50,
    },

    "& .react-datepicker-popper": {
      zIndex: theme.zIndex.dropdown,
    },

    "& .react-datepicker-popper[data-placement^='bottom']": {
      marginTop: 10,
    },

    "& .react-datepicker-popper[data-placement^='top']": {
      marginBottom: 10,
    },

    "& .react-datepicker-popper[data-placement^='right']": {
      marginLeft: 8,
    },

    "& .react-datepicker-popper[data-placement^='right'] .react-datepicker__triangle": {
      left: "auto",
      right: 42,
    },

    "& .react-datepicker-popper[data-placement^='left']": {
      marginRight: 8,
    },

    "& .react-datepicker-popper[data-placement^='left'] .react-datepicker__triangle": {
      left: 42,
      right: "auto",
    },

    "& .react-datepicker__header": {
      textAlign: "center",
      backgroundColor: theme.colors.gray["100"],
      borderBottom: `1px solid ${theme.colors.gray["050"]}`,
      paddingTop: 8,
      position: "relative",
    },

    "& .react-datepicker__header--time": {
      paddingBottom: 8,
      paddingLeft: 5,
      paddingRight: 5,
    },

    "& .react-datepicker__year-dropdown-container--select, .react-datepicker__month-dropdown-container--select, .react-datepicker__month-year-dropdown-container--select, .react-datepicker__year-dropdown-container--scroll, .react-datepicker__month-dropdown-container--scroll, .react-datepicker__month-year-dropdown-container--scroll": {
      display: "inline-block",
      margin: "0 2px",
    },

    "& .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header": {
      marginTop: 0,
      color: "#000",
      fontWeight: "bold",
      fontSize: "0.944rem",
    },

    "& .react-datepicker-time__header": {
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },

    "& .react-datepicker__navigation": {
      background: "none",
      lineHeight: "1.7rem",
      textAlign: "center",
      cursor: "pointer",
      position: "absolute",
      top: "10px",
      width: 0,
      padding: 0,
      border: "0.45rem solid transparent",
      zIndex: 1,
      height: "10px",
      width: "10px",
      textIndent: "-999em",
      overflow: "hidden",
    },

    "& .react-datepicker__navigation--previous": {
      left: "10px",
      borderRightColor: "#ccc",
    },

    "& .react-datepicker__navigation--previous:hover": {
      borderRightColor: "#b3b3b3",
    },

    "& .react-datepicker__navigation--previous--disabled, .react-datepicker__navigation--previous--disabled:hover": {
      borderRightColor: "#e6e6e6",
      cursor: "default",
    },

    "& .react-datepicker__navigation--next": {
      right: "10px",
      borderLeftColor: "#ccc",
    },

    "& .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button)": {
      right: "110px",
    },

    "& .react-datepicker__navigation--next:hover": {
      borderLeftColor: "#b3b3b3",
    },

    "& .react-datepicker__navigation--next--disabled, .react-datepicker__navigation--next--disabled:hover": {
      borderLeftColor: "#e6e6e6",
      cursor: "default",
    },

    "& .react-datepicker__navigation--years": {
      position: "relative",
      top: 0,
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },

    "& .react-datepicker__navigation--years-previous": {
      top: "4px",
      borderTopColor: "#ccc",
    },

    "& .react-datepicker__navigation--years-previous:hover": {
      borderTopColor: "#b3b3b3",
    },

    "& .react-datepicker__navigation--years-upcoming": {
      top: "-4px",
      borderBottomColor: "#ccc",
    },

    "& .react-datepicker__navigation--years-upcoming:hover": {
      borderBottomColor: "#b3b3b3",
    },

    "& .react-datepicker__month-container": {
      float: "left",
    },

    "& .react-datepicker__month": {
      margin: "0.4rem",
      textAlign: "center",
    },

    "& .react-datepicker__month .react-datepicker__month-text": {
      display: "inline-block",
      width: "4rem",
    },

    "& .react-datepicker__input-time-container": {
      clear: "both",
      width: "100%",
      float: "left",
      margin: "5px 0 10px 15px",
      textAlign: "left",
    },

    "& .react-datepicker__input-time-container .react-datepicker-time__caption": {
      display: "inline-block",
    },

    "& .react-datepicker__input-time-container .react-datepicker-time__input-container": {
      display: "inline-block",
    },

    "& .react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input": {
      display: "inline-block",
      marginLeft: "10px",
    },

    "& .react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input": {
      width: "85px",
    },

    "& .react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type='time']::-webkit-inner-spin-button, .react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type='time']::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },

    "& .react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type='time']": {
      MozAppearance: "textfield",
    },

    "& .react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__delimiter": {
      marginLeft: "5px",
      display: "inline-block",
    },

    "& .react-datepicker__time-container": {
      float: "right",
      borderLeft: `1px solid ${theme.colors.gray["100"]}`,
      width: "100px",
    },

    "& .react-datepicker__time-container--with-today-button": {
      display: "inline",
      border: `1px solid ${theme.colors.gray["100"]}`,
      position: "absolute",
      right: "-100px",
      top: 0,
    },

    "& .react-datepicker__time-container .react-datepicker__time": {
      position: "relative",
      background: theme.colors.white,
    },

    "& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box": {
      width: "100px",
      overflowX: "hidden",
      margin: "0 auto",
      textAlign: "center",
    },

    "& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list": {
      listStyle: "none",
      margin: 0,
      height: "calc(195px + (1.7rem / 2))",
      overflowY: "scroll",
      paddingRight: 0,
      paddingLeft: 0,
      width: "100%",
      boxSizing: "content-box",
    },

    "& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item": {
      height: "30px",
      padding: "5px 10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    "& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover": {
      cursor: "pointer",
      backgroundColor: "#f0f0f0",
    },

    "& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected": {
      backgroundColor: theme.colors.primary["500"],
      color: theme.colors.white,
      fontWeight: "bold",
    },

    "& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover": {
      backgroundColor: theme.colors.primary["500"],
    },

    "& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled": {
      color: "#ccc",
    },

    "& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover": {
      cursor: "default",
      backgroundColor: "transparent",
    },

    "& .react-datepicker__week-number": {
      color: "#ccc",
      display: "inline-block",
      width: "1.7rem",
      lineHeight: "1.7rem",
      textAlign: "center",
      margin: "0.166rem",
    },

    "& .react-datepicker__week-number.react-datepicker__week-number--clickable": {
      cursor: "pointer",
    },

    "& .react-datepicker__week-number.react-datepicker__week-number--clickable:hover": {
      borderRadius: theme.globalBorderRadius,
      backgroundColor: "#f0f0f0",
    },

    "& .react-datepicker__day-names, .react-datepicker__week": {
      whiteSpace: "nowrap",
    },

    "& .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name": {
      color: "#000",
      display: "inline-block",
      width: "1.7rem",
      lineHeight: "1.7rem",
      textAlign: "center",
      margin: "0.166rem",
    },

    ".react-datepicker__day, .react-datepicker__month-text": {
      cursor: "pointer",
    },

    "& .react-datepicker__day:hover, .react-datepicker__month-text:hover": {
      borderRadius: theme.globalBorderRadius,
      backgroundColor: "#f0f0f0",
    },

    "& .react-datepicker__day--today, .react-datepicker__month-text--today": {
      fontWeight: "bold",
    },

    "& .react-datepicker__day--highlighted, .react-datepicker__month-text--highlighted": {
      borderRadius: theme.globalBorderRadius,
      backgroundColor: "#3dcc4a",
      color: "#fff",
    },

    "& .react-datepicker__day--highlighted:hover, .react-datepicker__month-text--highlighted:hover": {
      backgroundColor: "#32be3f",
    },

    "& .react-datepicker__day--highlighted-custom-1, .react-datepicker__month-text--highlighted-custom-1": {
      color: "magenta",
    },

    "* .react-datepicker__day--highlighted-custom-2, .react-datepicker__month-text--highlighted-custom-2": {
      color: "green",
    },

    "& .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range": {
      borderRadius: theme.globalBorderRadius,
      backgroundColor: theme.colors.primary["500"],
      color: "#fff",
    },

    "& .react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover, .react-datepicker__month-text--selected:hover, .react-datepicker__month-text--in-selecting-range:hover, .react-datepicker__month-text--in-range:hover": {
      backgroundColor: theme.colors.primary["700"],
    },

    "& .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected": {
      borderRadius: theme.globalBorderRadius,
      backgroundColor: theme.colors.primary["500"],
      color: "#fff",
    },

    "& .react-datepicker__day--keyboard-selected:hover, .react-datepicker__month-text--keyboard-selected:hover": {
      backgroundColor: theme.colors.primary["700"],
    },

    "&.react-datepicker__day--in-selecting-range, .react-datepicker__month-text--in-selecting-range": {
      backgroundColor: "rgba(33, 107, 165, 0.5)",
    },

    "& .react-datepicker__month--selecting-range .react-datepicker__day--in-range , .react-datepicker__month--selecting-range .react-datepicker__month-text--in-range": {
      backgroundColor: "#f0f0f0",
      color: "#000",
    },

    "& .react-datepicker__day--disabled, .react-datepicker__month-text--disabled": {
      cursor: "default",
      color: "#ccc",
    },

    "& .react-datepicker__day--disabled:hover, .react-datepicker__month-text--disabled:hover": {
      backgroundColor: "transparent",
    },

    "& .react-datepicker__input-container": {
      position: "relative",
      display: "inline-block",
      "& > input[type=text]": {
        display: "block",
        width: "100%",
        height: "40px",
        color: theme.typography.bodyColor,
        fontFamily: "inherit",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "20px",
        backgroundColor: "#fff",
        border: `1px solid ${theme.colors.gray300}`,
        padding: "8px 12px",
        boxShadow: "none", // Reset default inputs for mozilla
        "-webkit-appearance": "none", // Reset default browser styles
        "-moz-appearance": "none", // Reset default browser styles
      },
    },

    "& .react-datepicker__year-read-view, .react-datepicker__month-read-view, .react-datepicker__month-year-read-view": {
      border: "1px solid transparent",
      borderRadius: theme.globalBorderRadius,
    },

    "& .react-datepicker__year-read-view:hover, .react-datepicker__month-read-view:hover, .react-datepicker__month-year-read-view:hover": {
      cursor: "pointer",
    },

    ".react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow, .react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow": {
      borderTopColor: "#b3b3b3",
    },

    "& .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow": {
      borderTopColor: "#ccc",
      float: "right",
      marginLeft: "20px",
      top: "8px",
      position: "relative",
      borderWidth: "0.45rem",
    },

    "& .react-datepicker__year-dropdown, .react-datepicker__month-dropdown, .react-datepicker__month-year-dropdown": {
      backgroundColor: "#f0f0f0",
      position: "absolute",
      width: "50%",
      left: "25%",
      top: "30px",
      zIndex: 1,
      textAlign: "center",
      borderRadius: theme.globalBorderRadius,
      border: "1px solid #aeaeae",
    },

    ".react-datepicker__year-dropdown:hover, .react-datepicker__month-dropdown:hover, .react-datepicker__month-year-dropdown:hover": {
      cursor: "pointer",
    },

    "& .react-datepicker__year-dropdown--scrollable, .react-datepicker__month-dropdown--scrollable, .react-datepicker__month-year-dropdown--scrollable": {
      height: "150px",
      overflowY: "scroll",
    },

    "& .react-datepicker__year-option, .react-datepicker__month-option, .react-datepicker__month-year-option": {
      lineHeight: "20px",
      width: "100%",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },

    "& .react-datepicker__year-option:first-of-type, .react-datepicker__month-option:first-of-type, .react-datepicker__month-year-option:first-of-type": {
      borderTopLeftRadius: "0.3rem",
      borderTopRightRadius: "0.3rem",
    },

    "& .react-datepicker__year-option:last-of-type, .react-datepicker__month-option:last-of-type, .react-datepicker__month-year-option:last-of-type": {
      userSelect: "none",
      borderBottomLeftRadius: "0.3rem",
      borderBottomRightRadius: "0.3rem",
    },

    "& .react-datepicker__year-option:hover, .react-datepicker__month-option:hover, .react-datepicker__month-year-option:hover": {
      backgroundColor: "#ccc",
    },

    "& .react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming, .react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming, .react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming": {
      borderBottomColor: "#b3b3b3",
    },

    "& .react-datepicker__year-option:hover .react-datepicker__navigation--years-previous, .react-datepicker__month-option:hover .react-datepicker__navigation--years-previous, .react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous": {
      borderTopColor: "#b3b3b3",
    },

    "& .react-datepicker__year-option--selected, .react-datepicker__month-option--selected, .react-datepicker__month-year-option--selected": {
      position: "absolute",
      left: "15px",
    },

    "& .react-datepicker__close-icon": {
      backgroundColor: "transparent",
      border: 0,
      cursor: "pointer",
      outline: 0,
      padding: 0,
      verticalAlign: "middle",
      position: "absolute",
      height: 16,
      width: 16,
      top: "25%",
      right: 7,
    },

    "& .react-datepicker__close-icon::after": {
      backgroundColor: theme.colors.primary["500"],
      borderRadius: "50%",
      bottom: 0,
      boxSizing: "border-box",
      color: "#fff",
      content: "'X'",
      cursor: "pointer",
      fontSize: 12,
      height: 16,
      width: 16,
      lineHeight: 1,
      margin: "-8px auto 0",
      padding: 2,
      position: "absolute",
      right: 0,
      textAlign: "center",
    },

    "& .react-datepicker__today-button": {
      background: "#f0f0f0",
      borderTop: "1px solid #aeaeae",
      cursor: "pointer",
      textAlign: "center",
      fontWeight: "bold",
      padding: "5px 0",
      clear: "left",
    },

    "& .react-datepicker__portal": {
      position: "fixed",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      left: 0,
      top: 0,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      zIndex: 2147483647,
    },

    "& .react-datepicker__portal .react-datepicker__day-name, .react-datepicker__portal .react-datepicker__day, .react-datepicker__portal .react-datepicker__time-name": {
      width: "3rem",
      lineHeight: "3rem",
    },

    "& @media (max-width: 400px), (max-height: 550px)": {
      "&.react-datepicker__portal .react-datepicker__day-name, .react-datepicker__portal .react-datepicker__day, .react-datepicker__portal .react-datepicker__time-name": {
        width: "2rem",
        lineHeight: "2rem",
      },
    },

    "& .react-datepicker__portal .react-datepicker__current-month, .react-datepicker__portal .react-datepicker-time__header": {
      fontSize: "1.44rem",
    },

    "& .react-datepicker__portal .react-datepicker__navigation": {
      border: " 0.81rem solid transparent",
    },

    "& .react-datepicker__portal .react-datepicker__navigation--previous": {
      borderRightColor: "#ccc",
    },

    "& .react-datepicker__portal .react-datepicker__navigation--previous:hover": {
      borderRightColor: "#b3b3b3",
    },

    "& .react-datepicker__portal .react-datepicker__navigation--previous--disabled, .react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover": {
      borderRightColor: "#e6e6e6",
      cursor: "default",
    },

    "& .react-datepicker__portal .react-datepicker__navigation--next": {
      borderLeftColor: "#ccc",
    },

    "& .react-datepicker__portal .react-datepicker__navigation--next:hover": {
      borderLeftColor: "#b3b3b3",
    },

    "& .react-datepicker__portal .react-datepicker__navigation--next--disabled, .react-datepicker__portal .react-datepicker__navigation--next--disabled:hover": {
      borderLeftColor: "#e6e6e6",
      cursor: "default",
    },
  },
});

export default withStyles(styles, { name: "EuiDatetime" })(Datetime);
