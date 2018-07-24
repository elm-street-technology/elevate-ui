import React from "react";

const Sort = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
  </svg>
);

Sort.displayName = "Sort";

Sort.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Sort;
