// default template
module.exports = ({ name, viewBox, pathData }) => `import React from "react";

const ${name} = ({ size, color, ...props }) => (
  <svg {...props} viewBox="${viewBox}" width={size} height={size} fill={color}>
    <path d="${pathData}" />
  </svg>
);

${name}.displayName = "${name}";

${name}.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ${name};`;
