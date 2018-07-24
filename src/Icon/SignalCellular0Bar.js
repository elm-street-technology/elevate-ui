import React from "react";

const SignalCellular0Bar = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M2 22h20V2z" />
  </svg>
);

SignalCellular0Bar.displayName = "SignalCellular0Bar";

SignalCellular0Bar.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalCellular0Bar;
