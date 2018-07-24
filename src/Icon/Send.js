import React from "react";

const Send = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

Send.displayName = "Send";

Send.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Send;
