import React from "react";

const Equalizer = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z" />
  </svg>
);

Equalizer.displayName = "Equalizer";

Equalizer.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Equalizer;
