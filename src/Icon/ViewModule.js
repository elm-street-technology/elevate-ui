import React from "react";

const ViewModule = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" />
  </svg>
);

ViewModule.displayName = "ViewModule";

ViewModule.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ViewModule;
