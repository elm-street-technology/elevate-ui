import React from "react";

const CallMissed = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z" />
  </svg>
);

CallMissed.displayName = "CallMissed";

CallMissed.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default CallMissed;
