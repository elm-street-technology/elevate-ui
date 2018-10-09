import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Paper from "elevate-ui/Paper";
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
const cmyk = [
  { label: "Cyan", value: "cyan" },
  { label: "Magenta", value: "magenta" },
  { label: "Yellow", value: "yellow" },
  { label: "Black", value: "black" },
];

const Selects = () => (
  <Paper>
    <Formik
      initialValues={{
        color: "",
        color2: "",
      }}
      validationSchema={() =>
        Yup.object().shape({
          color: Yup.string().required("A favorite color is required"),
          color2: Yup.string().required("A secondary color is required"),
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
            id="color"
            name="color"
            label="Favorite Color"
            items={roygbiv}
            component={Select}
          />
          <div style={{ maxWidth: "180px" }}>
            <Field
              id="color2"
              name="color2"
              label="Secondary Color"
              items={cmyk}
              component={Select}
            />
          </div>
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    />
  </Paper>
);

export default Selects;
