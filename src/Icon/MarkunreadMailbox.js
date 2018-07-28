import React from "react";

const MarkunreadMailbox = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
  </svg>
);

MarkunreadMailbox.displayName = "MarkunreadMailbox";

MarkunreadMailbox.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default MarkunreadMailbox;
