import React from "react";

const SignalWifiStatusbarConnectedNoInternet126X24Px = ({
  size,
  color,
  ...props
}) => (
  <svg {...props} viewBox="0 0 26 24" width={size} height={size} fill={color}>
    <path d="M24.24 8l1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z M7.34 14.95L13 21.99V22v-.01l5.66-7.05C18.44 14.78 16.27 13 13 13s-5.44 1.78-5.66 1.95zM22 22h2v-2h-2v2zm0-12v8h2v-8h-2z" />
  </svg>
);

SignalWifiStatusbarConnectedNoInternet126X24Px.displayName =
  "SignalWifiStatusbarConnectedNoInternet126X24Px";

SignalWifiStatusbarConnectedNoInternet126X24Px.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalWifiStatusbarConnectedNoInternet126X24Px;
