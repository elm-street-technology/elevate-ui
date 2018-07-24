import React from "react";

const LocalConvenienceStore = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M19 7V4H5v3H2v13h8v-4h4v4h8V7h-3zm-8 3H9v1h2v1H8V9h2V8H8V7h3v3zm5 2h-1v-2h-2V7h1v2h1V7h1v5z" />
  </svg>
);

LocalConvenienceStore.displayName = "LocalConvenienceStore";

LocalConvenienceStore.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default LocalConvenienceStore;
