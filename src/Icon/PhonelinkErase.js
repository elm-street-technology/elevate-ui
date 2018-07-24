import React from "react";

const PhonelinkErase = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M13 8.2l-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z" />
  </svg>
);

PhonelinkErase.displayName = "PhonelinkErase";

PhonelinkErase.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default PhonelinkErase;
