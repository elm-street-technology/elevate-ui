import React from "react";

const ViewColumn = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z" />
  </svg>
);

ViewColumn.displayName = "ViewColumn";

ViewColumn.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ViewColumn;
