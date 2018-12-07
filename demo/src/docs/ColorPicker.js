import React from "react";
import { Formik, Form, Field } from "formik";

import Paper from "elevate-ui/Paper";
import ColorPicker from "elevate-ui/ColorPicker";
import Button from "elevate-ui/Button";

const ColorPickers = () => (
  <Paper>
    <Formik
      initialValues={{
        hexColor: "#d0021b",
        rgbaColor: { r: 74, g: 144, b: 226, a: 1 },
        rgbColor: { r: 126, g: 211, b: 33 },
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
      render={({ isSubmitting, isValid }) => (
        <Form noValidate style={{ maxWidth: "420px" }}>
          <Field
            id="hexColor"
            name="hexColor"
            label="Hex Color"
            component={ColorPicker}
          />
          <Field
            id="rgbColor"
            name="rgbColor"
            label="RGB Color"
            colorMode="rgb"
            disableAlpha={true}
            component={ColorPicker}
          />
          <Field
            id="rgbaColor"
            name="rgbaColor"
            label="RGBA Color"
            colorMode="rgb"
            component={ColorPicker}
          />
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    />
  </Paper>
);

export default ColorPickers;
