import React from "react";

const SignalCellularConnectedNoInternet0Bar = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M22 8V2L2 22h16V8z M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z" />
  </svg>
);

SignalCellularConnectedNoInternet0Bar.displayName =
  "SignalCellularConnectedNoInternet0Bar";

SignalCellularConnectedNoInternet0Bar.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalCellularConnectedNoInternet0Bar;
