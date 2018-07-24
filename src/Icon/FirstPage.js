import React from "react";

const FirstPage = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" />
  </svg>
);

FirstPage.displayName = "FirstPage";

FirstPage.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FirstPage;
