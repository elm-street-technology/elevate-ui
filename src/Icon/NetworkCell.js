import React from "react";

const NetworkCell = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M2 22h20V2z M17 7L2 22h15z" />
  </svg>
);

NetworkCell.displayName = "NetworkCell";

NetworkCell.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default NetworkCell;
