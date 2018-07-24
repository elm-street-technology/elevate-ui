import React from "react";

const SignalCellular4Bar = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M2 22h20V2z" />
  </svg>
);

SignalCellular4Bar.displayName = "SignalCellular4Bar";

SignalCellular4Bar.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalCellular4Bar;
