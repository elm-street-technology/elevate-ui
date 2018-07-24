import React from "react";

const GetApp = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
  </svg>
);

GetApp.displayName = "GetApp";

GetApp.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default GetApp;
