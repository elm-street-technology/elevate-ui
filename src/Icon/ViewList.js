import React from "react";

const ViewList = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z" />
  </svg>
);

ViewList.displayName = "ViewList";

ViewList.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ViewList;
