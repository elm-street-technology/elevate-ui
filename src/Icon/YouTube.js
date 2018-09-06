import React from "react";

const YouTube = ({ size, color, ...props }) => (
  <svg
    {...props}
    viewBox="0 0 1792 1792"
    width={size}
    height={size}
    fill={color}
  >
    <path d="M1039.05,1031q-33.74,0-62.75,36.44V921H916.24v447.36H976.3V1336q30.36,37.11,62.75,37.11,36.43,0,47.91-37.11,6.07-18.23,6.07-67.48V1135.54q0-49.26-6.07-66.8Q1075.48,1031,1039.05,1031ZM1033,1273.19q0,45.21-26.32,45.21-15.52,0-30.36-14.84V1100.45q14.84-14.84,30.36-14.84,26.33,0,26.32,45.21ZM803.56,1035h60.05v333.33H803.56V1331.9q-36.43,41.16-68.83,41.16-31,0-39.13-25-5.4-16.18-5.4-49.26V1035h60v245.62q0,21.59.68,23.61,2,14.18,14.17,14.17,18.21,0,38.46-28.34Zm49.26-389.34V504q0-46.56,29-46.56t29,46.56v141.7q0,47.24-29,47.24T852.82,645.66ZM470.9,921H681.43v63.42h-72.2v383.94H541.75V984.39H470.9Zm760.46,110q-45.88,0-72.2,34.42-18.9,25-18.9,78.27v116.73q0,53.31,19.57,78.28,26.33,34.41,72.88,34.41,48.58,0,72.87-35.76,12.15-18.22,14.17-36.44,1.35-6.08,1.35-39.14V1253h-61.4q0,34.41-1.35,41.16-4.72,24.29-27,24.29-31,0-31-46.56v-58.7H1321.1v-69.5q0-53.31-18.22-78.27Q1276.57,1030.95,1231.36,1031Zm29.69,131.58h-60.73v-31q0-45.88,30.36-45.88t30.37,45.88Zm318.45-950Q1495,128,1376,128H416q-119,0-203.5,84.5T128,416v960q0,119,84.5,203.5T416,1664h960q119,0,203.5-84.5T1664,1376V416Q1664,297,1579.5,212.5ZM1022.18,406.8h61.4V654.43q0,22.27.68,23.62,2,14.85,14.17,14.85,18.21,0,38.46-29V406.8h61.4V743.5h-61.4V706.39q-35.76,41.83-69.5,41.84-31,0-39.81-25-5.4-16.2-5.4-50.61ZM792.09,516.11q0-54,18.89-78.95,25.63-34.41,70.85-34.41,45.88,0,71.52,34.41,18.9,25,18.9,78.95V634.19q0,54.66-18.9,79.62-25.64,34.43-71.52,34.42-45.21,0-70.85-34.42-18.9-25.63-18.89-79.62Zm-163.3-224.7L676.7,468.87l45.89-177.46h68.82L709.77,560.64V743.5H642.29V560.64q-9.45-49.93-41.16-143-25-69.49-43.86-126.18Zm749.67,1097.17q-9.45,39.81-39.14,66.8t-68.83,31q-124.15,14.17-374.49,14.17t-374.49-14.17q-39.13-4.05-69.17-31a123.32,123.32,0,0,1-38.8-66.8Q396,1313,396,1152.41q0-157.89,17.54-236.17,9.45-39.81,39.14-66.8a122.38,122.38,0,0,1,69.5-31.71q123.48-13.5,373.82-13.5t374.49,13.5q39.13,4.72,69.17,31.71a123.32,123.32,0,0,1,38.8,66.8Q1396,991.83,1396,1152.41,1396,1310.3,1378.46,1388.58Z" />
  </svg>
);

YouTube.displayName = "YouTube";

YouTube.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default YouTube;
