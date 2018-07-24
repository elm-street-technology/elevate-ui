import React from "react";

const PhoneAndroid = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z" />
  </svg>
);

PhoneAndroid.displayName = "PhoneAndroid";

PhoneAndroid.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default PhoneAndroid;
