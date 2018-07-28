import React from "react";

const BrightnessAuto = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M10.85 12.65h2.3L12 9l-1.15 3.65zM20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM14.3 16l-.7-2h-3.2l-.7 2H7.8L11 7h2l3.2 9h-1.9z" />
  </svg>
);

BrightnessAuto.displayName = "BrightnessAuto";

BrightnessAuto.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default BrightnessAuto;
