// @flow
import React from "react";
import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import Tooltip from "elevate-ui/Tooltip";
import Button from "elevate-ui/Button";

type $Props = {
  classes: Object,
};

const Tooltips = ({ classes }: $Props) => (
  <Paper>
    <Typography type="heading5" gutterBottom>
      Default Tooltip
    </Typography>
    <Tooltip text="Save your changes and exit...">
      <Button type="button" onClick={() => alert("Button onClick fired")}>
        Save
      </Button>
    </Tooltip>
    <Typography type="heading5" gutterTop gutterBottom>
      Tooltip With Position Prop
    </Typography>
    <div className={classes.tooltipContainer}>
      <Tooltip text="🙌 Great work 🙌" position="right">
        <Button
          type="button"
          isOutlined
          onClick={() => alert("Button onClick fired")}
        >
          Tooltip Right
        </Button>
      </Tooltip>
    </div>
    <div className={classes.tooltipContainer}>
      <Tooltip text="🍻 Cheers! 🍻" position="bottom">
        <Button
          type="button"
          isOutlined
          onClick={() => alert("Button onClick fired")}
        >
          Tooltip Bottom
        </Button>
      </Tooltip>
    </div>
    <div className={classes.tooltipContainer}>
      <Tooltip text="🍕🍕🍕🍕🍕" position="left">
        <Button
          type="button"
          isOutlined
          onClick={() => alert("Button onClick fired")}
        >
          Tooltip Left
        </Button>
      </Tooltip>
    </div>
    <Typography type="heading5" gutterBottom>
      Tooltip On Click
    </Typography>
    <Tooltip clickEnabled text="🗣 You clicked! 🗣">
      <Button type="button" color="secondary">
        Click for tooltip
      </Button>
    </Tooltip>
  </Paper>
);

const styles = () => ({
  tooltipContainer: {
    display: "inline-block",
    marginRight: "10px",
  },
});
export default withStyles(styles, { name: "EUITooltips" })(Tooltips);
