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
import AddCircleOutline from "elevate-ui-icons/AddCircleOutline";
import FormatColorFill from "elevate-ui-icons/FormatColorFill";

import ElevateUILogo from "./ElevateUILogo";
import Version from "./Version";

import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Link className={classes.logoLink} to="/" title="Back to Home">
        <ElevateUILogo />
      </Link>

      <nav className={classes.nav}>
        <div className={classes.versionContainter}>
          <Version />
        </div>

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
          <AddCircleOutline className={classes.navIcon} size={16} />
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
          className={classes.item}
          activeClassName={classes.active}
          to="/color"
        >
          <FormatColorFill className={classes.navIcon} size={16} />
          Color
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
    marginTop: "20px",
    marginLeft: "32px",
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
  versionContainter: {
    marginLeft: theme.spacing.unit * 0.75,
  },
}))(Sidebar);
