// @flow
import React, { Component } from "react";

type Props = {
  isOpen: boolean,
  style?: Object,
};

class AccordionContents extends Component<Props> {
  render() {
    const { isOpen, style, ...props } = this.props;
    const height = !isOpen ? 0 : null;

    if (!isOpen) {
      return null;
    }

    return (
      <div
        style={{
          overflowY: "hidden",
          maxHeight: height,
          ...style,
        }}
        {...props}
      />
    );
  }
}

export default AccordionContents;
