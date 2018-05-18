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
      d="M12.66,3.32l4.16,5.33A.83.83,0,0,1,16.16,10H7.84a.83.83,0,0,1-.66-1.35l4.16-5.33A.84.84,0,0,1,12.66,3.32Z"
    />
  </svg>
);

export default Sort;
