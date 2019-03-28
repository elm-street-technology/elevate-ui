import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Paper from "elevate-ui/Paper";
import CheckboxGroup from "elevate-ui/CheckboxGroup";
import Button from "elevate-ui/Button";

const CheckboxGroups = () => (
  <Paper style={{ paddingLeft: "32px" }}>
    <Formik
      initialValues={{ colors: [] }}
      validationSchema={() =>
        Yup.object().shape({
          colors: Yup.array()
            .of(Yup.string())
            .required("A color is required"),
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
            id="colors"
            name="colors"
            label="Colors"
            component={CheckboxGroup}
            items={[
              { value: "red", label: "Red" },
              { value: "green", label: "Green" },
              { value: "blue", label: "Blue" },
              { value: "yellow", label: "Yellow" },
            ]}
          />
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    />
  </Paper>
);

export default CheckboxGroups;
