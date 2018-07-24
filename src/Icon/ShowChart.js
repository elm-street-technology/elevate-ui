import React from "react";

const ShowChart = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
  </svg>
);

ShowChart.displayName = "ShowChart";

ShowChart.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ShowChart;
