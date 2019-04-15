// @flow
import React from "react";
import classNames from "classnames";
import withStyles from "../withStyles";

import ThumbUp from "elevate-ui-icons/ThumbUp";
import ErrorOutline from "elevate-ui-icons/ErrorOutline";

type $Props = {
  classes: Object,
  className: string,
  notification: Object,
};

const iconMap = {
  error: <ErrorOutline />,
  info: <ErrorOutline />,
  success: <ThumbUp />,
  warning: <ErrorOutline />,
};

const Notification = ({
  classes,
  className,
  notification: { message, title, type },
}: $Props) => (
  <div className={classNames(classes.root, classes[type], className)}>
    {iconMap[type] && <div className={classes.icon}>{iconMap[type]}</div>}
    <div className={classes.messageContainer}>
      <div className={classes.title}>{title}</div>
      <div className={classes.message}>{message}</div>
    </div>
  </div>
);

const styles = (theme) => ({
  "@keyframes slideIn": {
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(0)" },
  },

  root: {
    display: "flex",
    alignItems: "center",
    width: "280px",
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    padding: "16px 12px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.06)",
    borderRadius: "6px",
    borderLeftWidth: "6px",
    borderLeftStyle: "solid",
    margin: "8px",
    animationName: "slideIn",
    animationDuration: "600ms",
    transition: theme.transitions["default"],
  },

  error: {
    borderLeftColor: theme.colors.primary["800"],
  },

  info: {
    borderLeftColor: theme.colors.tertiary["700"],
  },

  warning: {
    borderLeftColor: theme.colors.yellow["600"],
  },

  success: {
    borderLeftColor: theme.colors.green["700"],
  },

  icon: {
    color: "#B3BAC1",
    marginRight: "12px",
  },

  title: {
    fontWeight: 600,
    fontSize: "16px",
    letterSpacing: ".45px",
    color: "#4b565f",
    paddingBottom: "4px",
  },

  message: {
    fontSize: "14px",
    color: "#60686F",
    letterSpacing: ".45px",
  },
});

export default withStyles(styles)(Notification);
