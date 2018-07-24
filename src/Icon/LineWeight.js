import React from "react";

const LineWeight = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z" />
  </svg>
);

LineWeight.displayName = "LineWeight";

LineWeight.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default LineWeight;
