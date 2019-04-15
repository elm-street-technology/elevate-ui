import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import BorderStyle from "elevate-ui-icons/BorderStyle";
import BorderOuter from "elevate-ui-icons/BorderOuter";
import TextFields from "elevate-ui-icons/TextFields";
import Palette from "elevate-ui-icons/Palette";
import FormatPaint from "elevate-ui-icons/FormatPaint";
import AspectRatio from "elevate-ui-icons/AspectRatio";
import ContentCopy from "elevate-ui-icons/ContentCopy";
import DevicesOther from "elevate-ui-icons/DevicesOther";
import FlipToFront from "elevate-ui-icons/FlipToFront";
import Schedule from "elevate-ui-icons/Schedule";

import Input from "elevate-ui-icons/Input";
import AttachMoney from "elevate-ui-icons/AttachMoney";
import FormatShapes from "elevate-ui-icons/FormatShapes";
import FormatListBulleted from "elevate-ui-icons/FormatListBulleted";
import PlaylistAdd from "elevate-ui-icons/PlaylistAdd";
import CheckBox from "elevate-ui-icons/CheckBox";
import GroupAdd from "elevate-ui-icons/GroupAdd";
import RadioButtonChecked from "elevate-ui-icons/RadioButtonChecked";
import ViewWeek from "elevate-ui-icons/ViewWeek";
import Calendar from "elevate-ui-icons/Calendar";
import Brush from "elevate-ui-icons/Brush";
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
import MoreHoriz from "elevate-ui-icons/MoreHoriz";
import AssignmentTurnedIn from "elevate-ui-icons/AssignmentTurnedIn";
import FormatListNumbered from "elevate-ui-icons/FormatListNumbered";
import AddCircleOutline from "elevate-ui-icons/AddCircleOutline";
import FormatColorFill from "elevate-ui-icons/FormatColorFill";
import Notifications from "elevate-ui-icons/Notifications";

import ElevateUILogo from "./ElevateUILogo";
import Version from "./Version";

import { Link, NavLink } from "react-router-dom";

import Accordion from "elevate-ui/Accordion";

class Sidebar extends Component {
  render() {
    const { classes } = this.props;
    const items = [
      {
        title: "Forms",
        contents: (
          <div className={classes.accordionContainer}>
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
              to="/textarea"
              activeClassName={classes.active}
              className={classes.item}
            >
              <FormatShapes className={classes.navIcon} size={16} />
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
          </div>
        ),
      },

      {
        title: "General",
        contents: (
          <div className={classes.accordionContainer}>
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
              to="/global-notification"
            >
              <Notifications className={classes.navIcon} size={16} />
              Global Notification
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
            <NavLink
              activeClassName={classes.active}
              className={classes.item}
              to="/full-screen-loader"
            >
              <MoreHoriz className={classes.navIcon} size={16} />
              FullscreenLoader
            </NavLink>
          </div>
        ),
      },
      {
        title: "Theme Object",
        contents: (
          <div className={classes.accordionContainer}>
            <NavLink
              activeClassName={classes.active}
              className={classes.item}
              to="/borders"
            >
              <BorderStyle className={classes.navIcon} size={16} />
              Borders
            </NavLink>
            <NavLink
              activeClassName={classes.active}
              className={classes.item}
              to="/breakpoints"
            >
              <DevicesOther className={classes.navIcon} size={16} />
              Breakpoints
            </NavLink>
            <NavLink
              activeClassName={classes.active}
              className={classes.item}
              to="/color-palette"
            >
              <Palette className={classes.navIcon} size={16} />
              Color Palette
            </NavLink>
            <NavLink
              activeClassName={classes.active}
              className={classes.item}
              to="/colors"
            >
              <FormatPaint className={classes.navIcon} size={16} />
              Colors
            </NavLink>

            <NavLink
              activeClassName={classes.active}
              className={classes.item}
              to="/padding"
            >
              <AspectRatio className={classes.navIcon} size={16} />
              Padding
            </NavLink>
            <NavLink
              activeClassName={classes.active}
              className={classes.item}
              to="/shadows"
            >
              <ContentCopy className={classes.navIcon} size={16} />
              Shadows
            </NavLink>
            <NavLink
              activeClassName={classes.active}
              className={classes.item}
              to="/spacing"
            >
              <BorderOuter className={classes.navIcon} size={16} />
              Spacing
            </NavLink>
            <NavLink
              activeClassName={classes.active}
              className={classes.item}
              to="/transitions"
            >
              <Schedule className={classes.navIcon} size={16} />
              Transitions
            </NavLink>
            <NavLink
              activeClassName={classes.active}
              className={classes.item}
              to="/typography-theme"
            >
              <TextFields className={classes.navIcon} size={16} />
              Typography
            </NavLink>

            <NavLink
              activeClassName={classes.active}
              className={classes.item}
              to="/z-index"
            >
              <FlipToFront className={classes.navIcon} size={16} />
              zIndex
            </NavLink>
          </div>
        ),
      },
      {
        title: "Demos",
        contents: (
          <div className={classes.accordionContainer}>
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
          </div>
        ),
      },
      {
        title: "Contributing",
        contents: (
          <div className={classes.accordionContainer}>
            <a
              href="/Elevate%20Brand%20Guidelines.pdf"
              className={classes.item}
              title="Download Brand Guidelines PDF"
              target="blank"
            >
              Brand Guidelines
            </a>
            <a
              href="https://github.com/elm-street-technology/elevate-ui"
              className={classNames(classes.item, classes.last)}
              title="View on GitHub"
              target="blank"
            >
              View on GitHub
            </a>
          </div>
        ),
      },
    ];
    return (
      <div className={classes.root}>
        <Link className={classes.logoLink} to="/" title="Back to Home">
          <ElevateUILogo />
        </Link>

        <nav className={classes.nav}>
          <div className={classes.versionContainter}>
            <Version />
          </div>

          <Accordion className={classes.accordion} items={items} />
        </nav>
      </div>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: theme.colors.white,
    marginBottom: theme.spacing.unit * 1.5,
  },
  logoLink: {
    display: "flex",
    marginTop: theme.spacing.unit * 0.5,
    marginLeft: theme.spacing.unit * 1,
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: theme.spacing.unit * 0.5,
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
    paddingLeft: theme.spacing.unit * 1.25,
    marginLeft: -8,
    marginTop: theme.spacing.unit * -0.5,
    marginBottom: theme.spacing.unit,
    borderBottom: `1px solid ${theme.colors.gray["200"]}`,
    paddingBottom: theme.spacing.unit * 0.5,
  },
  accordion: {
    border: "none",
    marginTop: theme.spacing.unit * 0.5,

    "& > div": {
      borderBottom: "none",
    },

    "& > div > button > div > svg": {
      fill: theme.colors.gray["500"],
    },
  },
}))(Sidebar);
