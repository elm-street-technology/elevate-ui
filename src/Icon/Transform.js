import React from "react";

const Transform = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z" />
  </svg>
);

Transform.displayName = "Transform";

Transform.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Transform;
