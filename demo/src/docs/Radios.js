import React, { Component } from 'react';
import Paper from '../../../src/components/paper';
import Typography from '../../../src/components/typography';
import ToggleGroup from '../../../src/components/toggle/ToggleGroup';

class Radios extends Component {
  state = {
    color: '',
  };

  toggleRadio = color => {
    this.setState(() => ({ color }));
  };

  render() {
    const cmyk = ['cyan', 'magenta', 'yellow', 'black', 'disabled'];
    return (
      <Paper>
        <Typography type="title">{`<Radio />`}</Typography>
        <ToggleGroup
          id="color-rgb"
          label="Favorite Color"
          type="radio"
          options={cmyk.map(color => ({
            value: color,
            label: color.charAt(0).toUpperCase() + color.slice(1),
            disabled: color === 'disabled',
          }))}
          value={this.state.color}
          onChange={this.toggleRadio}
        />
      </Paper>
    );
  }
}

export default Radios;
