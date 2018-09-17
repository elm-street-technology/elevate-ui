import React from "react";
import renderer from "react-test-renderer";
import sinon from "sinon";

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
      onChange={sinon.spy()}
      field={{
        name: "test-buttongroup",
        onChange: () => {},
        onBlur: () => {},
        value: false,
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
