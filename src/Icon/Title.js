import React from "react";

const Title = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M5 4v3h5.5v12h3V7H19V4z" />
  </svg>
);

Title.displayName = "Title";

Title.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Title;
