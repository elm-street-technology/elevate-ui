import React from "react";

const KeyboardCapslock = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M12 8.41L16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z" />
  </svg>
);

KeyboardCapslock.displayName = "KeyboardCapslock";

KeyboardCapslock.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default KeyboardCapslock;
