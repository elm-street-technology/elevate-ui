import React from "react";

const CompareArrows = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z" />
  </svg>
);

CompareArrows.displayName = "CompareArrows";

CompareArrows.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default CompareArrows;
