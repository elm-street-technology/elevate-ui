import React from "react";
import { Formik, Form, Field } from "formik";
import Yup from "yup";

import Paper from "elevate-ui/Paper";
import ButtonGroup from "elevate-ui/ButtonGroup";
import Button from "elevate-ui/Button";

const ButtonGroups = () => (
  <Paper>
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
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
        field,
      }) => (
        <Form noValidate style={{ maxWidth: "420px" }}>
          <Field
            id="colors"
            name="colors"
            label="Colors"
            render={(field, options) => (
              <ButtonGroup
                {...field}
                options={[
                  { value: "red", label: "Red" },
                  { value: "green", label: "Green" },
                  { value: "blue", label: "Blue" },
                  { value: "yellow", label: "Yellow" },
                ]}
              />
            )}
          />
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    />
  </Paper>
);

export default ButtonGroups;
