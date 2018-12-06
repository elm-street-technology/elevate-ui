// @flow
import React from "react";
import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import Tooltip from "elevate-ui/Tooltip";
import Button from "elevate-ui/Button";
import InfoOutline from "elevate-ui-icons/InfoOutline";
import Input from "elevate-ui/Input";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

type $Props = {
  classes: Object,
};

const Tooltips = ({ classes }: $Props) => (
  <Paper>
    <Typography type="heading5" gutterBottom>
      Default Tooltip
    </Typography>
    <Tooltip text="Save your changes and exit...">
      <Button type="button" onClick={() => alert("Button onClick fired")}>
        Save
      </Button>
    </Tooltip>
    <Typography type="heading5" gutterTop gutterBottom>
      Tooltip With Position Prop
    </Typography>
    <div className={classes.tooltipContainer}>
      <Tooltip text="🙌 Great work 🙌" position="right">
        <Button
          type="button"
          isOutlined
          onClick={() => alert("Button onClick fired")}
        >
          Tooltip Right
        </Button>
      </Tooltip>
    </div>
    <div className={classes.tooltipContainer}>
      <Tooltip text="🍻 Cheers! 🍻" position="bottom">
        <Button
          type="button"
          isOutlined
          onClick={() => alert("Button onClick fired")}
        >
          Tooltip Bottom
        </Button>
      </Tooltip>
    </div>
    <div className={classes.tooltipContainer}>
      <Tooltip text="🍕🍕🍕🍕🍕" position="left">
        <Button
          type="button"
          isOutlined
          onClick={() => alert("Button onClick fired")}
        >
          Tooltip Left
        </Button>
      </Tooltip>
    </div>
    <Typography type="heading5" gutterBottom>
      Tooltip On Click
    </Typography>
    <Tooltip clickEnabled text="🗣 You clicked! 🗣">
      <Button type="button" color="secondary">
        Click for tooltip
      </Button>
    </Tooltip>
    <Typography type="heading5" gutterTop gutterBottom>
      Tooltip On Icons
    </Typography>
    <Tooltip text="Explains some important information...">
      <InfoOutline />
    </Tooltip>
    <Typography type="heading5" gutterTop gutterBottom>
      Tooltip Inside A Form
    </Typography>
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={() =>
        Yup.object().shape({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        })
      }
      onSubmit={(values) => {
        alert(values.email);
      }}
      render={({ isSubmitting, isValid }) => (
        <Form id="emailForm" noValidate style={{ maxWidth: "420px" }}>
          <Field
            id="email"
            name="email"
            label={
              <div
                style={{
                  display: "flex",
                  flexFlow: "row nowrap",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Email{" "}
                <Tooltip text="Email is required so we can keep you informed">
                  <InfoOutline />
                </Tooltip>
              </div>
            }
            component={Input}
          />
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    />
  </Paper>
);

const styles = () => ({
  tooltipContainer: {
    display: "inline-block",
    marginRight: "10px",
  },
});
export default withStyles(styles, { name: "EUITooltips" })(Tooltips);
