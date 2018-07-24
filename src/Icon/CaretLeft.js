import React from "react";

const CaretLeft = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path
      fill="currentColor"
      d="M6.28,10.82l9.59-7.5A1.5,1.5,0,0,1,18.3,4.51v15a1.5,1.5,0,0,1-2.43,1.19l-9.59-7.5A1.49,1.49,0,0,1,6.28,10.82Z"
    />
  </svg>
);

export default CaretLeft;
