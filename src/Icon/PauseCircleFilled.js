import React from "react";

const PauseCircleFilled = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
  </svg>
);

PauseCircleFilled.displayName = "PauseCircleFilled";

PauseCircleFilled.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default PauseCircleFilled;
