import React from 'react';

import Paper from '../../../src/components/paper';
import Typography from '../../../src/components/typography';
import Alert from '../../../src/components/alert';

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
    <div style={{ padding: 8 }}>
      <Alert color="success">
        <Typography color="black" type="body">
          Success!
        </Typography>
      </Alert>
    </div>
    <div style={{ padding: 8 }}>
      <Alert color="danger" icon="ExclamationOutline">
        <Typography color="black" type="body">
          Our records indicate you are not active or eligible with the MLS due
          to your MLS subscription type or dues.
        </Typography>
        <Typography type="body" style={{ marginTop: '8px' }}>
          If you think this is a mistake, please contact{' '}
          <a
            href="mailto:salessupport@elmstreettechnology.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            salessupport@elmstreettechnology.com
          </a>{' '}
          or call us at{' '}
          <a href="tel:8772189771" target="_blank" rel="noopener noreferrer">
            877-218-9771
          </a>.
        </Typography>
      </Alert>
    </div>
  </Paper>
);

export default AlertExample;
