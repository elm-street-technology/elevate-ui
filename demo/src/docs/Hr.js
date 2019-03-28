import React from "react";
import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import Hr from "elevate-ui/Hr";

const HrExample = () => (
  <div>
    <Typography style={{ marginTop: "32px" }} gutterTop type="heading5">
      Default
    </Typography>
    <Paper>
      <Hr />
    </Paper>
    <Typography style={{ marginTop: "32px" }} type="heading5">
      Color #000
    </Typography>
    <Paper>
      <Hr color="#000" />
    </Paper>
    <Typography style={{ marginTop: "32px" }} type="heading5">
      Thickness
    </Typography>
    <Paper>
      <Hr thickness="3px" />
    </Paper>
    <Typography style={{ marginTop: "32px" }} type="heading5">
      Without Gutters
    </Typography>
    <Paper>
      <Hr gutterTop={false} gutterBottom={false} />
    </Paper>
    <Typography style={{ marginTop: "32px" }} type="heading5">
      Style Override
    </Typography>
    <Paper>
      <Hr style={{ borderTop: `1px solid red` }} thickness="4px" />
    </Paper>
  </div>
);

export default HrExample;
