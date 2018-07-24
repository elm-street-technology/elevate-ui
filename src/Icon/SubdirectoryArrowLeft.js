import React from "react";

const SubdirectoryArrowLeft = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" />
  </svg>
);

SubdirectoryArrowLeft.displayName = "SubdirectoryArrowLeft";

SubdirectoryArrowLeft.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SubdirectoryArrowLeft;
