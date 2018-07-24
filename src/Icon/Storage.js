import React from "react";

const Storage = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z" />
  </svg>
);

Storage.displayName = "Storage";

Storage.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Storage;
