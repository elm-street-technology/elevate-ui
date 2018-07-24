import React from "react";

const PictureInPictureAlt = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z" />
  </svg>
);

PictureInPictureAlt.displayName = "PictureInPictureAlt";

PictureInPictureAlt.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default PictureInPictureAlt;
