import React from "react";

const SignalWifiStatusbar1Bar26X24Px = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 26 24" width={size} height={size} fill={color}>
    <path d="M13 21.99l5.66-7.05C18.44 14.78 16.27 13 13 13s-5.44 1.78-5.66 1.95L13 21.99z M13.01 21.99L25.58 6.32C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01z" />
  </svg>
);

SignalWifiStatusbar1Bar26X24Px.displayName = "SignalWifiStatusbar1Bar26X24Px";

SignalWifiStatusbar1Bar26X24Px.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalWifiStatusbar1Bar26X24Px;
