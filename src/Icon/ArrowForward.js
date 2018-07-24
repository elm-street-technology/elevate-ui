import React from "react";

const ArrowForward = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
  </svg>
);

ArrowForward.displayName = "ArrowForward";

ArrowForward.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ArrowForward;
