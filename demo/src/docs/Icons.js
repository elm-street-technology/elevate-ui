import React from "react";

import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import Icon from "elevate-ui/Icon";

const Icons = () => {
  const data = [
    "Broken",
    "Calendar",
    "Cart",
    "Coupon",
    "CreditCard",
    "ExclamationOutline",
    "HTMLOptGroupElement",
    "Person",
    "Refresh",
    "Times",
  ];

  return (
    <Paper>
      <Typography type="title">{`<Icon />`}</Typography>
      <table>
        <thead>
          <tr>
            <th>Icon</th>
            <th>Generic Icon tag</th>
            <th>Specific Tag</th>
          </tr>
        </thead>
        <tbody>
          {data.map((name) => {
            return (
              <tr key={name}>
                <td>
                  <Icon icon={name} />
                </td>
                <td>{`<Icon icon={${name}} />`}</td>
                <td>{`<${name} />`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Paper>
  );
};

export default Icons;
