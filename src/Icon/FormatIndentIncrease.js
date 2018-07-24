import React from "react";

const FormatIndentIncrease = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z" />
  </svg>
);

FormatIndentIncrease.displayName = "FormatIndentIncrease";

FormatIndentIncrease.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FormatIndentIncrease;
