import React from "react";
import renderer from "react-test-renderer";

import ThemeProvider from "../ThemeProvider";
import ButtonGroup from "./";

const WrappedGroup = (props) => (
  <ThemeProvider>
    <ButtonGroup {...props} />
  </ThemeProvider>
);

test("renders without crashing, matches the snapshot", () => {
  const component = renderer.create(
    <WrappedGroup
      id="test-buttongroup"
      label="Test ButtonGroup"
      field={{
        name: "buttongroup",
        onChange: () => {},
        onBlur: () => {},
        value: "",
      }}
      form={{
        errors: [],
        setFieldValue: () => {},
        setFieldTouched: () => {},
        touched: false,
        values: {},
      }}
      items={[
        { value: "teal", label: "Teal" },
        { value: "brown", label: "Brown" },
        { value: "black", label: "Black" },
        { value: "pink", label: "Pink" },
      ]}
    />
  );
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});
