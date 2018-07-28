import React from "react";

const SettingsInputHdmi = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z" />
  </svg>
);

SettingsInputHdmi.displayName = "SettingsInputHdmi";

SettingsInputHdmi.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SettingsInputHdmi;
