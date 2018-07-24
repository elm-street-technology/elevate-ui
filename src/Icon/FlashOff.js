import React from "react";

const FlashOff = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M3.27 3L2 4.27l5 5V13h3v9l3.58-6.14L17.73 20 19 18.73 3.27 3zM17 10h-4l4-8H7v2.18l8.46 8.46L17 10z" />
  </svg>
);

FlashOff.displayName = "FlashOff";

FlashOff.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FlashOff;
