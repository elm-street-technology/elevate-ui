import React from "react";

const ShortText = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M4 9h16v2H4zm0 4h10v2H4z" />
  </svg>
);

ShortText.displayName = "ShortText";

ShortText.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ShortText;
