import React from "react";

const Fullscreen = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
  </svg>
);

Fullscreen.displayName = "Fullscreen";

Fullscreen.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Fullscreen;
