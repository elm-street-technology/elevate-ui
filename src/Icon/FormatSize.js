import React from "react";

const FormatSize = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z" />
  </svg>
);

FormatSize.displayName = "FormatSize";

FormatSize.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FormatSize;
