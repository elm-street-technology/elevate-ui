import React from "react";

const AirlineSeatFlat = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M22 11v2H9V7h9c2.21 0 4 1.79 4 4zM2 14v2h6v2h8v-2h6v-2H2zm5.14-1.9c1.16-1.19 1.14-3.08-.04-4.24-1.19-1.16-3.08-1.14-4.24.04-1.16 1.19-1.14 3.08.04 4.24 1.19 1.16 3.08 1.14 4.24-.04z" />
  </svg>
);

AirlineSeatFlat.displayName = "AirlineSeatFlat";

AirlineSeatFlat.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default AirlineSeatFlat;
