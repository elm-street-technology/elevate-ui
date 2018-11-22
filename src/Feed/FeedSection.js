// @flow

import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "../withStyles";
import Typography from "../Typography";
import Card from "../Card";

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

type $Props = {|
  classes: Object,
  className: string,
  section: {|
    title: string,
    fetch?: Function,
    cards?: Array<$Card>,
    filters?: Object,
  |},
|};

type $State = {|
  isLoading: boolean,
  filters: { limit: number, offset: number },
  cards: Array<$Card>,
|};

class FeedSection extends Component<$Props, $State> {
  constructor(props: $Props) {
    super(props);
    this.state = {
      isLoading: !!(props.section.fetch && !props.section.cards),
      filters: props.section.filters || { limit: 10, offset: 0 },
      cards: props.section.cards || [],
    };

    if (props.section.fetch) {
      this.fetchCards(this.state.filters);
    }
  }

  fetchCards(filters: Object) {
    const fetch = this.props.section.fetch;
    if (fetch) {
      this.setState({ isLoading: true });
      fetch(filters)
        .then(({ cards }) => {
          this.setState({
            cards: this.state.cards.concat(cards),
            isLoading: false,
          });
        })
        .catch(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    const { isLoading, cards } = this.state;
    const {
      classes,
      className,
      section: { title },
    } = this.props;

    return (
      <div className={classNames(classes.root, className)}>
        <Typography type="heading3" gutterBottom>
          {title}
          {isLoading ? " (loading...)" : null}
        </Typography>
        <div className={classes.cards}>
          {cards.map((card, idx) => (
            <Card {...card} key={idx} />
          ))}
        </div>
      </div>
    );
  }
}

const styles = () => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: "16px",
  },
  cards: {
    display: "flex",
  },
});

export default withStyles(styles)(FeedSection);
