import React from "react";

const CheckBoxOutlineBlank = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  </svg>
);

CheckBoxOutlineBlank.displayName = "CheckBoxOutlineBlank";

CheckBoxOutlineBlank.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default CheckBoxOutlineBlank;
