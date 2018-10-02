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

const cities = [
  { label: "Phoenix", value: "phoenix" },
  { label: "Tempe", value: "tempe" },
  { label: "Chandler", value: "chandler" },
  { label: "Scottsdale", value: "scottsdale" },
];

const MultiSelects = () => (
  <Paper>
    <Formik
      initialValues={{
        colors: [],
        colors2: ["magenta"],
        cities: ["tucson"],
      }}
      validationSchema={() =>
        Yup.object().shape({
          colors: Yup.array()
            .of(Yup.string())
            .required("A color is required"),
          colors2: Yup.array()
            .of(Yup.string())
            .required("A color is required"),
          cities: Yup.array()
            .of(Yup.string())
            .required("A city is required"),
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
          <Field
            id="cities"
            name="cities"
            label="Cities (with custom tags allowed)"
            items={cities}
            component={MultiSelect}
            tags={true}
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
