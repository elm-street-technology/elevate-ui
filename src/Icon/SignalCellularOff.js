import React from "react";

const SignalCellularOff = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M21 1l-8.59 8.59L21 18.18V1zM4.77 4.5L3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73 4.77 4.5z" />
  </svg>
);

SignalCellularOff.displayName = "SignalCellularOff";

SignalCellularOff.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalCellularOff;
