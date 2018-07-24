import React from "react";

const SpaceBar = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M18 9v4H6V9H4v6h16V9z" />
  </svg>
);

SpaceBar.displayName = "SpaceBar";

SpaceBar.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SpaceBar;
