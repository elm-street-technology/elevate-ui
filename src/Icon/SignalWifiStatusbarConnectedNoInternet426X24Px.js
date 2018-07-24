import React from "react";

const SignalWifiStatusbarConnectedNoInternet426X24Px = ({
  size,
  color,
  ...props
}) => (
  <svg {...props} viewBox="0 0 26 24" width={size} height={size} fill={color}>
    <path d="M22 22h2v-2h-2v2zM13 2C5.74 2 .9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24l1.35-1.68C25.1 5.96 20.26 2 13 2zm9 16h2v-8h-2v8z" />
  </svg>
);

SignalWifiStatusbarConnectedNoInternet426X24Px.displayName =
  "SignalWifiStatusbarConnectedNoInternet426X24Px";

SignalWifiStatusbarConnectedNoInternet426X24Px.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalWifiStatusbarConnectedNoInternet426X24Px;
