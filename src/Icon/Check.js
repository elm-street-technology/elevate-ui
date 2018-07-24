import React from "react";

const Check = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

Check.displayName = "Check";

Check.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Check;
