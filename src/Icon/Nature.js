import React from "react";

const Nature = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M13 16.12c3.47-.41 6.17-3.36 6.17-6.95 0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H5v2h14v-2h-6v-3.88z" />
  </svg>
);

Nature.displayName = "Nature";

Nature.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Nature;