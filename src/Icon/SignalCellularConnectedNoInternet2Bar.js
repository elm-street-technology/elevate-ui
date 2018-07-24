import React from "react";

const SignalCellularConnectedNoInternet2Bar = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M22 8V2L2 22h16V8z M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z" />
  </svg>
);

SignalCellularConnectedNoInternet2Bar.displayName =
  "SignalCellularConnectedNoInternet2Bar";

SignalCellularConnectedNoInternet2Bar.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalCellularConnectedNoInternet2Bar;
