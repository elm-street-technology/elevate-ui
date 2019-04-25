// @flow
import React from "react";
import { Link, withRouter } from "react-router-dom";

import withStyles from "elevate-ui/withStyles";
import Paper from "elevate-ui/Paper";
import TabNavigation from "elevate-ui/TabNavigation";
import Tab from "elevate-ui/Tab";

type $Props = {
  classes: Object,
  location: Object,
};

const handleClick = () => {
  setTimeout(() => alert("Clicked!"), 100);
};

const TabNavigations = ({ classes, location }: $Props) => (
  <Paper className={classes.root}>
    <div className={classes.tabContainer}>
      <TabNavigation>
        <Tab
          to="/tab-navigation#home"
          element={Link}
          isActive={location && location.hash === "#home"}
        >
          Home
        </Tab>
        <Tab href="https://tryelevate.com" element="a">
          About
        </Tab>
        <Tab type="button" element="button" onClick={handleClick}>
          Contact
        </Tab>
      </TabNavigation>
    </div>
  </Paper>
);

const styles = (theme) => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
});

export default withRouter(withStyles(styles)(TabNavigations));
