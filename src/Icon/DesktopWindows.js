import React from "react";

const DesktopWindows = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z" />
  </svg>
);

DesktopWindows.displayName = "DesktopWindows";

DesktopWindows.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default DesktopWindows;
