import React from "react";

const TabletAndroid = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z" />
  </svg>
);

TabletAndroid.displayName = "TabletAndroid";

TabletAndroid.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default TabletAndroid;
