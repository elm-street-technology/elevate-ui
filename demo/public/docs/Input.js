import React from "react";
import { Formik, Form, Field } from "formik";
import Yup from "yup";

import Paper from "elevate-ui/Paper";
import Input from "elevate-ui/Input";
import Button from "elevate-ui/Button";

const Inputs = () => (
  <Paper>
    <Formik
      initialValues={{ name: "", hiddenField: "coolbeans" }}
      validationSchema={() =>
        Yup.object().shape({
          name: Yup.string().required("Name is required"),
          hiddenField: Yup.string(),
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
          <Field id="name" name="name" label="Name" component={Input} />
          <Field
            id="hiddenField"
            name="hiddenField"
            label="Hidden Field"
            component={Input}
            type="hidden"
          />
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    />
  </Paper>
);

export default Inputs;
