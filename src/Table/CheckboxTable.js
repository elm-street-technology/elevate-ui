import React, { Component } from "react";
import Table from "./";
import checkboxHOC from "react-table/lib/hoc/selectTable";
import Checkbox from "../Checkbox/UncontrolledCheckbox";
import Button from "../Button";

const WrappedTable = checkboxHOC(Table);
const CheckboxInput = (props) => {
  return (
    <Checkbox
      id={`${props.id}`}
      checked={props.checked}
      onChange={() => {
        props.onClick(props.id, null, props.row);
      }}
      withPadding={false}
    />
  );
};

class CheckboxTable extends Component {
  constructor() {
    super();

    this.state = {
      selection: [],
      selectAll: false,
    };
  }

  toggleSelection = (key, shift, row) => {
    // start off with the existing state
    let selection = [...this.state.selection];
    const keyIndex = selection.indexOf(key);
    // check to see if the key exists
    if (keyIndex >= 0) {
      // it does exist so we will remove it using destructing
      selection = [
        ...selection.slice(0, keyIndex),
        ...selection.slice(keyIndex + 1),
      ];
    } else {
      // it does not exist so add it
      selection.push(key);
    }
    // update the state
    this.setState({ selection });
  };

  toggleAll = () => {
    /*
      Only select ALL the records that are in the current filtered data?

      We'll access our Table's 'ref' and then get the internal state and the 'sortedData'.
      That can then be iterated to get all the currently visible records and set
      the selection state.
    */
    const selectAll = this.state.selectAll ? false : true;
    const selection = [];
    if (selectAll) {
      // we need to get at the internals of ReactTable
      const wrappedInstance = this.checkboxTable.innerTable;
      // the 'sortedData' property contains the currently accessible records based on the filter and sort
      const currentRecords = wrappedInstance.getResolvedState().sortedData;
      // we just push all the IDs onto the selection array
      currentRecords.forEach((item) => {
        selection.push(item._original.id);
      });
    }
    this.setState({ selectAll, selection });
  };

  isSelected = (key) => {
    /*
      Instead of passing our external selection state we provide an 'isSelected'
      callback and detect the selection state ourselves. This allows any implementation
      for selection (either an array, object keys, or even a Javascript Set object).
    */
    return this.state.selection.includes(key);
  };

  renderActionButtons = () => {
    const { actions } = this.props;
    const { selection } = this.state;

    return (
      <div style={{ width: "100%", minHeight: "44px" }}>
        {selection &&
          selection.length > 0 &&
          actions.map((action, i) => (
            <Button
              key={i}
              type="button"
              onClick={() => action.callback(selection)}
            >
              {action.title}
            </Button>
          ))}
      </div>
    );
  };

  render() {
    const { actions, style, ...rest } = this.props;
    const { selectAll } = this.state;

    const checkboxProps = {
      keyField: "id",
      selectAll,
      isSelected: this.isSelected,
      toggleSelection: this.toggleSelection,
      toggleAll: this.toggleAll,
      selectType: "checkbox",
      selectWidth: 36,
      SelectInputComponent: CheckboxInput,
      SelectAllInputComponent: CheckboxInput,
    };

    return (
      <div style={{ width: "100%", ...style }}>
        {actions && actions.length > 0 && this.renderActionButtons()}
        <WrappedTable
          innerRef={(r) => (this.checkboxTable = r)}
          {...checkboxProps}
          {...rest}
        />
      </div>
    );
  }
}

export default CheckboxTable;
