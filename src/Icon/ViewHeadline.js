import React from "react";

const ViewHeadline = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z" />
  </svg>
);

ViewHeadline.displayName = "ViewHeadline";

ViewHeadline.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ViewHeadline;
