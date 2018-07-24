import React from "react";

const AssistantPhoto = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
  </svg>
);

AssistantPhoto.displayName = "AssistantPhoto";

AssistantPhoto.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default AssistantPhoto;
