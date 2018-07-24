import React from "react";

const FormatItalic = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z" />
  </svg>
);

FormatItalic.displayName = "FormatItalic";

FormatItalic.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FormatItalic;
