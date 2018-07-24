import React from "react";

const LaptopWindows = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z" />
  </svg>
);

LaptopWindows.displayName = "LaptopWindows";

LaptopWindows.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default LaptopWindows;
