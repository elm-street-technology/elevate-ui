import React from "react";

const Details = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z" />
  </svg>
);

Details.displayName = "Details";

Details.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Details;
