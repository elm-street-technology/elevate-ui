import React from "react";

const FormatTextdirectionLToR = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm12 8l-4-4v3H5v2h12v3l4-4z" />
  </svg>
);

FormatTextdirectionLToR.displayName = "FormatTextdirectionLToR";

FormatTextdirectionLToR.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FormatTextdirectionLToR;
