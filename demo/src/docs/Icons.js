import React from "react";

import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import * as AllIcons from "elevate-ui/Icon";
import Icon from "elevate-ui/Icon/Icon";
import withStyles from "elevate-ui/withStyles";

const Icons = ({ classes }) => {
  const iconKeys = Object.keys(AllIcons);

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
      <div className={classes.grid}>
        {iconKeys.map((name) => {
          return (
            <div key={name} className={classes.box}>
              <div className={classes.icon}>
                <Icon name={name} />
              </div>
              <div className={classes.name}>{name}</div>
            </div>
          );
        })}
      </div>
    </Paper>
  );
};

export default withStyles(() => ({
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    width: "260px",
    padding: "32px 16px",
  },
  icon: {
    padding: "8px",
  },
  name: {
    fontSize: "14px",
    fontWeight: "600",
  },
}))(Icons);
