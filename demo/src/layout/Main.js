import React, { Component } from "react";
import classNames from "classnames";
import { Route } from "react-router-dom";
import withStyles from "react-jss";
import noScroll from "no-scroll";

import Loadable from "elevate-ui/Loadable";

import RouteListener from "./RouteListener";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Doc from "./Doc";
import IconDoc from "./IconDoc";

const Home = Loadable({ loader: () => import("../docs/Home") });
const SignupForm = Loadable({ loader: () => import("../docs/SignupForm") });
const QueryForm = Loadable({ loader: () => import("../docs/QueryForm") });
const Theme = Loadable({ loader: () => import("../docs/Theme") });

class Main extends Component {
  state = {
    isMenuOpen: false,
  };

  closeMenu = () => {
    this.setState(
      {
        isMenuOpen: false,
      },
      noScroll.off()
    );
  };

  toggleMenu = () => {
    this.setState(
      (state) => ({
        isMenuOpen: !state.isMenuOpen,
      }),
      noScroll.toggle()
    );
  };

  render() {
    const { classes } = this.props;
    const { isMenuOpen } = this.state;
    return (
      <RouteListener closeMenu={this.closeMenu}>
        <div className={classes.root}>
          <Header className={classes.header} toggleMenu={this.toggleMenu} />
          <div
            className={classNames(
              classes.sidebar,
              isMenuOpen && classes.sidebarOpen
            )}
          >
            <Sidebar />
          </div>
          <div
            onClick={this.closeMenu}
            className={classNames(isMenuOpen && classes.underlay)}
          />
          <div className={classes.children}>
            <Route exact path="/" component={Home} />
            <Route path="/input" render={() => <Doc folder="Input" />} />
            <Route path="/textarea" render={() => <Doc folder="Textarea" />} />
            <Route path="/select" render={() => <Doc folder="Select" />} />
            <Route
              path="/multi-select"
              render={() => <Doc folder="MultiSelect" />}
            />
            <Route path="/checkbox" render={() => <Doc folder="Checkbox" />} />
            <Route
              path="/checkbox-group"
              render={() => <Doc folder="CheckboxGroup" />}
            />
            <Route
              path="/button-group"
              render={() => <Doc folder="ButtonGroup" />}
            />
            <Route
              path="/radio-group"
              render={() => <Doc folder="RadioGroup" />}
            />
            <Route
              path="/number-increment"
              render={() => <Doc folder="NumberIncrement" />}
            />
            <Route
              path="/typography"
              render={() => <Doc folder="Typography" />}
            />
            <Route path="/paper" render={() => <Doc folder="Paper" />} />
            <Route path="/datetime" render={() => <Doc folder="Datetime" />} />
            <Route path="/button" render={() => <Doc folder="Button" />} />
            <Route path="/alert" render={() => <Doc folder="Alert" />} />
            <Route path="/table" render={() => <Doc folder="Table" />} />
            <Route path="/hr" render={() => <Doc folder="Hr" />} />
            <Route path="/icon" render={() => <IconDoc />} />
            <Route path="/signup" component={SignupForm} />
            <Route path="/query-form" component={QueryForm} />
            <Route path="/theme" component={Theme} />
          </div>
        </div>
      </RouteListener>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
  },
  sidebar: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 99,
    display: "flex",
    flexDirection: "column",
    width: "240px",
    height: "100vh",
    borderRight: `1px solid ${theme.colors.gray200}`,
    background: theme.colors.white,
    transition: "all 250ms cubic-bezier(.455, .030, .515, .955)",
    overflowX: "hidden",
    overflowY: "auto",
    transform: "translateX(-240px)",

    [theme.breakpoints[900]]: {
      transform: "translateX(0)",
    },
  },
  sidebarOpen: {
    transform: "translateX(0)",
  },
  children: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    width: "100%",
    margin: "0 auto",
    padding: "8px",

    [theme.breakpoints[900]]: {
      paddingLeft: "248px", // sidebar width + 8px padding
    },
  },
  underlay: {
    display: "flex",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 98,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
}))(Main);
