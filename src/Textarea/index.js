import React from "react";
import classNames from "classnames";
import withStyles from "../withStyles";
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
   * Text that should be passed down to the label element inside of the component.
   */
  label: string,
  theme: Object,
  /**
   * If the scaffold component should be used.
   */
  withScaffold: boolean,
};

/**
 * A component that renders a <textarea> for use in forms.
 */
const Textarea = ({
  classes,
  className,
  field,
  form: { touched, errors },
  id,
  label,
  theme,
  type,
  withScaffold = true,
  ...rest
}: Props) =>
  withScaffold ? (
    <Scaffold
      id={id}
      label={label}
      error={get(touched, field.name) && get(errors, field.name)}
    >
      <textarea
        id={id}
        className={classNames(classes.root, classes.textarea, className)}
        {...field}
        {...rest}
      />
    </Scaffold>
  ) : (
    <textarea
      id={id}
      className={classNames(classes.root, classes.textarea, className)}
      {...field}
      {...rest}
    />
  );

Textarea.defaultProps = {
  tabIndex: "0",
};

const styles = (theme) => ({
  root: {
    display: "block",
    width: "100%",
    height: "auto",
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
  textarea: {
    minHeight: "120px",
    resize: "vertical",
  },
});

export default withStyles(styles, { name: "EuiTextarea" })(Textarea);
