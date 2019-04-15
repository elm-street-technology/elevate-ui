import React from "react";
import renderer from "react-test-renderer";

import ThemeProvider from "../ThemeProvider";
import Typography from "./";

const WrappedTypographies = () => (
  <ThemeProvider>
    <Typography type="title">Lorem Ipsum Dolor Sit Amet</Typography>
    <Typography type="body">Lorem Ipsum Dolor Sit Amet</Typography>
    <Typography type="heading2" gutterBottom>
      Lorem Ipsum Dolor Sit Amet
    </Typography>
    <Typography type="heading3">Lorem Ipsum Dolor Sit Amet</Typography>
    <Typography type="heading4">Lorem Ipsum Dolor Sit Amet</Typography>
    <Typography type="heading5">Lorem Ipsum Dolor Sit Amet</Typography>
    <Typography type="subHeading">Lorem Ipsum Dolor Sit Amet</Typography>
    <Typography type="subHeading2">Lorem Ipsum Dolor Sit Amet</Typography>
    <Typography type="title" component="span">
      Lorem Ipsum Dolor Sit Amet
    </Typography>
  </ThemeProvider>
);

test("renders without crashing, matches the snapshot", () => {
  const component = renderer.create(<WrappedTypographies />);
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});
