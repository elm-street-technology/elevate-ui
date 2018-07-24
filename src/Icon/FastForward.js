import React from "react";

const FastForward = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
  </svg>
);

FastForward.displayName = "FastForward";

FastForward.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FastForward;
