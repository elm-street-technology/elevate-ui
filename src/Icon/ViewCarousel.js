import React from "react";

const ViewCarousel = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z" />
  </svg>
);

ViewCarousel.displayName = "ViewCarousel";

ViewCarousel.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ViewCarousel;
