import React from "react";

const SortDesc = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M11.34,20.68,7.18,15.35A.83.83,0,0,1,7.84,14h8.32a.83.83,0,0,1,.66,1.35l-4.16,5.33A.84.84,0,0,1,11.34,20.68Z" />
  </svg>
);

SortDesc.displayName = "SortDesc";

SortDesc.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SortDesc;
