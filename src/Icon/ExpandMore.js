import React from "react";

const ExpandMore = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </svg>
);

ExpandMore.displayName = "ExpandMore";

ExpandMore.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ExpandMore;
