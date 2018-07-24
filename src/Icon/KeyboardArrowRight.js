import React from "react";

const KeyboardArrowRight = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
  </svg>
);

KeyboardArrowRight.displayName = "KeyboardArrowRight";

KeyboardArrowRight.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default KeyboardArrowRight;
