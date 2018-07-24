import React from "react";

const HourglassFull = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z" />
  </svg>
);

HourglassFull.displayName = "HourglassFull";

HourglassFull.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default HourglassFull;
