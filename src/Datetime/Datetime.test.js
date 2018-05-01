import React from 'react';
import renderer from 'react-test-renderer';

import ThemeProvider from '../ThemeProvider';
import Datetime from './';

const WrappedDatetime = props => (
  <ThemeProvider>
    <Datetime
      field={{
        name: '',
        onChange: () => {},
        onBlur: () => {},
        value: new Date('04/29/2013 12:00 AM'),
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
  const component = renderer.create(<WrappedDatetime id="startDate" />);
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});
