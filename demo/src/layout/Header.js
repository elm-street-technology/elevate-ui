import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import { Link } from "react-router-dom";
import Menu from "elevate-ui-icons/Menu";
import ElevateUILogo from "./ElevateUILogo";

const Sidebar = ({ classes, className, toggleMenu }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <Link className={classes.logoLink} to="/" title="Back to Home">
        <ElevateUILogo />
      </Link>
      <button className={classes.menu} onClick={toggleMenu}>
        <Menu />
      </button>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "64px",
    backgroundColor: theme.colors.white,
    padding: "8px",
    borderBottom: `1px solid ${theme.colors.gray200}`,

    [theme.breakpoints(900)]: {
      display: "none",
    },
  },
  logoLink: {
    display: "flex",
    width: "160px",
    height: "60px",
  },
  menu: {
    display: "flex",
    padding: "12px",
  },
}))(Sidebar);
