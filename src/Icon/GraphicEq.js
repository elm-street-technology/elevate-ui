import React from "react";

const GraphicEq = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z" />
  </svg>
);

GraphicEq.displayName = "GraphicEq";

GraphicEq.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default GraphicEq;
