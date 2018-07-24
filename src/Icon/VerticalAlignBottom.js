import React from "react";

const VerticalAlignBottom = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" />
  </svg>
);

VerticalAlignBottom.displayName = "VerticalAlignBottom";

VerticalAlignBottom.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default VerticalAlignBottom;
