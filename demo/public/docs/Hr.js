import React from "react";
import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import Hr from "elevate-ui/Hr";

const HrExample = (props) => (
  <Paper>
    <Typography type="title">Default</Typography>
    <Hr />
    <Typography type="title">Color Primary</Typography>
    <Hr color="primary" />
    <Typography type="title">Color #000</Typography>
    <Hr color="#000" />
    <Typography type="title">Thickness</Typography>
    <Hr thickness="3px" />
    <Typography type="title">Style Override (margins)</Typography>
    <Hr style={{ marginTop: "48px", marginBottom: "48px" }} />
  </Paper>
);

export default HrExample;
