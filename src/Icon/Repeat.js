import React from "react";

const Repeat = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" />
  </svg>
);

Repeat.displayName = "Repeat";

Repeat.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Repeat;
