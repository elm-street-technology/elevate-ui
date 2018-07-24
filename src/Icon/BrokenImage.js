import React from "react";

const BrokenImage = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z" />
  </svg>
);

BrokenImage.displayName = "BrokenImage";

BrokenImage.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default BrokenImage;
