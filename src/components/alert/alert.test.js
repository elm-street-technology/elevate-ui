import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import ThemeProvider from '../../theme';
import Alert from './';

const WrappedAlert = props => (
  <ThemeProvider>
    <Alert {...props} />
  </ThemeProvider>
);

test('renders without crashing, matches the snapshot', () => {
  const component = renderer.create(
    <WrappedAlert icon="ExclamationOutline">
      Oh no! Something went terribly wrong!
    </WrappedAlert>
  );
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});

test('takes an icon prop', () => {
  const component = mount(
    <WrappedAlert icon="ExclamationOutline">
      Oh no! Something went terribly wrong!
    </WrappedAlert>
  );
  expect(component.find('svg')).toHaveLength(1);
});
