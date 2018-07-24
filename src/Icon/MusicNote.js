import React from "react";

const MusicNote = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
  </svg>
);

MusicNote.displayName = "MusicNote";

MusicNote.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default MusicNote;
