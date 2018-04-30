import React from 'react';
import renderer from 'react-test-renderer';

import ThemeProvider from '../../theme';
import Textarea from './';

const WrappedTextarea = props => (
  <ThemeProvider>
    <Textarea
      field={{
        name: '',
        onChange: () => {},
        onBlur: () => {},
        value: null,
      }}
      form={{
        errors: [],
        setFieldValue: () => {},
        setFieldTouched: () => {},
        touched: false,
      }}
      {...props}
    />
  </ThemeProvider>
);

test('renders without crashing, matches the snapshot', () => {
  const component = renderer.create(<WrappedTextarea id="summary" />);
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});
