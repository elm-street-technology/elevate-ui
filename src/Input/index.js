import React from "react";
import withStyles from "react-jss";
import classNames from "classnames";

import Scaffold from "../Scaffold";

type Props = {
  classes: Object,
  className: string,
  field: Object,
  form: Object,
  id: string,
  label: string,
  theme: Object,
  type: string,
  withScaffold: boolean,
};

export const RawInput = withStyles((theme) => ({
  root: {
    display: "block",
    width: "100%",
    height: "40px",
    color: theme.typography.bodyColor,
    fontFamily: "inherit",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.gray300}`,
    padding: "8px 12px",
    boxShadow: "none", // Reset default inputs for mozilla
    "-webkit-appearance": "none", // Reset default browser styles
    "-moz-appearance": "none", // Reset default browser styles

    "&:focus": {
      outline: "none", // Disable default focus glow
      boxShadow: theme.globalBoxShadow, // Add back focus style
    },

    "&:disabled": {
      cursor: "not-allowed",
    },
  },
}))(
  ({
    classes,
    className,
    id,
    tabIndex = "0",
    theme, // eslint-disable-line
    type = "text",
    ...rest
  }: Props) => (
    <input
      type={type}
      id={id}
      className={classNames(classes.root, className)}
      tabIndex={tabIndex}
      {...rest}
    />
  )
);

const Input = ({
  className,
  field,
  form: { touched, errors },
  id,
  label,
  type,
  withScaffold = true,
  ...rest
}: Props) =>
  withScaffold && type !== "hidden" ? (
    <Scaffold
      id={id}
      label={label}
      error={touched[field.name] && errors[field.name]}
    >
      <RawInput
        type={type}
        id={id}
        className={className}
        {...field}
        {...rest}
      />
    </Scaffold>
  ) : (
    <RawInput type={type} id={id} className={className} {...field} {...rest} />
  );

export default Input;
