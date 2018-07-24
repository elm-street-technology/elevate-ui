import React from "react";

const SubdirectoryArrowRight = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" />
  </svg>
);

SubdirectoryArrowRight.displayName = "SubdirectoryArrowRight";

SubdirectoryArrowRight.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SubdirectoryArrowRight;
