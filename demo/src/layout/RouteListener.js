// @flow
import { Component } from "react";
import { withRouter } from "react-router-dom";
import type { ContextRouter } from "react-router-dom";

type Props = {
  children: any,
  onSubmit: Function,
  ...ContextRouter,
};
type State = {};

class RouteListener extends Component<Props, State> {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(RouteListener);
