import React from "react";
import withStyles from "elevate-ui/withStyles";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import Input from "elevate-ui/Input";
import Button from "elevate-ui/Button";
import MultiSelect from "elevate-ui/MultiSelect";
import Select from "elevate-ui/Select";

const roygbiv = [
  { label: "Red", value: "red" },
  { label: "Orange", value: "orange" },
  { label: "Yellow", value: "yellow" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
  { label: "Indigo", value: "indigo" },
  { label: "Violet", value: "violet" },
];
const cmyk = [
  { label: "Cyan", value: "cyan" },
  { label: "Magenta", value: "magenta" },
  { label: "Yellow", value: "yellow" },
  { label: "Black", value: "black" },
];

const QueryForm = ({ classes }) => (
  <div className={classes.container}>
    <Typography type="title" gutterBottom>
      Query Form Demo
    </Typography>
    <Paper>
      <Formik
        initialValues={{
          name: "",
          email: "",
          favoriteColor: "",
          dislikedColors: [],
        }}
        validationSchema={() =>
          Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            favoriteColor: Yup.string().required("Favorite Color is required."),
            dislikedColors: Yup.array(Yup.string()).required(
              "Disliked Colors is required."
            ),
          })
        }
        onSubmit={() => {
          const form = document.getElementById("queryForm");
          form.submit();
        }}
        render={({ isSubmitting, isValid }) => (
          <Form
            id="queryForm"
            method="get"
            action="/query-form"
            noValidate
            style={{ maxWidth: "420px" }}
          >
            <Field id="name" name="name" label="Name" component={Input} />
            <Field id="email" name="email" label="Email" component={Input} />
            <Field
              id="favoriteColor"
              name="favoriteColor"
              label="Favorite Color"
              items={roygbiv}
              component={Select}
            />
            <Field
              id="dislikedColors"
              name="dislikedColors"
              label="Disliked Colors"
              items={cmyk}
              component={MultiSelect}
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
      margin: "45px 45px 45px 80px",
    },

    [theme.breakpoints(600)]: {
      padding: "24px 0px",
    },

    border: "none",
    background: "#fafafa",
  },
}))(QueryForm);
