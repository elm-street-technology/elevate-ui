import React from "react";

const SignalWifiStatusbarNull26X24Px = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 26 24" width={size} height={size} fill={color}>
    <path d="M13 4c4.25 0 7.62 1.51 9.68 2.75L13 18.8 3.33 6.75C5.38 5.51 8.75 4 13 4m0-2C5.74 2 .9 5.96.42 6.32l12.57 15.66.01.02.01-.01L25.58 6.32C25.1 5.96 20.26 2 13 2z" />
  </svg>
);

SignalWifiStatusbarNull26X24Px.displayName = "SignalWifiStatusbarNull26X24Px";

SignalWifiStatusbarNull26X24Px.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalWifiStatusbarNull26X24Px;
