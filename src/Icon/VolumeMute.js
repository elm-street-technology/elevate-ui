import React from "react";

const VolumeMute = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M7 9v6h4l5 5V4l-5 5H7z" />
  </svg>
);

VolumeMute.displayName = "VolumeMute";

VolumeMute.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default VolumeMute;
