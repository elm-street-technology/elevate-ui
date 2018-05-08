import React from 'react';

import Paper from 'elevate-ui/Paper';
import Typography from 'elevate-ui/Typography';
import Button from 'elevate-ui/Button';

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
    <Typography type="body">{`isRounded = false`}</Typography>
    <Button isRounded={false} type="button">
      Save
    </Button>
    <Typography type="body">{`isRounded = true`}</Typography>
    <Button isRounded={true} type="button">
      Save
    </Button>
    <Typography type="body">{`isOutlined = true`}</Typography>
    <Button isOutlined={true} type="button">
      Save
    </Button>
    <Typography type="body">{`isOutlined = true && color = secondary`}</Typography>
    <Button isOutlined={true} color="secondary" type="button">
      Save
    </Button>
    <Typography type="body">{`color = secondary`}</Typography>
    <Button color="secondary" type="button">
      Save
    </Button>
    <Typography type="body">{`isDisabled = true`}</Typography>
    <Button color="primary" isDisabled={true} type="button">
      Save
    </Button>
    <Typography type="body">{`isDisabled = true`}</Typography>
    <Button color="primary" isDisabled={true} isOutlined={true} type="button">
      Save
    </Button>
  </Paper>
);

export default ButtonExample;
