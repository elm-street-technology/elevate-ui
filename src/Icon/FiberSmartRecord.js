import React from "react";

const FiberSmartRecord = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M 9 4 A 8 8 0 0 1 9 20 A 8 8 0 0 1 9 4 M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z" />
  </svg>
);

FiberSmartRecord.displayName = "FiberSmartRecord";

FiberSmartRecord.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FiberSmartRecord;
