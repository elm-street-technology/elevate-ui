import React from "react";

const Layers = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" />
  </svg>
);

Layers.displayName = "Layers";

Layers.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Layers;
