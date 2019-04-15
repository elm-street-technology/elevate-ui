// @flow
import React from "react";
import classNames from "classnames";
import withStyles from "../withStyles";

import Notification from "./Notification";

import type { $Notification } from "./index.js";

type $Props = {
  classes: Object,
  className: string,
  notifications: Array<$Notification>,
};

const Notifications = ({ classes, className, notifications }: $Props) => {
  if (!(notifications && notifications.length)) {
    return null;
  }

  return (
    <div className={classNames(classes.root, className)}>
      {notifications.map((notification) => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

const styles = (theme) => ({
  root: {
    position: "fixed",
    top: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    zIndex: theme.zIndex.notifications || 99,
  },
});

export default withStyles(styles)(Notifications);
