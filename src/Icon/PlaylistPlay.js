import React from "react";

const PlaylistPlay = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M 4 10 H 16 V 12 H 4 z M 4 6 H 16 V 8 H 4 z M 4 14 H 12 V 16 H 4 z M 14 14 L 14 20 L 19 17 z" />
  </svg>
);

PlaylistPlay.displayName = "PlaylistPlay";

PlaylistPlay.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default PlaylistPlay;
