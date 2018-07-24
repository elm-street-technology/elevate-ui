import React from "react";

const CallMissedOutgoing = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z" />
  </svg>
);

CallMissedOutgoing.displayName = "CallMissedOutgoing";

CallMissedOutgoing.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default CallMissedOutgoing;
