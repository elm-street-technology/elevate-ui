import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classNames from 'classnames';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import Label from '../Label';
import without from 'lodash/without';

class ToggleGroup extends Component {
  static propTypes = {
    display: PropTypes.oneOf(['inline', 'block']).isRequired,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        disabled: PropTypes.bool,
      })
    ),
    type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  };

  static defaultProps = {
    display: 'block',
    options: [],
    type: 'checkbox',
    value: [],
  };

  onChange = e => {
    const { type, value } = this.props;
    if (type === 'radio') {
      const selectedRadio = e.target.id;

      this.props.onChange(selectedRadio);
    } else if (type === 'checkbox') {
      const selectedCheckbox = e.target.id;
      let selectedCheckboxes = Array.isArray(value) ? value.slice() : [];

      if (selectedCheckboxes.indexOf(selectedCheckbox) > -1) {
        selectedCheckboxes = without(selectedCheckboxes, selectedCheckbox);
      } else {
        selectedCheckboxes.push(selectedCheckbox);
      }

      this.props.onChange(selectedCheckboxes);
    }
  };

  render() {
    const { label, options, classes, display, type, value } = this.props;
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
