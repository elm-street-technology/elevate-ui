import React from "react";
import { Formik, Form, Field } from "formik";
import Yup from "yup";

import Paper from "elevate-ui/Paper";
import Datetime from "elevate-ui/Datetime";
import Button from "elevate-ui/Button";

const Datetimes = () => (
  <Paper>
    <Formik
      initialValues={{ startDate: null }}
      validationSchema={() =>
        Yup.object().shape({
          startDate: Yup.date().required("Start date is required"),
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
      }) => (
        <Form noValidate style={{ maxWidth: "420px" }}>
          <Field
            id="startDate"
            name="startDate"
            label="Start Date"
            component={Datetime}
          />
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    />
  </Paper>
);

export default Datetimes;
