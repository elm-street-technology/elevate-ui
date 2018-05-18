import React from "react";
import renderer from "react-test-renderer";

import ThemeProvider from "../ThemeProvider";
import Input from "./";

const WrappedInput = (props) => (
  <ThemeProvider>
    <Input
      field={{
        name: "",
        onChange: () => {},
        onBlur: () => {},
        value: null,
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
  const component = renderer.create(<WrappedInput id="firstName" />);
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});
