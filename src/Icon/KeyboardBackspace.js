import React from "react";

const KeyboardBackspace = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
  </svg>
);

KeyboardBackspace.displayName = "KeyboardBackspace";

KeyboardBackspace.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default KeyboardBackspace;
