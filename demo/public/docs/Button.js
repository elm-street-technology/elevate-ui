import React from "react";

import Typography from "elevate-ui/Typography";
import Button from "elevate-ui/Button";
import withStyles from "elevate-ui/withStyles";

const ButtonExample = ({
  classes,
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
  touched,
  values,
}) => (
  <div>
    <div className={classes.exampleContainer}>
      <h2>Standard Button</h2>
    </div>
    <div className={classes.exampleContainer}>
      <Typography type="body">
        Default Props, using{" "}
        <pre className={classes.preInline}>
          <code className={classes.code}>{`type="button"`}</code>
        </pre>
      </Typography>
      <br />
      <Button type="button">Load More</Button>
    </div>

    <div className={classes.exampleContainer}>
      <Typography type="body">
        Stress test of a longer button using{" "}
        <pre className={classes.preInline}>
          <code className={classes.code}>{`color="secondary"`}</code>
        </pre>:
      </Typography>
      <br />
      <Button color="secondary" type="button">
        A longer button that scales well
      </Button>
    </div>

    <div className={classes.exampleContainer}>
      <h2>Outlined Buttons</h2>
    </div>

    <div className={classes.exampleContainer}>
      <Typography type="body">Default Props</Typography>
      <br />
      <Button isOutlined type="button">
        Load More
      </Button>
    </div>
    <div className={classes.exampleContainer}>
      <Typography type="body">
        Another outlined button using {`color="secondary"`}:
      </Typography>
      <br />
      <Button isOutlined color="secondary" type="button">
        Filter Results
      </Button>
    </div>

    <div className={classes.exampleContainer}>
      <h2>Custom Color Buttons</h2>
    </div>
    <div className={classes.exampleContainer}>
      <Button color="rgb(19, 30, 177)" type="button">
        Filter Results
      </Button>
    </div>
    <div className={classes.exampleContainer}>
      <Button isOutlined color="rgb(32, 148, 232)" type="button">
        Filter Results
      </Button>
    </div>
    <div className={classes.exampleContainer}>
      <Button isOutlined color="#333" type="button">
        Filter Results
      </Button>
    </div>
    <div className={classes.exampleContainer}>
      <h2>Buttons With Icons</h2>
    </div>
    <div className={classes.exampleContainer}>
      <Button color="primary" icon="Person" type="button">
        Add Lead
      </Button>
    </div>
    <div className={classes.exampleContainer}>
      <Button color="secondary" icon="Cart" isOutlined type="button">
        Check Out
      </Button>
    </div>

    <div className={classes.exampleContainer}>
      <h2>Disabled Buttons</h2>
    </div>
    <div className={classes.exampleContainer}>
      <Button disabled color="primary" icon="Person" type="button">
        Add Lead
      </Button>
    </div>
    <div className={classes.exampleContainer}>
      <Button disabled color="secondary" isOutlined icon="Person" type="button">
        Add Lead
      </Button>
    </div>
  </div>
);

export default withStyles((theme) => ({
  preInline: {
    display: "inline-block",
    margin: "0 4px",
    backgroundColor: "rgb(250, 250, 250)",
  },
  code: {
    fontFamily: "monospace",
  },
  exampleContainer: {
    margin: "15px 0",
  },
}))(ButtonExample);
