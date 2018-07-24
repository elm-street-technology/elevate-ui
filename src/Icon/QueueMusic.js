import React from "react";

const QueueMusic = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z" />
  </svg>
);

QueueMusic.displayName = "QueueMusic";

QueueMusic.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default QueueMusic;
