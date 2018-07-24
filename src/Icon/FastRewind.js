import React from "react";

const FastRewind = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" />
  </svg>
);

FastRewind.displayName = "FastRewind";

FastRewind.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FastRewind;
