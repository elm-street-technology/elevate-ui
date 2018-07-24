import React from "react";

const Forward = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M12 8V4l8 8-8 8v-4H4V8z" />
  </svg>
);

Forward.displayName = "Forward";

Forward.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Forward;
