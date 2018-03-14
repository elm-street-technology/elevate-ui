import React, { Component } from 'react';
import Paper from '../../../src/components/paper';
import Typography from '../../../src/components/typography';
import ToggleGroup from '../../../src/components/toggle/ToggleGroup';

class Checkboxes extends Component {
  state = {
    colors: [],
  };

  toggleCheckbox = colors => {
    this.setState(() => ({ colors }));
  };

  render() {
    const rgb = ['red', 'green', 'blue', 'disabled'];
    return (
      <Paper>
        <Typography type="title">{`<Checkbox />`}</Typography>
        <ToggleGroup
          id="color-rgb"
          label="Favorite Color(s)"
          type="checkbox"
          options={rgb.map(color => ({
            value: color,
            label: color.charAt(0).toUpperCase() + color.slice(1),
            disabled: color === 'disabled',
          }))}
          value={this.state.colors}
          onChange={this.toggleCheckbox}
          display="inline"
        />
      </Paper>
    );
  }
}

export default Checkboxes;
