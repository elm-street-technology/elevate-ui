import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import sinon from 'sinon';

import ThemeProvider from '../ThemeProvider';
import ToggleGroup from './';

const WrappedToggleGroup = props => (
  <ThemeProvider>
    <ToggleGroup {...props} />
  </ThemeProvider>
);

test('renders without crashing, matches the snapshot', () => {
  const component = renderer.create(
    <WrappedToggleGroup
      id="test-checkbox"
      value={[]}
      onChange={sinon.spy()}
      type="checkbox"
      options={[
        { label: 'First', value: 'first' },
        { label: 'Second', value: 'second' },
      ]}
    />
  );
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});

test('fires onClick function', () => {
  let values = [];
  let spy = sinon.spy();
  let component;
  const onChange = newValues => {
    values = newValues;
    component.update();
    spy();
  };

  component = mount(
    <WrappedToggleGroup
      id="test-checkbox"
      value={values}
      onChange={onChange}
      type="checkbox"
      options={[
        { label: 'First', value: 'first' },
        { label: 'Second', value: 'second' },
      ]}
    />
  );
  component
    .find('input#first')
    .simulate('change', { target: { checked: true, id: 'first' } });
  expect(spy.callCount).toEqual(1);
  expect(values.length).toEqual(1);
  expect(values.includes('first')).toEqual(true);
  expect(values.includes('second')).toEqual(false);

  component = mount(
    <WrappedToggleGroup
      id="test-checkbox"
      value={values}
      onChange={onChange}
      type="checkbox"
      options={[
        { label: 'First', value: 'first' },
        { label: 'Second', value: 'second' },
      ]}
    />
  );
  component
    .find('input#second')
    .simulate('change', { target: { checked: true, id: 'second' } });
  expect(spy.callCount).toEqual(2);
  expect(values.length).toEqual(2);
  expect(values.includes('first')).toEqual(true);
  expect(values.includes('second')).toEqual(true);

  component = mount(
    <WrappedToggleGroup
      id="test-checkbox"
      value={values}
      onChange={onChange}
      type="checkbox"
      options={[
        { label: 'First', value: 'first' },
        { label: 'Second', value: 'second' },
      ]}
    />
  );
  component
    .find('input#first')
    .simulate('change', { target: { checked: false, id: 'first' } });
  expect(spy.callCount).toEqual(3);
  expect(values.length).toEqual(1);
  expect(values.includes('first')).toEqual(false);
  expect(values.includes('second')).toEqual(true);
});
