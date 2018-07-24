import React from "react";

const Power = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z" />
  </svg>
);

Power.displayName = "Power";

Power.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Power;
