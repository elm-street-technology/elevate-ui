import React from "react";

const PlayArrow = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

PlayArrow.displayName = "PlayArrow";

PlayArrow.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default PlayArrow;
