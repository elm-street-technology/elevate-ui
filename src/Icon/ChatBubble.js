import React from "react";

const ChatBubble = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
  </svg>
);

ChatBubble.displayName = "ChatBubble";

ChatBubble.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ChatBubble;
