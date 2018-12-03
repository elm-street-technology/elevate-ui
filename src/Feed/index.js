// @flow

import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "../withStyles";
import type { $Section } from "./flow-types";

import FeedSection from "./FeedSection";

type $Props = {
  classes: Object,
  className: string,
  /**
   * Content of the card/feed. See Flow Type Definitions for more.
   */
  content: Array<$Section>,
};

/**
 * A card/feed component that accepts primary and secondary actions as well as content.
 */
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
