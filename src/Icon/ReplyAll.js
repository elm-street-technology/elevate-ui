import React from "react";

const ReplyAll = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" />
  </svg>
);

ReplyAll.displayName = "ReplyAll";

ReplyAll.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ReplyAll;
