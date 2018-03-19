import React from 'react';

const icons = {
  Broken: require('./broken').default,
  ExclamationOutline: require('./exclamation-outline').default,
};

const Icon = ({ icon, ...rest }) => {
  if (icons[icon]) {
    return React.createElement(icons[icon], {
      ...rest,
    });
  }

  return React.createElement(icons.Broken);
};

export default Icon;
