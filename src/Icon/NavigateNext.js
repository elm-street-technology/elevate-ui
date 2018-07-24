import React from "react";

const NavigateNext = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);

NavigateNext.displayName = "NavigateNext";

NavigateNext.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default NavigateNext;
