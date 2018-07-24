import React from "react";

const ArrowBack = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
  </svg>
);

ArrowBack.displayName = "ArrowBack";

ArrowBack.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ArrowBack;
