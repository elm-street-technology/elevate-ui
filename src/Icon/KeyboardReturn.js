import React from "react";

const KeyboardReturn = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z" />
  </svg>
);

KeyboardReturn.displayName = "KeyboardReturn";

KeyboardReturn.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default KeyboardReturn;
