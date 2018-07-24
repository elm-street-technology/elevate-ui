import React from "react";

const Mms = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 14l3.5-4.5 2.5 3.01L14.5 8l4.5 6H5z" />
  </svg>
);

Mms.displayName = "Mms";

Mms.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Mms;
