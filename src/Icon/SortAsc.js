import React from "react";

const SortAsc = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M12.66,3.32l4.16,5.33A.83.83,0,0,1,16.16,10H7.84a.83.83,0,0,1-.66-1.35l4.16-5.33A.84.84,0,0,1,12.66,3.32Z" />
  </svg>
);

SortAsc.displayName = "SortAsc";

SortAsc.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SortAsc;
