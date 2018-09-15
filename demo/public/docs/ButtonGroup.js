import React from "react";
import { Formik, Form, Field } from "formik";
import Yup from "yup";
import Typography from "elevate-ui/Typography";
import Paper from "elevate-ui/Paper";
import ButtonGroup from "elevate-ui/ButtonGroup";
import Button from "elevate-ui/Button";

const ButtonGroups = () => (
  <Paper>
    <Typography type="title">Single Value</Typography>
    <Formik
      initialValues={{ colors: [] }}
      validationSchema={() =>
        Yup.object().shape({
          colors: Yup.string().required(),
        })
      }
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
      render={({ isSubmitting, isValid, field }) => (
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
    <br />
    <Typography type="title">Multiple Values</Typography>
    <Typography type="body">
      The component can accept multiple values by adding the{" "}
      <code>multiSelect</code> prop.
    </Typography>
    <Formik
      initialValues={{ colors2: [] }}
      validationSchema={() =>
        Yup.object().shape({
          colors2: Yup.array()
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
      render={({ isSubmitting, isValid, field }) => (
        <Form id="colorsMulti" noValidate style={{ maxWidth: "420px" }}>
          <Field
            id="colors2"
            name="colors2"
            label="Colors"
            render={(field, options) => (
              <ButtonGroup
                {...field}
                multiSelect
                color="secondary"
                options={[
                  { value: "teal", label: "Teal" },
                  { value: "brown", label: "Brown" },
                  { value: "black", label: "Black" },
                  { value: "pink", label: "Pink" },
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
