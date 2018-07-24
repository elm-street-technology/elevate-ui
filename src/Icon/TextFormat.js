import React from "react";

const TextFormat = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z" />
  </svg>
);

TextFormat.displayName = "TextFormat";

TextFormat.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default TextFormat;
