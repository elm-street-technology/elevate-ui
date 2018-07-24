import React from "react";

const Brightness3 = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z" />
  </svg>
);

Brightness3.displayName = "Brightness3";

Brightness3.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Brightness3;
