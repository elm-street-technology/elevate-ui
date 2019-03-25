import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Input from "elevate-ui-icons/Input";
import AttachMoney from "elevate-ui-icons/AttachMoney";
import TextFields from "elevate-ui-icons/TextFields";
import FormatListBulleted from "elevate-ui-icons/FormatListBulleted";
import PlaylistAdd from "elevate-ui-icons/PlaylistAdd";
import CheckBox from "elevate-ui-icons/CheckBox";
import GroupAdd from "elevate-ui-icons/GroupAdd";
import RadioButtonChecked from "elevate-ui-icons/RadioButtonChecked";
import ViewWeek from "elevate-ui-icons/ViewWeek";
import Calendar from "elevate-ui-icons/Calendar";
import Brush from "elevate-ui-icons/Brush";
import ColorLens from "elevate-ui-icons/ColorLens";
import GridOff from "elevate-ui-icons/GridOff";
import CropPortrait from "elevate-ui-icons/CropPortrait";
import TextFormat from "elevate-ui-icons/TextFormat";
import Warning from "elevate-ui-icons/Warning";
import FilterNone from "elevate-ui-icons/FilterNone";
import Crop75 from "elevate-ui-icons/Crop75";
import BorderHorizontal from "elevate-ui-icons/BorderHorizontal";
import BorderAll from "elevate-ui-icons/BorderAll";
import InsertComment from "elevate-ui-icons/InsertComment";
import InsertEmoticon from "elevate-ui-icons/InsertEmoticon";
import Straighten from "elevate-ui-icons/Straighten";
import RssFeed from "elevate-ui-icons/RssFeed";
import AssignmentTurnedIn from "elevate-ui-icons/AssignmentTurnedIn";
import FormatListNumbered from "elevate-ui-icons/FormatListNumbered";

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
          <Input className={classes.navIcon} size={16} />
          Input
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/currency-input"
        >
          <AttachMoney className={classes.navIcon} size={16} />
          Currency Input
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/textarea"
        >
          <TextFields className={classes.navIcon} size={16} />
          Textarea
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/select"
        >
          <FormatListBulleted className={classes.navIcon} size={16} />
          Select
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/multi-select"
        >
          <PlaylistAdd className={classes.navIcon} size={16} />
          MultiSelect
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/checkbox"
        >
          <CheckBox className={classes.navIcon} size={16} />
          Checkbox
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/checkbox-group"
        >
          <GroupAdd className={classes.navIcon} size={16} />
          CheckboxGroup
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/radio-group"
        >
          <RadioButtonChecked className={classes.navIcon} size={16} />
          RadioGroup
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/button-group"
        >
          <ViewWeek className={classes.navIcon} size={16} />
          ButtonGroup
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/datetime"
        >
          <Calendar className={classes.navIcon} size={16} />
          Datetime
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/number-increment"
        >
          <Calendar className={classes.navIcon} size={16} />
          NumberIncrement
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/color-picker"
        >
          <Brush className={classes.navIcon} size={16} />
          ColorPicker
        </NavLink>

        <span className={classes.header}>General</span>
        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/theme"
        >
          <ColorLens className={classes.navIcon} size={16} />
          Theme
        </NavLink>
        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/theme-overrides"
        >
          <GridOff className={classes.navIcon} size={16} />
          Theme Overrides
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/typography"
        >
          <TextFormat className={classes.navIcon} size={16} />
          Typography
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/paper"
        >
          <CropPortrait className={classes.navIcon} size={16} />
          Paper
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/alert"
        >
          <Warning className={classes.navIcon} size={16} />
          Alert
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/modal"
        >
          <FilterNone className={classes.navIcon} size={16} />
          Modal
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/button"
        >
          <Crop75 className={classes.navIcon} size={16} />
          Button
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/hr"
        >
          <BorderHorizontal className={classes.navIcon} size={16} />
          Horizontal Rule
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/table"
        >
          <BorderAll className={classes.navIcon} size={16} />
          Table
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/tooltip"
        >
          <InsertComment className={classes.navIcon} size={16} />
          Tooltip
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/icon"
        >
          <InsertEmoticon className={classes.navIcon} size={16} />
          Icon
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/accordion"
        >
          <Straighten className={classes.navIcon} size={16} />
          Accordion
        </NavLink>

        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/feed"
        >
          <RssFeed className={classes.navIcon} size={16} />
          Feed
        </NavLink>

        <span className={classes.header}>Demos</span>
        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/signup"
        >
          <AssignmentTurnedIn className={classes.navIcon} size={16} />
          Sign up
        </NavLink>
        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/query-form"
        >
          <FormatListNumbered className={classes.navIcon} size={16} />
          Query Form
        </NavLink>

        <span className={classes.header}>Contributing</span>
        <a
          href="/Elevate%20Brand%20Guidelines.pdf"
          className={classes.item}
          title="Download Brand Guidelines PDF"
        >
          Brand Guidelines
        </a>
        <a
          href="https://github.com/elm-street-technology/elevate-ui"
          className={classNames(classes.item, classes.last)}
          title="View on GitHub"
        >
          View on GitHub
        </a>
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
    marginBottom: "24px",
  },
  logoLink: {
    display: "flex",
    marginTop: "24px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "24px",
  },
  header: {
    fontSize: "13px",
    fontWeight: "600",
    lineHeight: "1",
    color: theme.colors.gray500,
    textTransform: "uppercase",
    letterSpacing: ".8px",
    padding: "12px 8px",
    marginTop: "24px",
    marginLeft: "4px",
  },
  item: {
    flexShrink: "0",
    display: "flex",
    alignItems: "center",
    color: theme.colors.gray600,
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "14px",
    letterSpacing: ".4px",
    textDecoration: "none",
    padding: "12px 8px",
    borderLeft: `4px solid transparent`,
    margin: "4px 0",
    transitionProperty: "all",
    transitionTimingFunction: "ease-in-out",
    transitionDuration: "250ms",

    "&:hover": {
      borderLeft: `4px solid ${theme.colors.secondary["500"]}`,
    },
  },
  active: {
    color: theme.colors.gray900,
    fontWeight: "600",
    padding: "12px 14px",
    borderLeft: `4px solid ${theme.colors.secondary["500"]}`,
  },
  navIcon: {
    color: theme.colors.gray500,
    marginRight: "10px",
  },
  last: {
    marginBottom: "48px",
  },
}))(Sidebar);
