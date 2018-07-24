import React from "react";

const KeyboardArrowUp = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
  </svg>
);

KeyboardArrowUp.displayName = "KeyboardArrowUp";

KeyboardArrowUp.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default KeyboardArrowUp;
