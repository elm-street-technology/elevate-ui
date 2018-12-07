import React from "react";
import renderer from "react-test-renderer";

import ThemeProvider from "../ThemeProvider";
import ColorPicker from "./";

const WrappedColorPicker = (props) => (
  <ThemeProvider>
    <ColorPicker {...props} colorMode="rgb" />
  </ThemeProvider>
);

test("renders without crashing, matches the snapshot", () => {
  const component = renderer.create(
    <WrappedColorPicker
      id="test-checkbox"
      items={[
        { label: "First", value: "first" },
        { label: "Second", value: "second" },
      ]}
      field={{
        name: "test-color-picker",
        onChange: () => {},
        onBlur: () => {},
        value: { r: "255", g: "255", b: "255", a: "100" },
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
