import React from "react";
import { Formik, Form, Field } from "formik";
import Yup from "yup";

import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import Select from "elevate-ui/Select";
import Button from "elevate-ui/Button";

const roygbiv = [
  { label: "Red", value: "red" },
  { label: "Orange", value: "orange" },
  { label: "Yellow", value: "yellow" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
  { label: "Indigo", value: "indigo" },
  { label: "Violet", value: "violet" },
];

const Selects = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <Paper>
    <Typography type="title">{`<Select />`}</Typography>
    <Formik
      initialValues={{
        color: {
          label: "",
          value: "",
        },
      }}
      validationSchema={() =>
        Yup.object().shape({
          color: Yup.object().required("A favorite color is required"),
        })
      }
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
      }) => (
        <Form noValidate style={{ maxWidth: "420px" }}>
          <Field
            id="color"
            name="color"
            label="Favorite Color"
            items={roygbiv}
            component={Select}
          />
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    />
  </Paper>
);

export default Selects;
