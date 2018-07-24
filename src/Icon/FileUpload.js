import React from "react";

const FileUpload = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
  </svg>
);

FileUpload.displayName = "FileUpload";

FileUpload.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FileUpload;
