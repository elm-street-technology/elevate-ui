import React from "react";
import renderer from "react-test-renderer";

import ThemeProvider from "../ThemeProvider";
import CheckboxGroup from "./";

const WrappedCheckboxGroup = (props) => (
  <ThemeProvider>
    <CheckboxGroup {...props} />
  </ThemeProvider>
);

test("renders without crashing, matches the snapshot", () => {
  const component = renderer.create(
    <WrappedCheckboxGroup
      id="test-checkbox"
      items={[
        { label: "First", value: "first" },
        { label: "Second", value: "second" },
      ]}
      field={{
        name: "test-checkbox",
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
    />
  );
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});
