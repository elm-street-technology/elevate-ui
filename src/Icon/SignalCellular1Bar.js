import React from "react";

const SignalCellular1Bar = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M2 22h20V2z M12 12L2 22h10z" />
  </svg>
);

SignalCellular1Bar.displayName = "SignalCellular1Bar";

SignalCellular1Bar.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalCellular1Bar;
