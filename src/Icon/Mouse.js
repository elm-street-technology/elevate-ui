import React from "react";

const Mouse = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z" />
  </svg>
);

Mouse.displayName = "Mouse";

Mouse.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Mouse;
