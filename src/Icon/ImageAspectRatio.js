import React from "react";

const ImageAspectRatio = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" />
  </svg>
);

ImageAspectRatio.displayName = "ImageAspectRatio";

ImageAspectRatio.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ImageAspectRatio;
