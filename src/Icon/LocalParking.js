import React from "react";

const LocalParking = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z" />
  </svg>
);

LocalParking.displayName = "LocalParking";

LocalParking.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default LocalParking;
