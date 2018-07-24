import React from "react";

const DesktopMac = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z" />
  </svg>
);

DesktopMac.displayName = "DesktopMac";

DesktopMac.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default DesktopMac;
