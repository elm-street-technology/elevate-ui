import React from "react";
import renderer from "react-test-renderer";

import ThemeProvider from "../ThemeProvider";
import TabNavigation from "./";
import Tab from "./";

const WrappedTabNavigation = (props) => (
  <ThemeProvider>
    <TabNavigation {...props}>
      <Tab element="a" href="#" isActive={true}>
        Home
      </Tab>
      <Tab element="a" href="#" isActive={false}>
        About
      </Tab>
    </TabNavigation>
  </ThemeProvider>
);

test("renders without crashing, matches the snapshot", () => {
  const component = renderer.create(<WrappedTabNavigation />);
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});
