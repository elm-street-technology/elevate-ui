import React, { Component } from "react";
import withStyles from "react-jss";

type Props = {
  isOpen: boolean,
  className: string,
};

class AccordionContents extends Component<Props> {
  render() {
    const { isOpen, className, classes, ...props } = this.props;
    const height = !isOpen ? 0 : null;
    return (
      <div
        className={className}
        style={{ overflowY: "hidden", maxHeight: height }}
        {...props}
      />
    );
  }
}

export default withStyles(() => {})(AccordionContents);
