import React from "react";

const BorderStyle = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 3v18h2V5h16V3H3zm16 6h2V7h-2v2z" />
  </svg>
);

BorderStyle.displayName = "BorderStyle";

BorderStyle.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default BorderStyle;
