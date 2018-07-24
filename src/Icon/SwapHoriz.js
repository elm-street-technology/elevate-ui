import React from "react";

const SwapHoriz = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
  </svg>
);

SwapHoriz.displayName = "SwapHoriz";

SwapHoriz.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SwapHoriz;
