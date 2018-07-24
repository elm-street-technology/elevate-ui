import React from "react";

const CropSquare = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z" />
  </svg>
);

CropSquare.displayName = "CropSquare";

CropSquare.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default CropSquare;
