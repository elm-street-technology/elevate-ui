import React from "react";

import Bath from "./Bath";
import Bed from "./Bed";
import Broken from "./Broken";
import Calendar from "./Calendar";
import Cart from "./Cart";
import CreditCard from "./CreditCard";
import Coupon from "./Coupon";
import ExclamationOutline from "./ExclamationOutline";
import Heart from "./Heart";
import Kebab from "./Kebab";
import Person from "./Person";
import Refresh from "./Refresh";
import Save from "./Save";
import SqFt from "./SqFt";
import Times from "./Times";
import Video from "./Video";

const icons = {
  Bath,
  Bed,
  Broken,
  Calendar,
  Cart,
  CreditCard,
  Coupon,
  ExclamationOutline,
  Heart,
  Kebab,
  Person,
  Refresh,
  Save,
  SqFt,
  Times,
  Video,
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
