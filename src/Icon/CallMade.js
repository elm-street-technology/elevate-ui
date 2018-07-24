import React from "react";

const CallMade = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" />
  </svg>
);

CallMade.displayName = "CallMade";

CallMade.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default CallMade;
