import React from "react";

const SignalCellular3Bar = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M2 22h20V2z M17 7L2 22h15z" />
  </svg>
);

SignalCellular3Bar.displayName = "SignalCellular3Bar";

SignalCellular3Bar.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalCellular3Bar;
