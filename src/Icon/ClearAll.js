import React from "react";

const ClearAll = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z" />
  </svg>
);

ClearAll.displayName = "ClearAll";

ClearAll.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ClearAll;
