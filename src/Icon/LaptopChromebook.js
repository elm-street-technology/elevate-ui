import React from "react";

const LaptopChromebook = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z" />
  </svg>
);

LaptopChromebook.displayName = "LaptopChromebook";

LaptopChromebook.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default LaptopChromebook;
