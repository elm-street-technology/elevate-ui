import React from "react";

const Navigation = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
  </svg>
);

Navigation.displayName = "Navigation";

Navigation.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Navigation;
