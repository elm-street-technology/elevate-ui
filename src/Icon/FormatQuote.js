import React from "react";

const FormatQuote = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
  </svg>
);

FormatQuote.displayName = "FormatQuote";

FormatQuote.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FormatQuote;
