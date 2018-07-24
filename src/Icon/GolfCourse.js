import React from "react";

const GolfCourse = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z M 19.5 18 A 1.5 1.5 0 0 1 19.5 21 A 1.5 1.5 0 0 1 19.5 18" />
  </svg>
);

GolfCourse.displayName = "GolfCourse";

GolfCourse.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default GolfCourse;
