import React from "react";

import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import Button from "elevate-ui/Button";

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
    <hr />
    <h2>Standard Button</h2>
    <Typography type="body">Default Props, using {`type="button"`}</Typography>
    <br />
    <Button type="button">Load More</Button>
    <Typography type="body">
      Stress test of a longer button using {`color="secondary"`}:
    </Typography>
    <Button color="secondary" type="button">
      Stress Testing A Really Long Button
    </Button>
    <br />
    <br />
    <h2>Outlined Buttons</h2>
    <br />
    <Button isOutlined type="button">
      Load More
    </Button>
    <Typography type="body">
      Another outlined button using {`color="secondary"`}:
    </Typography>
    <Button isOutlined color="secondary" type="button">
      Filter Results
    </Button>
    <br />
    <br />
    <h2>Custom Color Buttons</h2>
    <br />
    <Button color="rgb(19, 30, 177)" type="button">
      Filter Results
    </Button>
    <br />
    <br />
    <Button isOutlined color="rgb(32, 148, 232)" type="button">
      Filter Results
    </Button>
    <br />
    <br />
    <h2>Buttons With Icons</h2>
    <Button color="primary" icon="Person" type="button">
      Add Lead
    </Button>
    <br />
    <br />
    <Button color="secondary" icon="Cart" isOutlined type="button">
      Check Out
    </Button>
    <br />
    <h2>Disabled Buttons</h2>
    <Button disabled color="primary" icon="Person" type="button">
      Add Lead
    </Button>
    <br />
    <br />
    <Button disabled color="secondary" isOutlined icon="Person" type="button">
      Add Lead
    </Button>
    <br />
    <br />
  </Paper>
);

export default ButtonExample;
