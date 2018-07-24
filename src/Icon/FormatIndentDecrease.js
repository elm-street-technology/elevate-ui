import React from "react";

const FormatIndentDecrease = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z" />
  </svg>
);

FormatIndentDecrease.displayName = "FormatIndentDecrease";

FormatIndentDecrease.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FormatIndentDecrease;
