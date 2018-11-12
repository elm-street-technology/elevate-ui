import React, { Component } from "react";
import withStyles from "../withStyles";
import classNames from "classnames";
import UncontrolledCheckbox from "../Checkbox/UncontrolledCheckbox";
import Label from "../Label";
import without from "lodash/without";

type Props = {
  classes: Object,
  /**
   * classNames to be passed to the component.
   */
  className: string,
  display: "inline" | "block",
  field: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  form: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  items: Array<{ label: string, value: string, disabled: boolean }>,
  /**
   * Text input to be used as the label for the checkbox group.
   */
  label: string,
  theme: Object,
};

/**
 * A component used to render a group of checkboxes.
 */
class CheckboxGroup extends Component<Props> {
  static defaultProps = {
    display: "block",
    items: [],
  };

  onChange = (e) => {
    const {
      field: { name, value },
      form: { setFieldValue },
    } = this.props;
    const selectedCheckbox = e.target.id;

    let selectedCheckboxes = Array.isArray(value) ? value.slice() : [];

    if (
      e.target.checked &&
      selectedCheckboxes.indexOf(selectedCheckbox) === -1
    ) {
      selectedCheckboxes.push(selectedCheckbox);
    } else if (!e.target.checked) {
      selectedCheckboxes = without(selectedCheckboxes, selectedCheckbox);
    }

    setFieldValue(name, selectedCheckboxes);
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
            React.cloneElement(<UncontrolledCheckbox />, {
              key: item.value,
              name,
              id: item.value,
              label: item.label,
              checked: value.indexOf(item.value) !== -1,
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

export default withStyles(styles, { name: "EuiCheckboxGroup" })(CheckboxGroup);
