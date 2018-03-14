import React from 'react';

import Paper from '../../../src/components/paper';
import Typography from '../../../src/components/typography';

const ButtonExample = ({
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
    <button type="button">Save</button>
  </Paper>
);

export default ButtonExample;
