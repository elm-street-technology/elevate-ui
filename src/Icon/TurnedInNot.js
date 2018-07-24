import React from "react";

const TurnedInNot = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
  </svg>
);

TurnedInNot.displayName = "TurnedInNot";

TurnedInNot.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default TurnedInNot;
