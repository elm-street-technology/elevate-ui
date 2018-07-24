import React from "react";

const Remove = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M19 13H5v-2h14v2z" />
  </svg>
);

Remove.displayName = "Remove";

Remove.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Remove;
