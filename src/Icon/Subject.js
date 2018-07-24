import React from "react";

const Subject = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z" />
  </svg>
);

Subject.displayName = "Subject";

Subject.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Subject;
