import React from "react";

const ViewStream = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z" />
  </svg>
);

ViewStream.displayName = "ViewStream";

ViewStream.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ViewStream;
