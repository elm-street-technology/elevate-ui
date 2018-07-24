import React from "react";

const SdStorage = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z" />
  </svg>
);

SdStorage.displayName = "SdStorage";

SdStorage.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SdStorage;
