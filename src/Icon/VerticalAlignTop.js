import React from "react";

const VerticalAlignTop = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" />
  </svg>
);

VerticalAlignTop.displayName = "VerticalAlignTop";

VerticalAlignTop.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default VerticalAlignTop;
