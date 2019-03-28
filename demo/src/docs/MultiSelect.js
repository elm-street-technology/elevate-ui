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
  { label: "Arizona", value: "Arizona" },
  { label: "California", value: "California" },
  { label: "Ohio", value: "Ohio" },
  { label: "Maine", value: "Maine" },
  { label: "Michigan", value: "Michigan" },
  { label: "Washington", value: "Washington" },
  { label: "Oregon", value: "Oregon" },
  { label: "New York", value: "New York" },
  { label: "Florida", value: "Florida" },
  { label: "Montana", value: "Montana" },
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
              <Field
                id="states"
                name="states"
                label="States (with search functionality and custom tags)"
                items={[{ label: "Minnesota", value: "Minnesota" }]}
                component={MultiSelect}
                onSearch={this.onSearch}
                tags={true}
                loading={this.state.loading}
              />
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
