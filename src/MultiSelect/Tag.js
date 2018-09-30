import React from "react";
import classNames from "classnames";
import withStyles from "react-jss";

import Close from "elevate-ui-icons/Close";

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
        <Close size={18} />
      </button>
    </div>
  );
};

const styles = (theme) => ({
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
});

export default withStyles(styles, { name: "EuiTag" })(Tag);
