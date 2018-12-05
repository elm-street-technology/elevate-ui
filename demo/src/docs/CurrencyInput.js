import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Paper from "elevate-ui/Paper";
import CurrencyInput from "elevate-ui/CurrencyInput";
import Button from "elevate-ui/Button";

const CurrencyInputs = () => (
  <Paper>
    <Formik
      initialValues={{ homePrice: 140000, taxes: 895.94 }}
      validationSchema={() =>
        Yup.object().shape({
          homePrice: Yup.number().required("Home Price is required"),
          taxes: Yup.number().required("Taxes are required"),
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
            id="homePrice"
            name="homePrice"
            label="Home price"
            component={CurrencyInput}
            precision={0}
          />
          <Field
            id="taxes"
            name="taxes"
            label="Taxes Per Year"
            component={CurrencyInput}
            autoFocus={true}
          />
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    />
  </Paper>
);

export default CurrencyInputs;
