import React from "react";

const Highlight = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.875L4.914 4.46l2.12 2.122L5.62 7.997zm13.46.71l2.123-2.12 1.414 1.414L18.375 8z" />
  </svg>
);

Highlight.displayName = "Highlight";

Highlight.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Highlight;
