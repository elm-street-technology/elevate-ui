import React from "react";

const Bed = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path
      fill="currentColor"
      d="M20.43,9.43H9a1.28,1.28,0,0,0,.12-.52V8.49A1.27,1.27,0,0,0,7.81,7.23H5.19A1.27,1.27,0,0,0,3.93,8.49v.42a1.28,1.28,0,0,0,.12.52H3.2V3.93a.73.73,0,0,0-.73-.73H1.73A.73.73,0,0,0,1,3.93V20.07a.73.73,0,0,0,.73.73h.74a.73.73,0,0,0,.73-.73V15.3H6.13V10.17h.74V15.3H20.8v4.77a.73.73,0,0,0,.73.73h.74a.73.73,0,0,0,.73-.73V12A2.58,2.58,0,0,0,20.43,9.43ZM8.33,8.91a.52.52,0,0,1-.52.52H5.19a.52.52,0,0,1-.52-.52V8.49A.52.52,0,0,1,5.19,8H7.81a.52.52,0,0,1,.52.52v.42Z"
    />
  </svg>
);

Bed.displayName = "Bed";

Bed.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Bed;
