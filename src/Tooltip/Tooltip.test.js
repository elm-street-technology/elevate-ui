import React from "react";
import renderer from "react-test-renderer";

import ThemeProvider from "../ThemeProvider";
import Tooltip from "./";

const WrappedTooltip = () => (
  <ThemeProvider>
    <Tooltip text="Hello, World!">
      <div style={{ width: 200, height: 200 }} />
    </Tooltip>
  </ThemeProvider>
);

test("renders without crashing, matches the snapshot", () => {
  const component = renderer.create(<WrappedTooltip />);
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});
