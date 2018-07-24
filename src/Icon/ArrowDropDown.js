import React from "react";

const ArrowDropDown = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M7 10l5 5 5-5z" />
  </svg>
);

ArrowDropDown.displayName = "ArrowDropDown";

ArrowDropDown.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ArrowDropDown;
