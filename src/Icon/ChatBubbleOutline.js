import React from "react";

const ChatBubbleOutline = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
  </svg>
);

ChatBubbleOutline.displayName = "ChatBubbleOutline";

ChatBubbleOutline.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ChatBubbleOutline;
