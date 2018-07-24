import React from "react";

import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import Icon from "elevate-ui/Icon";

const Icons = () => {
  // const data = [
  //   "Broken",
  //   "Calendar",
  //   "Cart",
  //   "Coupon",
  //   "CreditCard",
  //   "ExclamationOutline",
  //   "HTMLOptGroupElement",
  //   "Person",
  //   "Refresh",
  //   "Times",
  // ];

  return (
    <Paper>
      <Typography type="title">{`<Icon />`}</Typography>
      <Typography type="body">
        Search for icons:{" "}
        <a
          href="https://material.io/tools/icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://material.io/tools/icons
        </a>
      </Typography>
      <Typography type="body">
        In addition to all the Material Design Icons– we also ship a handful of
        custom icons.
      </Typography>
      <table>
        <thead>
          <tr>
            <th>Icon</th>
            <th>Generic Icon tag</th>
            <th>Specific Tag</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((name) => {
            return (
              <tr key={name}>
                <td>
                  <Icon name={name} />
                </td>
                <td>{`<Icon name={${name}} />`}</td>
                <td>{`<${name} />`}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </Paper>
  );
};

export default Icons;
