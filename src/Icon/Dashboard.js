import React from "react";

const Dashboard = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
  </svg>
);

Dashboard.displayName = "Dashboard";

Dashboard.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Dashboard;
