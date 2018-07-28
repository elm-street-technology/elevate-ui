import React from "react";

const StayPrimaryPortrait = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
  </svg>
);

StayPrimaryPortrait.displayName = "StayPrimaryPortrait";

StayPrimaryPortrait.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default StayPrimaryPortrait;
