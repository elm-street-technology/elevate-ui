import React from "react";

const PlusOne = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z" />
  </svg>
);

PlusOne.displayName = "PlusOne";

PlusOne.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default PlusOne;
