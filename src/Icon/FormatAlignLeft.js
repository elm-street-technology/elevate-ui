import React from "react";

const FormatAlignLeft = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z" />
  </svg>
);

FormatAlignLeft.displayName = "FormatAlignLeft";

FormatAlignLeft.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FormatAlignLeft;
