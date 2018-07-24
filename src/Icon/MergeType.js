import React from "react";

const MergeType = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z" />
  </svg>
);

MergeType.displayName = "MergeType";

MergeType.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default MergeType;
