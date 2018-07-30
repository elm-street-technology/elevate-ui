import React from "react";

const Facebook = ({ size, color, ...props }) => (
  <svg
    {...props}
    viewBox="0 0 1792 1792"
    width={size}
    height={size}
    fill={color}
  >
    <path d="M1376 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-188v-595h199l30-232h-229v-148q0-56 23.5-84t91.5-28l122-1v-207q-63-9-178-9-136 0-217.5 80t-81.5 226v171h-200v232h200v595h-532q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960z" />
  </svg>
);

Facebook.displayName = "Facebook";

Facebook.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Facebook;
