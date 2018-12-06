import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Paper from "elevate-ui/Paper";
import NumberIncrement from "elevate-ui/NumberIncrement";
import Button from "elevate-ui/Button";

const NumberIncrements = () => (
  <Paper>
    <Formik
      initialValues={{
        padding: 0,
        margin: 0,
      }}
      isInitialValid
      validationSchema={() =>
        Yup.object().shape({
          padding: Yup.number().required("A number is required"),
          margin: Yup.number().required("A number is required"),
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
          <Field
            id="padding"
            name="padding"
            label="Padding"
            component={NumberIncrement}
          />
          <Field
            id="margin"
            name="margin"
            label="Margin (with height override)"
            style={{ height: "60px" }}
            component={NumberIncrement}
          />
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    />
  </Paper>
);

export default NumberIncrements;
