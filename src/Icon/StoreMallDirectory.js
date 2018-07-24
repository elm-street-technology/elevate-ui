import React from "react";

const StoreMallDirectory = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />
  </svg>
);

StoreMallDirectory.displayName = "StoreMallDirectory";

StoreMallDirectory.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default StoreMallDirectory;
