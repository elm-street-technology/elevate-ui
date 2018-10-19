// @flow
import React, { Component } from "react"; // eslint-disable-line

type Props = {
  children: any,
  onStateChange?: Function,
  openIndexes?: Array<number>,
  stateReducer?: Function,
};

type State = {
  openIndexes: Array<number>,
};

class BaseAccordion extends Component<Props, State> {
  static defaultProps = {
    onStateChange: () => {},
    stateReducer: (state: Object, changes: Function | Object) => changes,
  };

  state = {
    openIndexes: [0],
  };

  getState(state: State = this.state) {
    return {
      openIndexes:
        this.props.openIndexes === undefined
          ? state.openIndexes
          : this.props.openIndexes,
    };
  }

  internalSetState(changes: Function | Object, callback: Function = () => {}) {
    const { onStateChange, stateReducer } = this.props;
    let allChanges: Object;
    this.setState(
      (state) => {
        const actualState = this.getState(state);
        const changesObject =
          typeof changes === "function" ? changes(actualState) : changes;
        if (stateReducer) {
          allChanges = stateReducer(actualState, changesObject);
        }
        return allChanges;
      },
      () => {
        if (onStateChange) {
          onStateChange(allChanges);
        }
        callback();
      }
    );
  }

  handleItemClick = (index: number) => {
    this.internalSetState((state: State) => {
      const closing = state.openIndexes.includes(index);
      return {
        type: closing ? "closing" : "opening",
        openIndexes: closing
          ? state.openIndexes.filter((i) => i !== index)
          : [...state.openIndexes, index],
      };
    });
  };

  render() {
    return this.props.children({
      openIndexes: this.getState().openIndexes,
      handleItemClick: this.handleItemClick,
    });
  }
}

export default BaseAccordion;
