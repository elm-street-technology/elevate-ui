import React from "react";

const FiberManualRecord = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M 12 4 A 8 8 0 0 0 12 20 A 8 8 0 0 0 12 4" />
  </svg>
);

FiberManualRecord.displayName = "FiberManualRecord";

FiberManualRecord.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FiberManualRecord;
