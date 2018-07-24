import React from "react";
import classNames from "classnames";
import withStyles from "react-jss";

import Icon from "../Icon";

type Item = {
  label: string,
  value: string,
};

type Props = {
  classes: Object,
  className: string,
  tag: Item,
  onRemove: Function,
};

const Tag = (props: Props) => {
  const { classes, className, tag, onRemove } = props;
  return (
    <div className={classNames(classes.root, className)}>
      <span className={classes.text}>{tag.label}</span>
      <button
        type="button"
        className={classes.button}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onRemove(tag);
        }}
      >
        <Icon width={18} height={18} icon="Close" />
      </button>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    border: `1px solid ${theme.colors.secondary}`,
    borderRadius: theme.globalBorderRadius,
    margin: "2px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "600",
    color: theme.colors.secondary,
    padding: "2px 2px 2px 8px",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.colors.secondary,
    padding: "2px",
  },
}))(Tag);
