import React from "react";
import { Formik, Form, Field } from "formik";
import Yup from "yup";

import Paper from "elevate-ui/Paper";
import MultiSelect from "elevate-ui/MultiSelect";
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
const cmyk = [
  { label: "Cyan", value: "cyan" },
  { label: "Magenta", value: "magenta" },
  { label: "Yellow", value: "yellow" },
  { label: "Black", value: "black" },
];

const MultiSelects = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <Paper>
    <Formik
      initialValues={{ colors: [], colors2: ["magenta"] }}
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
            id="colors"
            name="colors"
            label="Favorite Colors (default)"
            items={roygbiv}
            component={MultiSelect}
          />
          <Field
            id="colors2"
            name="colors2"
            label="Favorite Colors (with closeOnSelect)"
            items={cmyk}
            component={MultiSelect}
            closeOnSelect
          />
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    />
  </Paper>
);

export default MultiSelects;
