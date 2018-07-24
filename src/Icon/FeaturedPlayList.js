import React from "react";

const FeaturedPlayList = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z" />
  </svg>
);

FeaturedPlayList.displayName = "FeaturedPlayList";

FeaturedPlayList.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FeaturedPlayList;
