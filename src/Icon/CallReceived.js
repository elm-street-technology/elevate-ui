import React from "react";

const CallReceived = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z" />
  </svg>
);

CallReceived.displayName = "CallReceived";

CallReceived.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default CallReceived;
