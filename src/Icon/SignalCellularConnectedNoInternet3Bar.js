import React from "react";

const SignalCellularConnectedNoInternet3Bar = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M22 8V2L2 22h16V8z M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z" />
  </svg>
);

SignalCellularConnectedNoInternet3Bar.displayName =
  "SignalCellularConnectedNoInternet3Bar";

SignalCellularConnectedNoInternet3Bar.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalCellularConnectedNoInternet3Bar;
