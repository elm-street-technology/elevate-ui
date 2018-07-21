import React from "react";

import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import ExpandablePanel from "elevate-ui/ExpandablePanel";

const ExpandablePanels = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <Paper>
    <Typography type="title">{`<Button />`}</Typography>
    <ExpandablePanel title="Testing 123">Hello</ExpandablePanel>
  </Paper>
);

export default ExpandablePanels;
