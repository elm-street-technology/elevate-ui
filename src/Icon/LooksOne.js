import React from "react";

const LooksOne = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" />
  </svg>
);

LooksOne.displayName = "LooksOne";

LooksOne.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default LooksOne;
