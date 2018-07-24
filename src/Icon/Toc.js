import React from "react";

const Toc = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z" />
  </svg>
);

Toc.displayName = "Toc";

Toc.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Toc;
