import React from "react";

const FormatTextdirectionRToL = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M10 10v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4zm-2 7v-3l-4 4 4 4v-3h12v-2H8z" />
  </svg>
);

FormatTextdirectionRToL.displayName = "FormatTextdirectionRToL";

FormatTextdirectionRToL.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FormatTextdirectionRToL;
