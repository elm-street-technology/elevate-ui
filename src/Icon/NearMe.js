import React from "react";

const NearMe = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
  </svg>
);

NearMe.displayName = "NearMe";

NearMe.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default NearMe;
