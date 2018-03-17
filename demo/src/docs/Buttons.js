import React from 'react';

import Paper from '../../../src/components/paper';
import Typography from '../../../src/components/typography';
import Button from '../../../src/components/button';

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
    <Button type="button">Save</Button>
  </Paper>
);

export default ButtonExample;
