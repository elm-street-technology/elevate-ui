import React from "react";

const RemoveCircleOutline = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
);

RemoveCircleOutline.displayName = "RemoveCircleOutline";

RemoveCircleOutline.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default RemoveCircleOutline;
