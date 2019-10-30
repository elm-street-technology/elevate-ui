import React from "react";
import renderer from "react-test-renderer";

import ThemeProvider from "../ThemeProvider";
import NumberIncrement from "./";

const WrappedNumberIncrement = (props) => (
  <ThemeProvider>
    <NumberIncrement
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
    <WrappedNumberIncrement
      id="number"
      name="number"
      places={0}
      min={0}
      max={100}
      value={10}
    />
  );
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});
