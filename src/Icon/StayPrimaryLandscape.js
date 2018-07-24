import React from "react";

const StayPrimaryLandscape = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z" />
  </svg>
);

StayPrimaryLandscape.displayName = "StayPrimaryLandscape";

StayPrimaryLandscape.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default StayPrimaryLandscape;
