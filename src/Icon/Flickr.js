import React from "react";

const Flickr = ({ size, color, ...props }) => (
  <svg
    {...props}
    viewBox="0 0 1792 1792"
    width={size}
    height={size}
    fill={color}
  >
    <path d="M1376 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960zm-550 768q0-88-62-150t-150-62-150 62-62 150 62 150 150 62 150-62 62-150zm564 0q0-88-62-150t-150-62-150 62-62 150 62 150 150 62 150-62 62-150z" />
  </svg>
);

Flickr.displayName = "Flickr";

Flickr.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Flickr;
