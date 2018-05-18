import React from "react";

import Broken from "./Broken";
import Calendar from "./Calendar";
import Cart from "./Cart";
import CreditCard from "./CreditCard";
import Coupon from "./Coupon";
import ExclamationOutline from "./ExclamationOutline";
import Kebab from "./Kebab";
import Person from "./Person";
import Refresh from "./Refresh";
import Times from "./Times";

const icons = {
  Broken,
  Calendar,
  Cart,
  CreditCard,
  Coupon,
  ExclamationOutline,
  Kebab,
  Person,
  Refresh,
  Times,
};

const Icon = ({ icon, ...rest }) => {
  if (icons[icon]) {
    return React.createElement(icons[icon], {
      ...rest,
    });
  }

  return React.createElement(icons["Broken"], {
    ...rest,
  });
};

export default Icon;
