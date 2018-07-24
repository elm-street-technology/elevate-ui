import React from "react";

const SignalCellularConnectedNoInternet1Bar = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M22 8V2L2 22h16V8z M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z" />
  </svg>
);

SignalCellularConnectedNoInternet1Bar.displayName =
  "SignalCellularConnectedNoInternet1Bar";

SignalCellularConnectedNoInternet1Bar.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalCellularConnectedNoInternet1Bar;
