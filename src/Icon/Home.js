import React from "react";

const Home = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

Home.displayName = "Home";

Home.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Home;
