import React from "react";

const FormatStrikethrough = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z" />
  </svg>
);

FormatStrikethrough.displayName = "FormatStrikethrough";

FormatStrikethrough.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FormatStrikethrough;
