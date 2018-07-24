import React from "react";

const Tablet = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z" />
  </svg>
);

Tablet.displayName = "Tablet";

Tablet.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Tablet;
