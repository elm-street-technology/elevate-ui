import React from "react";

const SignalWifiStatusbar3Bar26X24Px = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 26 24" width={size} height={size} fill={color}>
    <path d="M13.01 21.99l9.43-11.75C22.07 9.97 18.44 7 13 7c-5.44 0-9.07 2.97-9.44 3.24l9.43 11.75h.02z M13.01 21.99L25.58 6.32C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01z" />
  </svg>
);

SignalWifiStatusbar3Bar26X24Px.displayName = "SignalWifiStatusbar3Bar26X24Px";

SignalWifiStatusbar3Bar26X24Px.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalWifiStatusbar3Bar26X24Px;
