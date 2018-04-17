import React from 'react';

import Broken from './broken';
import Calendar from './calendar';
import Cart from './cart';
import CreditCard from './credit-card';
import ExclamationOutline from './exclamation-outline';
import Person from './person';
import Times from './times';

const icons = {
  Broken,
  Calendar,
  Cart,
  CreditCard,
  ExclamationOutline,
  Person,
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
