import React from "react";

const KeyboardArrowDown = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
  </svg>
);

KeyboardArrowDown.displayName = "KeyboardArrowDown";

KeyboardArrowDown.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default KeyboardArrowDown;
