import React from "react";
import withStyles from "react-jss";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Link className={classes.logoLink} to="/" title="Back to Home">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 600 160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>elevate-ui logo</title>
          <path
            fill="#f15953"
            d="M581.7,56.05a6.23,6.23,0,0,1,6.2,6.2v62a6.2,6.2,0,0,1-1.8,4.4,6,6,0,0,1-4.4,1.8,5.88,5.88,0,0,1-4.4-1.8,6,6,0,0,1-1.8-4.4v-62a6.2,6.2,0,0,1,1.8-4.4,6.28,6.28,0,0,1,4.4-1.8"
          />
          <path
            fill="#5a5b5c"
            d="M23.1,119.45a37.92,37.92,0,0,1-8-11.8,37.18,37.18,0,0,1,8-41,38.8,38.8,0,0,1,12-8,36.82,36.82,0,0,1,14.7-3,36.47,36.47,0,0,1,26.6,11,38.36,38.36,0,0,1,8,11.9,36.69,36.69,0,0,1,3,14.6,6.2,6.2,0,0,1-1.8,4.4,6.31,6.31,0,0,1-4.4,1.9H25.3a24.35,24.35,0,0,0,8.9,13.3,24.36,24.36,0,0,0,15.6,5.3q13.8,0,21.3-8.4a5.91,5.91,0,0,1,4.2-2.1,6.11,6.11,0,0,1,5,10.2h0c-7.4,8.4-17.6,12.6-30.5,12.6a35.84,35.84,0,0,1-26.7-10.9m51.1-32.6a25.24,25.24,0,0,0-48.9,0Z"
          />
          <path
            fill="#5a5b5c"
            d="M104.9,7.05a6.23,6.23,0,0,1,6.2,6.2v111a6.2,6.2,0,0,1-1.8,4.4,6,6,0,0,1-4.4,1.8,5.88,5.88,0,0,1-4.4-1.8,6,6,0,0,1-1.8-4.4v-111a6.2,6.2,0,0,1,1.8-4.4,5.88,5.88,0,0,1,4.4-1.8"
          />
          <path
            fill="#5a5b5c"
            d="M133.3,119.45a37.92,37.92,0,0,1-8-11.8,37.18,37.18,0,0,1,8-41,38.8,38.8,0,0,1,12-8,37.61,37.61,0,0,1,41.3,8,38.36,38.36,0,0,1,8,11.9,36.69,36.69,0,0,1,3,14.6,6.2,6.2,0,0,1-1.8,4.4,6.31,6.31,0,0,1-4.4,1.9H135.6a25.3,25.3,0,0,0,24.5,18.6q13.8,0,21.3-8.4a5.91,5.91,0,0,1,4.2-2.1,6.11,6.11,0,0,1,5,10.2h0c-7.4,8.4-17.6,12.6-30.5,12.6a35.9,35.9,0,0,1-26.8-10.9m51.1-32.6a25.24,25.24,0,0,0-48.9,0Z"
          />
          <path
            fill="#5a5b5c"
            d="M271.9,23.15a5.93,5.93,0,0,1,.5,2.3,5.42,5.42,0,0,1-.6,2.5l-30,62.4c-1.2,2.5-3.3,3.7-6.4,3.7s-5.2-1.2-6.4-3.7L199,28a5.42,5.42,0,0,1-.6-2.5,5.93,5.93,0,0,1,.5-2.3,6.69,6.69,0,0,1,3.8-3.4,8.57,8.57,0,0,1,2.7-.5,7.51,7.51,0,0,1,2.6.5,6.21,6.21,0,0,1,3.8,3.3l23.6,49,23.5-49a6.48,6.48,0,0,1,3.8-3.3,7.51,7.51,0,0,1,2.6-.5,9.18,9.18,0,0,1,2.8.5,6.4,6.4,0,0,1,3.8,3.4"
          />
          <path
            fill="#5a5b5c"
            d="M341,55.55a5.76,5.76,0,0,1,4.4,1.9,6,6,0,0,1,1.8,4.4v62.4a6.23,6.23,0,0,1-6.2,6.2,6.47,6.47,0,0,1-4.4-1.8,6,6,0,0,1-1.9-4.4v-3.2a36.31,36.31,0,0,1-50.3-1.5,37.79,37.79,0,0,1,0-52.9,36.22,36.22,0,0,1,50.3-1.6V62a6.49,6.49,0,0,1,6.3-6.4m-30.6,62.5a23.2,23.2,0,0,0,17.2-7.3,25.55,25.55,0,0,0,0-35.4,23.9,23.9,0,0,0-33.9-.5l-.5.5a25.36,25.36,0,0,0,0,35.4,23.2,23.2,0,0,0,17.2,7.3"
          />
          <path
            fill="#5a5b5c"
            d="M392.4,55.55a5.76,5.76,0,0,1,4.4,1.9,6.28,6.28,0,0,1,0,8.8,6,6,0,0,1-4.4,1.9h-9.7v56.2a6.23,6.23,0,0,1-6.2,6.2,5.82,5.82,0,0,1-4.3-1.8,6,6,0,0,1-1.9-4.4V68.05h-9.6a6,6,0,0,1-4.4-1.9,6.3,6.3,0,0,1,4.4-10.7h9.6V13.25A6.3,6.3,0,0,1,376.4,7a6,6,0,0,1,4.5,1.9,6,6,0,0,1,1.8,4.4v42.3Z"
          />
          <path
            fill="#5a5b5c"
            d="M412.9,119.45a37.92,37.92,0,0,1-8-11.8,37.18,37.18,0,0,1,8-41,38.8,38.8,0,0,1,12-8,37.61,37.61,0,0,1,41.3,8,38.36,38.36,0,0,1,8,11.9,36.69,36.69,0,0,1,3,14.6,6.2,6.2,0,0,1-1.8,4.4,6.31,6.31,0,0,1-4.4,1.9H415.1a24.35,24.35,0,0,0,8.9,13.3,24.66,24.66,0,0,0,15.6,5.2q13.8,0,21.3-8.4a5.91,5.91,0,0,1,4.2-2.1,6.11,6.11,0,0,1,5,10.2h0c-7.4,8.4-17.6,12.6-30.5,12.6a35.75,35.75,0,0,1-26.7-10.8m51-32.6a25.24,25.24,0,0,0-48.9,0Z"
          />
          <path
            fill="#f15953"
            d="M271,153.05H199.8a5.55,5.55,0,0,1,0-7.9L231.5,105a5.55,5.55,0,0,1,7.9,0l31.7,40.2a5.65,5.65,0,0,1-.1,7.9"
          />
          <path
            fill="#f15953"
            d="M586,35.75a6.28,6.28,0,0,0-8.8,0,6,6,0,0,0-1.8,4.4,6.22,6.22,0,0,0,10.6,4.4,6,6,0,0,0,1.8-4.4A5.53,5.53,0,0,0,586,35.75Z"
          />
          <path
            fill="#f15953"
            d="M499.72,93.38a24.79,24.79,0,0,0,7,17.47,22.89,22.89,0,0,0,17.2,7.2h0a22.89,22.89,0,0,0,17.1-7.2,25.27,25.27,0,0,0,7-17.55l.05-27.85v-3.2a6.3,6.3,0,0,1,6.2-6.2h0a5.56,5.56,0,0,1,4.3,1.9,5.88,5.88,0,0,1,1.8,4.4v62a6.15,6.15,0,0,1-6.2,6.1,5.82,5.82,0,0,1-4.3-1.8,5.53,5.53,0,0,1-1.8-4.4v-3.2a36,36,0,0,1-50-1.5,37.47,37.47,0,0,1-10.73-26.29v0l.05-27.85v-3.2a6.3,6.3,0,0,1,6.2-6.2h0a5.56,5.56,0,0,1,4.3,1.9,5.88,5.88,0,0,1,1.8,4.4v31"
          />
        </svg>
      </Link>
      <nav className={classes.nav}>
        <span className={classes.header}>Forms</span>
        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/input"
        >
          Input
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/textarea"
        >
          Textarea
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/select"
        >
          Select
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/multi-select"
        >
          MultiSelect
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/checkbox"
        >
          Checkbox
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/checkbox-group"
        >
          CheckboxGroup
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/radio-group"
        >
          RadioGroup
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/button-group"
        >
          ButtonGroup
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/datetime"
        >
          Datetime
        </NavLink>

        <span className={classes.header}>General</span>
        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/theme"
        >
          Theme
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/alert"
        >
          Alert
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/button"
        >
          Button
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/hr"
        >
          Horizontal Rule
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/table"
        >
          Table
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/icon"
        >
          Icon
        </NavLink>

        <span className={classes.header}>Demos</span>
        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/signup"
        >
          Sign up
        </NavLink>
        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/query-form"
        >
          Query Form
        </NavLink>
      </nav>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: theme.colors.white,
  },
  logoLink: {
    display: "flex",
    margin: "0 auto 8px",
    padding: "32px 24px 12px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "24px",
  },
  header: {
    fontSize: "12px",
    lineHeight: "1",
    color: "#b3bac1",
    fontWeight: "500",
    textTransform: "uppercase",
    padding: "16px",
    borderBottom: `1px solid ${theme.colors.gray200}`,
    marginBottom: "12px",
  },
  item: {
    flexShrink: "0",
    display: "flex",
    color: theme.colors.gray800,
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "14px",
    textDecoration: "none",
    padding: "6px 16px",
    borderLeft: `4px solid transparent`,
    margin: "4px 0",
    transitionProperty: "all",
    transitionTimingFunction: "ease-in-out",
    transitionDuration: "200ms",

    "&:hover": {
      borderLeft: `4px solid ${theme.colors.secondary}`,
    },
  },
  active: {
    color: theme.colors.secondary,
    borderLeft: `4px solid ${theme.colors.secondary}`,
  },
}))(Sidebar);
