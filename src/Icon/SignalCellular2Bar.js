import React from "react";

const SignalCellular2Bar = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M2 22h20V2z M14 10L2 22h12z" />
  </svg>
);

SignalCellular2Bar.displayName = "SignalCellular2Bar";

SignalCellular2Bar.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalCellular2Bar;
