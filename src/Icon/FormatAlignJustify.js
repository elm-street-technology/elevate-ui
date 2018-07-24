import React from "react";

const FormatAlignJustify = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z" />
  </svg>
);

FormatAlignJustify.displayName = "FormatAlignJustify";

FormatAlignJustify.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FormatAlignJustify;
