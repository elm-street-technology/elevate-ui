import React from "react";
import withStyles from "elevate-ui/withStyles";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import Input from "elevate-ui/Input";
import Button from "elevate-ui/Button";

const SignUpForm = ({ classes }) => (
  <div className={classes.container}>
    <Typography gutterBottom type="title">
      Sign-up Form Demo
    </Typography>
    <Paper>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={() =>
          Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            password: Yup.string().required("Password is required"),
          })
        }
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 1000);
        }}
        render={({ isSubmitting, isValid }) => (
          <Form noValidate style={{ maxWidth: "420px" }}>
            <Field id="name" name="name" label="Name" component={Input} />
            <Field id="email" name="email" label="Email" component={Input} />
            <Field
              id="password"
              name="password"
              label="Password"
              type="password"
              component={Input}
            />
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      />
    </Paper>
  </div>
);

export default withStyles((theme) => ({
  container: {
    width: "100%",
    padding: "12px",
    maxWidth: "680px",
    margin: "45px auto",

    [theme.breakpoints(900)]: {
      margin: "45px auto 90px 100px",
    },

    [theme.breakpoints(600)]: {
      padding: "24px 0px",
    },

    border: "none",
    background: "#fafafa",
  },
}))(SignUpForm);
