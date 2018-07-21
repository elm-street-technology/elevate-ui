// @flow
import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "react-jss";
import Paper from "../Paper";
import Icon from "../Icon";

type Props = {
  children: any,
  classes: Object,
  className: string,
  expanded: boolean,
  innerClassName: string,
  theme: Object,
  title: string,
};

type State = {
  expanded: boolean,
};

class ExpandablePanel extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      expanded: props.expanded || false,
    };
  }

  togglePanel = () => {
    this.setState((state) => ({
      expanded: !state.expanded,
    }));
  };

  render() {
    const {
      children,
      classes,
      className,
      innerClassName,
      theme,
      title,
      ...rest
    } = this.props;
    const { expanded } = this.state;

    return (
      <Paper
        className={classNames(classes.root, className)}
        {...rest}
        withPadding={false}
      >
        <button onClick={this.togglePanel}>
          <div>{title}</div>
          <Icon icon="CaretRight" />
        </button>
        {expanded && (
          <div className={classNames(classes.children, innerClassName)}>
            {children}
          </div>
        )}
      </Paper>
    );
  }
}

export default withStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  children: {
    display: "flex",
  },
}))(ExpandablePanel);
