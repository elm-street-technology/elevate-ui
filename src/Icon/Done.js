import React from "react";

const Done = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
);

Done.displayName = "Done";

Done.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Done;
