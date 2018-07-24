import React from "react";

const SignalWifiStatusbar4Bar26X24Px = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 26 24" width={size} height={size} fill={color}>
    <path d="M13.01 21.99L25.58 6.32C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01z" />
  </svg>
);

SignalWifiStatusbar4Bar26X24Px.displayName = "SignalWifiStatusbar4Bar26X24Px";

SignalWifiStatusbar4Bar26X24Px.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalWifiStatusbar4Bar26X24Px;
