import React from "react";

const ChangeHistory = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z" />
  </svg>
);

ChangeHistory.displayName = "ChangeHistory";

ChangeHistory.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ChangeHistory;
