import React, { Component } from "react";
import withStyles from "react-jss";
import classNames from "classnames";
import Radio from "./Radio";
import Label from "../Label";

type Props = {
  classes: Object,
  /**
   * Accepts any classNames to be passed down to the component.
   */
  className: string,
  /**
   * Display type for the component. Can be "inline" or "block"
   */
  display: "inline" | "block",
  field: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  form: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  items: Array<{ label: string, value: string, disabled: boolean }>,
  /**
   * Label text to be passed down to the component.
   */
  label: string,
  theme: Object,
};

/**
 * A component that renders a group of radio buttons for use in forms.
 */
class RadioGroup extends Component<Props> {
  static defaultProps = {
    display: "block",
    items: [],
  };

  onChange = (e) => {
    const {
      field: { name },
      form: { setFieldValue },
    } = this.props;

    if (e.target.checked) {
      const selectedRadio = e.target.id;
      setFieldValue(name, selectedRadio);
    }
  };

  render() {
    const {
      label,
      items,
      classes,
      display,
      field: { name, value },
    } = this.props;
    return (
      <div className={classes.scaffold}>
        {label && <Label>{label}</Label>}
        <div
          className={classNames(
            classes.toggles,
            display === "inline" && classes.inline
          )}
        >
          {items.map((item) =>
            React.cloneElement(<Radio />, {
              key: item.value,
              name,
              id: item.value,
              label: item.label,
              checked: value === item.value,
              value: item.value,
              onChange: this.onChange,
              disabled: item.disabled || false,
            })
          )}
        </div>
      </div>
    );
  }
}

const styles = () => ({
  scaffold: {
    margin: "8px auto 16px",
  },
  toggles: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginLeft: "-12px",
  },
  inline: {
    flexDirection: "row",
  },
});

export default withStyles(styles, { name: "EuiRadioGroup" })(RadioGroup);
