import React from "react";

const DragHandle = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
  </svg>
);

DragHandle.displayName = "DragHandle";

DragHandle.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default DragHandle;
