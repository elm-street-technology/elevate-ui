import React from "react";

const ModeComment = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
  </svg>
);

ModeComment.displayName = "ModeComment";

ModeComment.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ModeComment;
