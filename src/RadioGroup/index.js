import React, { Component } from "react";
import withStyles from "react-jss";
import classNames from "classnames";
import Radio from "./Radio";
import Label from "../Label";

type Props = {
  classes: Object,
  className: string,
  display: "inline" | "block",
  field: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  form: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  options: Array<{ label: string, value: string }>,
  label: string,
  theme: Object,
};

class RadioGroup extends Component<Props> {
  static defaultProps = {
    display: "block",
    options: [],
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
      options,
      classes,
      display,
      field: { value },
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
          {options.map((option) =>
            React.cloneElement(<Radio />, {
              key: option.value,
              id: option.value,
              label: option.label,
              checked: value === option.value,
              onChange: this.onChange,
              disabled: option.disabled,
            })
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(() => ({
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
}))(RadioGroup);
