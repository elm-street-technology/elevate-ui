import React from "react";

import Typography from "elevate-ui/Typography";
import Paper from "elevate-ui/Paper";
import Alert from "elevate-ui/Alert";

import ErrorOutline from "elevate-ui-icons/ErrorOutline";

const AlertExample = () => (
  <div>
    <div>
      <Paper>
        <div style={{ padding: "8px 0" }}>
          <Alert color="success">
            <Typography type="body2">Success!</Typography>
          </Alert>
        </div>
        <div style={{ padding: "8px 0" }}>
          <Alert color="error" icon={<ErrorOutline />}>
            <div>
              <Typography type="body2">
                Our records indicate you are not active or eligible with the MLS
                due to your MLS subscription type or dues.
              </Typography>
              <Typography type="body2" style={{ marginTop: "8px" }}>
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
      </Paper>

      <Typography
        type="heading2"
        style={{ marginTop: "36px", fontSize: "20px", display: "block" }}
      >
        Status Colors
      </Typography>
      <Paper>
        <div style={{ padding: "8px 0" }}>
          <Alert color="success">
            <Typography type="body2">{`<Alert color="success">`}</Typography>
          </Alert>
        </div>
        <div style={{ padding: "8px 0" }}>
          <Alert color="error">
            <Typography type="body2">{`<Alert color="error">`}</Typography>
          </Alert>
        </div>
        <div style={{ padding: "8px 0" }}>
          <Alert color="info">
            <Typography type="body2">{`<Alert color="info">`}</Typography>
          </Alert>
        </div>
        <div style={{ padding: "8px 0" }}>
          <Alert color="warning">
            <Typography type="body2">{`<Alert color="warning">`}</Typography>
          </Alert>
        </div>
        <div style={{ padding: "8px 0" }}>
          <Alert color="asdf">
            <Typography type="body2">
              {`<Alert color="asdf"> (invalid name, fallback to b&w)`}
            </Typography>
          </Alert>
        </div>
      </Paper>
    </div>
  </div>
);

export default AlertExample;
