import React from "react";

const FormatAlignRight = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z" />
  </svg>
);

FormatAlignRight.displayName = "FormatAlignRight";

FormatAlignRight.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FormatAlignRight;
