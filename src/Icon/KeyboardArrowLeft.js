import React from "react";

const KeyboardArrowLeft = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
  </svg>
);

KeyboardArrowLeft.displayName = "KeyboardArrowLeft";

KeyboardArrowLeft.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default KeyboardArrowLeft;
