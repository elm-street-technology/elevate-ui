import React from "react";
import withStyles from "react-jss";
import classNames from "classnames";
import get from "lodash/get";

import Scaffold from "../Scaffold";

type Props = {
  classes: Object,
  /**
   * Accepts any classNames to be passed down to the component.
   */
  className: string,
  field: Object,
  form: Object,
  id: string,
  /**
   * Text input to be used as the label for inside the component.
   */
  label: string,
  theme: Object,
  /**
   * Input type to be used.
   */
  type: string,
  /**
   * Use the scaffold for the input or if the input should just be the raw input.
   */
  withScaffold: boolean,
};

/**
 * Standard form input component.
 */
const Input = ({
  classes,
  className,
  field,
  form: { touched, errors },
  id,
  label,
  tabIndex = "0",
  theme,
  type = "text",
  withScaffold = true,
  ...rest
}: Props) =>
  withScaffold && type !== "hidden" ? (
    <Scaffold
      id={id}
      label={label}
      error={get(touched, field.name) && get(errors, field.name)}
    >
      <input
        type={type}
        id={id}
        className={classNames(classes.root, className)}
        tabIndex={tabIndex}
        {...field}
        {...rest}
      />
    </Scaffold>
  ) : (
    <input
      type={type}
      id={id}
      className={classNames(classes.root, className)}
      tabIndex={tabIndex}
      {...field}
      {...rest}
    />
  );

const styles = (theme) => ({
  root: {
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

    "&:focus": {
      outline: "none", // Disable default focus glow
      boxShadow: theme.globalBoxShadow, // Add back focus style
    },

    "&:disabled": {
      cursor: "not-allowed",
    },
  },
});

export default withStyles(styles, { name: "EuiInput" })(Input);
