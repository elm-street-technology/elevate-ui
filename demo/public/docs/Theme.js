import React from "react";
import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";

const Theme = ({ classes, className, theme }) => (
  console.log(theme),
  (
    <Paper>
      <Typography type="title">{`<ThemeProvider />`}</Typography>
    </Paper>
  )
);

export default withStyles((theme) => ({}))(Theme);
