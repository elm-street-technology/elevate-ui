import React from "react";

const SignalCellularConnectedNoInternet4Bar = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z" />
  </svg>
);

SignalCellularConnectedNoInternet4Bar.displayName =
  "SignalCellularConnectedNoInternet4Bar";

SignalCellularConnectedNoInternet4Bar.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalCellularConnectedNoInternet4Bar;
