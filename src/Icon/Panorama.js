import React from "react";

const Panorama = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z" />
  </svg>
);

Panorama.displayName = "Panorama";

Panorama.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Panorama;
