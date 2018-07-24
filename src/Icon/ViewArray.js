import React from "react";

const ViewArray = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z" />
  </svg>
);

ViewArray.displayName = "ViewArray";

ViewArray.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ViewArray;
