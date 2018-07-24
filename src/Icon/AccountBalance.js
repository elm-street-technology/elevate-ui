import React from "react";

const AccountBalance = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" />
  </svg>
);

AccountBalance.displayName = "AccountBalance";

AccountBalance.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default AccountBalance;
