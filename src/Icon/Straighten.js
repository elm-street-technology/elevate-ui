import React from "react";

const Straighten = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z" />
  </svg>
);

Straighten.displayName = "Straighten";

Straighten.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Straighten;
