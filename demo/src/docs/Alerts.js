import React from 'react';

import Paper from '../../../src/components/paper';
import Typography from '../../../src/components/typography';
import Alert from '../../../src/components/alert';
import Icon from '../../../src/components/icons';

const AlertExample = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <Paper>
    <Typography type="title">{`<Alert />`}</Typography>
    <Alert color="danger" icon="ExclamationOutline">
      <Typography type="body">
        Our records indicate you are not active or eligible with the MLS due to
        your MLS subscription type or dues.
      </Typography>
      <Typography type="body">
        If you think this is a mistake, please contact{' '}
        <a
          href="mailto:support@elmstreettechnology.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          support@elmstreettechnology.com
        </a>
      </Typography>
    </Alert>
  </Paper>
);

export default AlertExample;
