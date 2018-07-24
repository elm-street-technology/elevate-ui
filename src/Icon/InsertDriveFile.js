import React from "react";

const InsertDriveFile = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" />
  </svg>
);

InsertDriveFile.displayName = "InsertDriveFile";

InsertDriveFile.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default InsertDriveFile;
