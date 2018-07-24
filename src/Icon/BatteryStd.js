import React from "react";

const BatteryStd = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
  </svg>
);

BatteryStd.displayName = "BatteryStd";

BatteryStd.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default BatteryStd;
