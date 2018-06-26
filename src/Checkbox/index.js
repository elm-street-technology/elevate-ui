import React, { Component } from "react";
import UncontrolledCheckbox from "./UncontrolledCheckbox";

type Props = {
  classes: Object,
  className: string,
  field: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  form: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  options: Array<{ label: string, value: string }>,
  label: string,
  theme: Object,
};

class Checkbox extends Component<Props> {
  onChange = (e) => {
    const {
      field: { name },
      form: { setFieldValue },
    } = this.props;
    setFieldValue(name, e.target.checked);
  };

  render() {
    const { classes, theme, ...rest } = this.props;
    return (
      <UncontrolledCheckbox
        onChange={this.onChange}
        checked={this.props.field.value}
        {...rest}
      />
    );
  }
}

export default Checkbox;
