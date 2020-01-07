import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import MultiSelect from "elevate-ui/MultiSelect";
import Button from "elevate-ui/Button";

const roygbiv = [
  { label: "Red", value: "Red" },
  { label: "Orange", value: "Orange" },
  { label: "Yellow", value: "Yellow" },
  { label: "Green", value: "Green" },
  { label: "Blue", value: "Blue" },
  { label: "Indigo", value: "Indigo" },
  { label: "Violet", value: "Violet" },
];

const cmyk = [
  { label: "Cyan", value: "Cyan" },
  { label: "Magenta", value: "Magenta" },
  { label: "Yellow", value: "Yellow" },
  { label: "Black", value: "Black" },
];

const cities = [
  { label: "Phoenix", value: "Phoenix" },
  { label: "Tempe", value: "Tempe" },
  { label: "Chandler", value: "Chandler" },
  { label: "Scottsdale", value: "Scottsdale" },
];

const states = [
  { label: "Arizona", value: "Arizona", note: "AZ" },
  { label: "California", value: "California", note: "CA" },
  { label: "Ohio", value: "Ohio", note: "OH" },
  { label: "Maine", value: "Maine", note: "ME" },
  { label: "Michigan", value: "Michigan", note: "MI" },
  { label: "Washington", value: "Washington", note: "WA" },
  { label: "Oregon", value: "Oregon", note: "OR" },
  { label: "New York", value: "New York", note: "NY" },
  { label: "Florida", value: "Florida", note: "FL" },
  { label: "Montana", value: "Montana", note: "MT" },
];

class MultiSelects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  onSearch = ({ inputValue, originalItems, setItems }) => {
    this.setState({ loading: true });
    if (inputValue === "") {
      this.setState({ loading: false });
      return setItems(originalItems);
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        this.setState({ loading: false });
        resolve(setItems(states));
      }, 1500);
    });
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            colors: [],
            colors2: ["Magenta"],
            cities: [],
            states: [],
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
              states: Yup.array()
                .of(Yup.string())
                .required("A state is required"),
            })
          }
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 1000);
          }}
          render={({ isSubmitting, isValid }) => (
            <Form noValidate style={{ maxWidth: "420px", margin: "32px 0px" }}>
              <Field
                id="colors"
                name="colors"
                label="Favorite Colors (default)"
                items={roygbiv}
                component={MultiSelect}
              />
              <div style={{ margin: "32px 0px" }}>
                <Field
                  id="colors2"
                  name="colors2"
                  label="Favorite Colors (with closeOnSelect)"
                  items={cmyk}
                  component={MultiSelect}
                  closeOnSelect
                />
              </div>
              <div style={{ margin: "32px 0px" }}>
                <Field
                  id="cities"
                  name="cities"
                  label="Cities (with custom tags allowed)"
                  items={cities}
                  component={MultiSelect}
                  tags={true}
                />
              </div>
              <div style={{ margin: "32px 0px" }}>
                <Field
                  id="states"
                  name="states"
                  label="States (with search, custom tags, and notes)"
                  items={states}
                  component={MultiSelect}
                  onSearch={this.onSearch}
                  tags={true}
                  loading={this.state.loading}
                />
              </div>
              <Button type="submit" disabled={!isValid || isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        />
      </div>
    );
  }
}

export default MultiSelects;
