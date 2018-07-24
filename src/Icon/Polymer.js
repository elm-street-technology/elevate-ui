import React from "react";

const Polymer = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z" />
  </svg>
);

Polymer.displayName = "Polymer";

Polymer.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Polymer;
