import React from "react";

const CaretRight = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M17.72,13.18l-9.59,7.5A1.5,1.5,0,0,1,5.7,19.49v-15A1.5,1.5,0,0,1,8.13,3.32l9.59,7.5A1.49,1.49,0,0,1,17.72,13.18Z" />
  </svg>
);

CaretRight.displayName = "CaretRight";

CaretRight.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default CaretRight;
