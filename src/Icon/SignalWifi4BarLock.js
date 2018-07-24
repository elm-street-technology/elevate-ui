import React from "react";

const SignalWifi4BarLock = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-6.5-1.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.4v-2.6z" />
  </svg>
);

SignalWifi4BarLock.displayName = "SignalWifi4BarLock";

SignalWifi4BarLock.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalWifi4BarLock;
