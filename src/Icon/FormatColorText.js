import React from "react";

const FormatColorText = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M0 20h24v4H0z M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z" />
  </svg>
);

FormatColorText.displayName = "FormatColorText";

FormatColorText.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FormatColorText;
