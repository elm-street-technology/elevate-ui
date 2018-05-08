import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';

import ThemeProvider from '../ThemeProvider';
import RadioGroup from './';

const WrappedRadioGroup = props => (
  <ThemeProvider>
    <RadioGroup {...props} />
  </ThemeProvider>
);

test('renders without crashing, matches the snapshot', () => {
  const component = renderer.create(
    <WrappedRadioGroup
      id="test-radio"
      value={''}
      onChange={sinon.spy()}
      options={[
        { label: 'First', value: 'first' },
        { label: 'Second', value: 'second' },
      ]}
      field={{ name: '', onChange: () => {}, onBlur: () => {}, value: null }}
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
