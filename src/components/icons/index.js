import React from 'react';

import Broken from './broken';
import ExclamationOutline from './exclamation-outline';
import Times from './times';

const icons = {
  Broken,
  ExclamationOutline,
  Times,
};

const Icon = ({ icon, ...rest }) => {
  if (icons[icon]) {
    return React.createElement(icons[icon], {
      ...rest,
    });
  }

  return React.createElement(icons['Broken'], {
    ...rest,
  });
};

export default Icon;
