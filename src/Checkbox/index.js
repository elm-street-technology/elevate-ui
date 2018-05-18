import React, { Component } from "react";
import withStyles from "react-jss";
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
    const { field: { name }, form: { setFieldValue } } = this.props;
    setFieldValue(name, e.target.checked);
  };

  render() {
    return (
      <UncontrolledCheckbox
        onChange={this.onChange}
        checked={this.props.field.value}
        {...this.props}
      />
    );
  }
}

export default withStyles((theme) => ({
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
}))(Checkbox);
