import React from "react";

import Typography from "elevate-ui/Typography";
import Paper from "elevate-ui/Paper";
import Alert from "elevate-ui/Alert";

import ErrorOutline from "elevate-ui-icons/ErrorOutline";

const AlertExample = () => (
  <Paper>
    <div>
      <div style={{ padding: "8px 0" }}>
        <Alert color="success">
          <Typography type="body">Success!</Typography>
        </Alert>
      </div>
      <div style={{ padding: "8px 0" }}>
        <Alert color="error" icon={<ErrorOutline />}>
          <div>
            <Typography type="body">
              Our records indicate you are not active or eligible with the MLS
              due to your MLS subscription type or dues.
            </Typography>
            <Typography type="body" style={{ marginTop: "8px" }}>
              If you think this is a mistake, please contact{" "}
              <a
                href="mailto:salessupport@elmstreettechnology.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                salessupport@elmstreettechnology.com
              </a>{" "}
              or call us at{" "}
              <a
                href="tel:8772189771"
                target="_blank"
                rel="noopener noreferrer"
              >
                877-218-9771
              </a>
              .
            </Typography>
          </div>
        </Alert>
      </div>

      <Typography
        type="heading2"
        style={{ margin: "24px 0", fontSize: "20px", display: "block" }}
      >
        Status Colors
      </Typography>
      <div style={{ padding: "8px 0" }}>
        <Alert color="success">
          <Typography type="body">{`<Alert color="success">`}</Typography>
        </Alert>
      </div>
      <div style={{ padding: "8px 0" }}>
        <Alert color="error">
          <Typography type="body">{`<Alert color="error">`}</Typography>
        </Alert>
      </div>
      <div style={{ padding: "8px 0" }}>
        <Alert color="info">
          <Typography type="body">{`<Alert color="info">`}</Typography>
        </Alert>
      </div>
      <div style={{ padding: "8px 0" }}>
        <Alert color="warning">
          <Typography type="body">{`<Alert color="warning">`}</Typography>
        </Alert>
      </div>
      <div style={{ padding: "8px 0" }}>
        <Alert color="asdf">
          <Typography type="body">
            {`<Alert color="asdf"> (invalid name, fallback to b&w)`}
          </Typography>
        </Alert>
      </div>
    </div>
  </Paper>
);

export default AlertExample;
