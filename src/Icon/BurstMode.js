import React from "react";

const BurstMode = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM11 17l2.5-3.15L15.29 16l2.5-3.22L21 17H11z" />
  </svg>
);

BurstMode.displayName = "BurstMode";

BurstMode.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default BurstMode;
