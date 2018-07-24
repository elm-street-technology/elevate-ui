import React from "react";

const ExposurePlus1 = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M10 7H8v4H4v2h4v4h2v-4h4v-2h-4V7zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3v13z" />
  </svg>
);

ExposurePlus1.displayName = "ExposurePlus1";

ExposurePlus1.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ExposurePlus1;
