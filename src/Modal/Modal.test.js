import React from "react";
import renderer from "react-test-renderer";

import ThemeProvider from "../ThemeProvider";
import Modal from "./";

const WrappedModal = (props) => (
  <ThemeProvider>
    <Modal
      title="modal"
      confirmAction={() => null}
      toggleModal={() => null}
      {...props}
    />
  </ThemeProvider>
);

test("renders without crashing, matches the snapshot", () => {
  const component = renderer.create(<WrappedModal />);
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});
