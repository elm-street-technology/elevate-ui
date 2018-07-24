import React from "react";

const BorderAll = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z" />
  </svg>
);

BorderAll.displayName = "BorderAll";

BorderAll.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default BorderAll;
