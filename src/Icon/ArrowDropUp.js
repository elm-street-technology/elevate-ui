import React from "react";

const ArrowDropUp = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M7 14l5-5 5 5z" />
  </svg>
);

ArrowDropUp.displayName = "ArrowDropUp";

ArrowDropUp.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ArrowDropUp;
