import React from "react";

const BubbleChart = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M 7.2 11.2 A 3.2 3.2 0 0 0 7.2 17.6 A 3.2 3.2 0 0 0 7.2 11.2 M 14.8 16 A 2 2 0 0 1 14.8 20 A 2 2 0 0 1 14.8 16 M 15.2 4.000000000000001 A 4.8 4.8 0 0 0 15.2 13.600000000000001 A 4.8 4.8 0 0 0 15.2 4.000000000000001" />
  </svg>
);

BubbleChart.displayName = "BubbleChart";

BubbleChart.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default BubbleChart;
