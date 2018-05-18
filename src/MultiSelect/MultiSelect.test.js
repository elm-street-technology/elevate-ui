import React from "react";
import renderer from "react-test-renderer";

import ThemeProvider from "../ThemeProvider";
import MultiSelect from "./";

const roygbiv = [
  { label: "Red", value: "red" },
  { label: "Orange", value: "orange" },
  { label: "Yellow", value: "yellow" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
  { label: "Indigo", value: "indigo" },
  { label: "Violet", value: "violet" },
];

const WrappedMultiSelect = (props) => (
  <ThemeProvider>
    <MultiSelect
      field={{
        name: "",
        onChange: () => {},
        onBlur: () => {},
        value: [],
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
    <WrappedMultiSelect id="color" items={roygbiv} />
  );
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});
