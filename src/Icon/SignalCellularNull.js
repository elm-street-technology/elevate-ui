import React from "react";

const SignalCellularNull = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z" />
  </svg>
);

SignalCellularNull.displayName = "SignalCellularNull";

SignalCellularNull.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalCellularNull;
