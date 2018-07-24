import React from "react";

const Dehaze = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z" />
  </svg>
);

Dehaze.displayName = "Dehaze";

Dehaze.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Dehaze;
