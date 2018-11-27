// @flow
export type $Card = {
  /**
   * Secondary actions that can be added to the card/feed and appear in the expandable menu.
   */
  secondaryActions: Array<{
    label: string,
    onClick: Function,
    color?: string,
    isOutlined?: boolean,
    icon?: any,
  }>,
  /**
   * Primary actions that will be generated as buttons in the footer of the card/feed.
   */
  actions: Array<{
    label: any,
    onClick: Function,
  }>,
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
};

export type $Section = {
  title: string,
  cards: Array<$Card>,
};
