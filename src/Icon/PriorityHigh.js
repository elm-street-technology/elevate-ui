import React from "react";

const PriorityHigh = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M 12 17 A 2 2 0 0 1 12 21 A 2 2 0 0 1 12 17 M10 3h4v12h-4z" />
  </svg>
);

PriorityHigh.displayName = "PriorityHigh";

PriorityHigh.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default PriorityHigh;
