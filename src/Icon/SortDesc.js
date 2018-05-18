import React from "react";

const Sort = ({ width = 24, height = 24, ...rest }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...rest}
  >
    <path
      fill="currentColor"
      d="M11.34,20.68,7.18,15.35A.83.83,0,0,1,7.84,14h8.32a.83.83,0,0,1,.66,1.35l-4.16,5.33A.84.84,0,0,1,11.34,20.68Z"
    />
  </svg>
);

export default Sort;
