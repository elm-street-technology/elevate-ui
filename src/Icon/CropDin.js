import React from "react";

const CropDin = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
  </svg>
);

CropDin.displayName = "CropDin";

CropDin.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default CropDin;
