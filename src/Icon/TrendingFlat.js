import React from "react";

const TrendingFlat = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M22 12l-4-4v3H3v2h15v3z" />
  </svg>
);

TrendingFlat.displayName = "TrendingFlat";

TrendingFlat.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default TrendingFlat;
