import React from "react";

const CaretRight = ({ width = 24, height = 24, ...rest }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...rest}
  >
    <path
      fill="currentColor"
      d="M17.72,13.18l-9.59,7.5A1.5,1.5,0,0,1,5.7,19.49v-15A1.5,1.5,0,0,1,8.13,3.32l9.59,7.5A1.49,1.49,0,0,1,17.72,13.18Z"
    />
  </svg>
);

export default CaretRight;
