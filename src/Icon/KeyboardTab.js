import React from "react";

const KeyboardTab = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z" />
  </svg>
);

KeyboardTab.displayName = "KeyboardTab";

KeyboardTab.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default KeyboardTab;
