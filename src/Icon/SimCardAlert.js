import React from "react";

const SimCardAlert = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15h-2v-2h2v2zm0-4h-2V8h2v5z" />
  </svg>
);

SimCardAlert.displayName = "SimCardAlert";

SimCardAlert.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SimCardAlert;
