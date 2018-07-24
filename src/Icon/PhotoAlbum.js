import React from "react";

const PhotoAlbum = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm0 15l3-3.86 2.14 2.58 3-3.86L18 19H6z" />
  </svg>
);

PhotoAlbum.displayName = "PhotoAlbum";

PhotoAlbum.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default PhotoAlbum;
