import React from "react";

const TextFields = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" />
  </svg>
);

TextFields.displayName = "TextFields";

TextFields.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default TextFields;
