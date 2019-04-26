import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import sinon from "sinon";

import ThemeProvider from "../ThemeProvider";
import Tab from "./";

const WrappedTab = (props) => (
  <ThemeProvider>
    <Tab {...props}>{props.children}</Tab>
  </ThemeProvider>
);

test("renders without crashing, matches the snapshot", () => {
  const component = renderer.create(
    <WrappedTab isActive={true} element="a" href="https://elevate-ui.com">
      Elevate UI
    </WrappedTab>
  );
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});

test("fires onClick function", () => {
  const onButtonClick = sinon.spy();
  const component = shallow(
    <WrappedTab
      id="test-tab"
      onClick={onButtonClick}
      element="button"
      type="button"
    >
      Save
    </WrappedTab>
  );
  component.find("#test-tab").simulate("click");
  expect(onButtonClick.calledOnce).toEqual(true);
});
