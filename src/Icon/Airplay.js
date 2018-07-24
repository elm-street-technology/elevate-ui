import React from "react";

const Airplay = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  </svg>
);

Airplay.displayName = "Airplay";

Airplay.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Airplay;
