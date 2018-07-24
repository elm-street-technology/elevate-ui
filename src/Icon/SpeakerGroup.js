import React from "react";

const SpeakerGroup = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8zM14 3c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z M6 5H4v16c0 1.1.89 2 2 2h10v-2H6V5z M 14 10 A 2.5 2.5 0 0 1 14 15 A 2.5 2.5 0 0 1 14 10" />
  </svg>
);

SpeakerGroup.displayName = "SpeakerGroup";

SpeakerGroup.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SpeakerGroup;
