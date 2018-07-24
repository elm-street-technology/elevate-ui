import React from "react";

const RssFeed = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z M 6.18 15.64 A 2.18 2.18 0 0 1 6.18 20 A 2.18 2.18 0 0 1 6.18 15.64" />
  </svg>
);

RssFeed.displayName = "RssFeed";

RssFeed.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default RssFeed;
