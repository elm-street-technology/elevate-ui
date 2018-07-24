import React from "react";

const LastPage = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" />
  </svg>
);

LastPage.displayName = "LastPage";

LastPage.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default LastPage;
