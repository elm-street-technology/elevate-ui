import React from "react";

import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import NewButton from "elevate-ui/NewButton";

const NewButtonExample = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <Paper>
    <Typography type="title">{`<NewButton />`}</Typography>
    <hr />
    <h2>Standard Button</h2>
    <Typography type="body">Default Props, using {`type="button"`}</Typography>
    <br />
    <NewButton type="button">Load More</NewButton>
    <Typography type="body">
      Stress test of a longer button using {`color="secondary"`}:
    </Typography>
    <NewButton color="secondary" type="button">
      Stress Testing A Really Long Button
    </NewButton>
    <br />
    <br />
    <h2>Outlined Buttons</h2>
    <br />
    <NewButton isOutlined type="button">
      Load More
    </NewButton>
    <Typography type="body">
      Another outlined button using {`color="secondary"`}:
    </Typography>
    <NewButton isOutlined color="secondary" type="button">
      Filter Results
    </NewButton>
    <br />
    <br />
    <h2>Custom Color Buttons</h2>
    <br />
    <NewButton color="rgb(19, 30, 177)" type="button">
      Filter Results
    </NewButton>
    <br />
    <br />
    <NewButton isOutlined color="rgb(32, 148, 232)" type="button">
      Filter Results
    </NewButton>
  </Paper>
);

export default NewButtonExample;
