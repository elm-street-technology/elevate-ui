import React from "react";
import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";

const Papers = ({ classes }) => (
  <div>
    <Paper className={classes.container}>
      <Typography type="body" gutterBottom>
        This is an example of a paper component that can be used to wrap or
        contain content. This component has padding by default.
      </Typography>
    </Paper>
    <Paper className={classes.container} withPadding={false}>
      <Typography type="body" gutterBottom>
        This is an example of a paper component that can be used to wrap or
        contain content. This component is not using default padding.
      </Typography>
    </Paper>
  </div>
);

const styles = () => ({
  container: {
    margin: "0 0 28px",
  },
});

export default withStyles(styles, { name: "Papers" })(Papers);
