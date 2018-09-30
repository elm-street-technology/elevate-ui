import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import ThemeProvider from "../ThemeProvider";
import Alert from "./";
import ErrorOutline from "elevate-ui-icons/ErrorOutline";

const WrappedAlert = (props) => (
  <ThemeProvider>
    <Alert {...props} />
  </ThemeProvider>
);

test("renders without crashing, matches the snapshot", () => {
  const component = renderer.create(
    <WrappedAlert color="success">Nice! Great job! Awesome!</WrappedAlert>
  );
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});

test("takes an icon prop", () => {
  const component = mount(
    <WrappedAlert icon={<ErrorOutline />}>
      Oh no! Something went terribly wrong!
    </WrappedAlert>
  );
  expect(component.find("svg")).toHaveLength(1);
});
