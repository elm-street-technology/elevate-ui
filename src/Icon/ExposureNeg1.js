import React from "react";

const ExposureNeg1 = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z" />
  </svg>
);

ExposureNeg1.displayName = "ExposureNeg1";

ExposureNeg1.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ExposureNeg1;
