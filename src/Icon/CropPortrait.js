import React from "react";

const CropPortrait = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z" />
  </svg>
);

CropPortrait.displayName = "CropPortrait";

CropPortrait.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default CropPortrait;
