import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import sinon from "sinon";

import ThemeProvider from "../ThemeProvider";
import Button from "./";

const WrappedButton = (props) => (
  <ThemeProvider>
    <Button {...props} />
  </ThemeProvider>
);

test("renders without crashing, matches the snapshot", () => {
  const component = renderer.create(
    <WrappedButton>Save and Continue</WrappedButton>
  );
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});

test("fires onClick function", () => {
  const onButtonClick = sinon.spy();
  const component = shallow(
    <WrappedButton id="test-button" onClick={onButtonClick}>
      Save and Continue
    </WrappedButton>
  );
  component.find("#test-button").simulate("click");
  expect(onButtonClick.calledOnce).toEqual(true);
});
