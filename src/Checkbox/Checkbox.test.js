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
    />
  );
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});

test('fires onChange function', () => {
  let checked = false;
  let spy = sinon.spy();
  const onCheckboxToggle = e => {
    checked = e.target.checked;
    spy();
  };

  const component = mount(
    <WrappedCheckbox
      id="test-checkbox"
      label="Test Checkbox"
      onChange={onCheckboxToggle}
      checked={checked}
    />
  );
  component.find('input').simulate('change', { target: { checked: true } });
  expect(spy.calledOnce).toEqual(true);
  expect(checked).toEqual(true);
});
