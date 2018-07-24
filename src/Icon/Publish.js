import React from "react";

const Publish = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" />
  </svg>
);

Publish.displayName = "Publish";

Publish.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Publish;
