import React from "react";
import renderer from "react-test-renderer";

import ThemeProvider from "../ThemeProvider";
import CurrencyInput from "./";

const WrappedInput = (props) => (
  <ThemeProvider>
    <CurrencyInput
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
  const component = renderer.create(<WrappedInput id="homeValue" />);
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});
