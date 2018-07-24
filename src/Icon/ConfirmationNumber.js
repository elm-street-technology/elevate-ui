import React from "react";

const ConfirmationNumber = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z" />
  </svg>
);

ConfirmationNumber.displayName = "ConfirmationNumber";

ConfirmationNumber.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ConfirmationNumber;
