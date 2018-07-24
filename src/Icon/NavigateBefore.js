import React from "react";

const NavigateBefore = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
);

NavigateBefore.displayName = "NavigateBefore";

NavigateBefore.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default NavigateBefore;
