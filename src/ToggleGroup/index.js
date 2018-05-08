import React, { Component } from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import Label from '../Label';
import without from 'lodash/without';

type Props = {
  classes: Object,
  className: string,
  display: 'inline' | 'block',
  field: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  form: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  options: Array<{ label: string, value: string }>,
  label: string,
  theme: Object,
  type: 'checkbox' | 'radio',
};

class ToggleGroup extends Component<Props> {
  static defaultProps = {
    display: 'block',
    options: [],
    type: 'checkbox',
  };

  onChange = e => {
    const {
      field: { name, value },
      form: { setFieldValue },
      type,
    } = this.props;
    if (type === 'radio') {
      const selectedRadio = e.target.id;
      setFieldValue(name, selectedRadio);
    } else if (type === 'checkbox') {
      const selectedCheckbox = e.target.id;

      let selectedCheckboxes = Array.isArray(value) ? value.slice() : [];

      if (
        e.target.checked &&
        selectedCheckboxes.indexOf(selectedCheckbox) === -1
      ) {
        selectedCheckboxes.push(selectedCheckbox);
      } else if (!e.target.checked) {
        selectedCheckboxes = without(selectedCheckboxes, selectedCheckbox);
      }

      setFieldValue(name, selectedCheckboxes);
    }
  };

  render() {
    const {
      label,
      options,
      classes,
      display,
      type,
      field: { value },
    } = this.props;
    return (
      <div className={classes.scaffold}>
        {label && <Label>{label}</Label>}
        <div
          className={classNames(
            classes.toggles,
            display === 'inline' && classes.inline
          )}
        >
          {options.map(option =>
            React.cloneElement(type === 'radio' ? <Radio /> : <Checkbox />, {
              key: option.value,
              id: option.value,
              label: option.label,
              checked: value.indexOf(option.value) !== -1,
              onChange: this.onChange,
              disabled: option.disabled,
            })
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(theme => ({
  scaffold: {
    margin: '8px auto 16px',
  },
  toggles: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginLeft: '-12px',
  },
  inline: {
    flexDirection: 'row',
  },
}))(ToggleGroup);
