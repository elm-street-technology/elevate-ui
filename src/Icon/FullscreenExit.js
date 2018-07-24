import React from "react";

const FullscreenExit = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
  </svg>
);

FullscreenExit.displayName = "FullscreenExit";

FullscreenExit.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FullscreenExit;
