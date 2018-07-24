import React from "react";

const Clear = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

Clear.displayName = "Clear";

Clear.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Clear;
