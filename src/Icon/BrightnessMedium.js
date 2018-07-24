import React from "react";

const BrightnessMedium = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z" />
  </svg>
);

BrightnessMedium.displayName = "BrightnessMedium";

BrightnessMedium.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default BrightnessMedium;
