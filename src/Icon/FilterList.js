import React from "react";

const FilterList = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
  </svg>
);

FilterList.displayName = "FilterList";

FilterList.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FilterList;
