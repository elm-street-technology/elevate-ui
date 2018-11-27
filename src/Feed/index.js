// @flow

import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "../withStyles";

import FeedSection from "./FeedSection";

type $Card = {|
  /**
   * Secondary actions that can be added to the card/feed and appear in the expandable menu.
   */
  secondaryActions?: Array<{|
    label: any,
    onClick: Function,
  |}>,
  /**
   * Primary actions that will be generated as buttons in the footer of the card/feed.
   */
  actions: Array<{|
    label: any,
    onClick: Function,
  |}>,
  /**
   * Content of the card
   */
  children: any,
  /**
   * Icon to appear in the header of the card/feed.
   */
  icon: any,
  /**
   * Title of the card/feed
   */
  title: string,
|};

type $Section = {|
  title: string,
  cards: Array<$Card>,
|};

type $Props = {|
  classes: Object,
  className: string,
  /**
   * Content of the card/feed
   */
  content: Array<$Section>,
|};

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
