import React from "react";
import withStyles from "elevate-ui/withStyles";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Input from "elevate-ui/Input";
import Button from "elevate-ui/Button";

const Inputs = () => (
  <div>
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
      render={({ isSubmitting, isValid }) => (
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
  </div>
);

export default withStyles((theme) => ({
  container: {
    border: "none",
    background: "#fafafa",
    padding: "12px",

    [theme.breakpoints(600)]: {
      padding: "24px 0px",
    },
  },
}))(Inputs);
