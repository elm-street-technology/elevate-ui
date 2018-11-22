// @flow

import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "../withStyles";

import FeedSection from "./FeedSection";

type $Card = {|
  secondaryActions: Array<{|
    label: any,
    onClick: Function,
  |}>,
  actions: Array<{|
    label: any,
    onClick: Function,
  |}>,
  children: any,
  icon: any,
  title: string,
|};

type $Section = {|
  title: string,
  cards: Array<$Card>,
|};

type $Props = {|
  classes: Object,
  className: string,
  content: Array<$Section>,
|};

class Feed extends Component<$Props> {
  render() {
    const { classes, className, content } = this.props;

    if (!(content && content.length)) {
      return <div>No content found</div>;
    }

    return (
      <div className={classNames(classes.root, className)}>
        {content.map((section, idx) => (
          <FeedSection section={section} key={idx} />
        ))}
      </div>
    );
  }
}

const styles = () => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
});

export default withStyles(styles)(Feed);
