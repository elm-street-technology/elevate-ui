import React from "react";

const SignalWifiStatusbarConnectedNoInternet26X24Px = ({
  size,
  color,
  ...props
}) => (
  <svg {...props} viewBox="0 0 26 24" width={size} height={size} fill={color}>
    <path d="M24.24 8l1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z M22 22h2v-2h-2v2zm0-12v8h2v-8h-2z" />
  </svg>
);

SignalWifiStatusbarConnectedNoInternet26X24Px.displayName =
  "SignalWifiStatusbarConnectedNoInternet26X24Px";

SignalWifiStatusbarConnectedNoInternet26X24Px.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalWifiStatusbarConnectedNoInternet26X24Px;
