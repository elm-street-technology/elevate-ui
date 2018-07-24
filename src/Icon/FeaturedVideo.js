import React from "react";

const FeaturedVideo = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z" />
  </svg>
);

FeaturedVideo.displayName = "FeaturedVideo";

FeaturedVideo.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FeaturedVideo;
