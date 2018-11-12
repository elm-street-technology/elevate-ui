import React from "react";
import Button from "../Button";
import withStyles from "../withStyles";

const ActionButtons = ({ actions, classes, selection }) => (
  <div className={classes.root}>
    {selection &&
      selection.length > 0 &&
      actions.map((action, i) => (
        <Button
          key={i}
          type="button"
          onClick={() => action.callback(selection)}
        >
          {action.title}
        </Button>
      ))}
  </div>
);

// eslint-disable-next-line
const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
    minHeight: "60px",
  },
});

export default withStyles(styles, { name: "EuiActionButtons" })(ActionButtons);
