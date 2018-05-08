import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import sinon from 'sinon';

import ThemeProvider from '../ThemeProvider';
import Checkbox from './';

const WrappedCheckbox = props => (
  <ThemeProvider>
    <Checkbox {...props} />
  </ThemeProvider>
);

test('renders without crashing, matches the snapshot', () => {
  const component = renderer.create(
    <WrappedCheckbox
      id="test-checkbox"
      label="Test Checkbox"
      onChange={sinon.spy()}
      checked={true}
      field={{
        name: 'test-checkybox',
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
