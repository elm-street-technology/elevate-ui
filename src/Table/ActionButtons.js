import React from "react";
import Button from "../Button";
import withStyles from "react-jss";

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
export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
    minHeight: "60px",
  },
}))(ActionButtons);
