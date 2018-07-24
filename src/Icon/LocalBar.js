import React from "react";

const LocalBar = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z" />
  </svg>
);

LocalBar.displayName = "LocalBar";

LocalBar.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default LocalBar;
