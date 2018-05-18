import React from "react";
import renderer from "react-test-renderer";

import ThemeProvider from "../ThemeProvider";
import Select from "./";

const roygbiv = [
  { label: "Red", value: "red" },
  { label: "Orange", value: "orange" },
  { label: "Yellow", value: "yellow" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
  { label: "Indigo", value: "indigo" },
  { label: "Violet", value: "violet" },
];

const WrappedSelect = (props) => (
  <ThemeProvider>
    <Select
      field={{
        name: "",
        onChange: () => {},
        onBlur: () => {},
        value: { label: "", value: "" },
      }}
      form={{
        errors: [],
        setFieldValue: () => {},
        setFieldTouched: () => {},
        touched: false,
      }}
      {...props}
    />
  </ThemeProvider>
);

test("renders without crashing, matches the snapshot", () => {
  const component = renderer.create(
    <WrappedSelect id="color" items={roygbiv} />
  );
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});
