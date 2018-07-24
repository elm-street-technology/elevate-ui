import React from "react";

const Stop = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M6 6h12v12H6z" />
  </svg>
);

Stop.displayName = "Stop";

Stop.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Stop;
