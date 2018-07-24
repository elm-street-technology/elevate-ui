import React from "react";

const ImportExport = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z" />
  </svg>
);

ImportExport.displayName = "ImportExport";

ImportExport.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ImportExport;
