import React from "react";

const Menu = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

Menu.displayName = "Menu";

Menu.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Menu;
