import React from "react";

const Pause = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

Pause.displayName = "Pause";

Pause.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Pause;
