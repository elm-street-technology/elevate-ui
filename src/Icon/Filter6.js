import React from "react";

const Filter6 = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-2c0-1.11-.9-2-2-2h-2V7h4V5h-4c-1.1 0-2 .89-2 2v6c0 1.11.9 2 2 2zm0-4h2v2h-2v-2z" />
  </svg>
);

Filter6.displayName = "Filter6";

Filter6.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Filter6;
