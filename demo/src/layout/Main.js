import React from "react";
import { Route } from "react-router-dom";
import withStyles from "react-jss";

import Loadable from "elevate-ui/Loadable";

import RouteListener from "./RouteListener";
import Sidebar from "./Sidebar";
import Doc from "./Doc";
import IconDoc from "./IconDoc";

const Home = Loadable({ loader: () => import("../docs/Home") });
const SignupForm = Loadable({ loader: () => import("../docs/SignupForm") });

const Main = ({ classes }) => (
  <RouteListener>
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
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
        <Route path="/radio-group" render={() => <Doc folder="RadioGroup" />} />
        <Route path="/datetime" render={() => <Doc folder="Datetime" />} />
        <Route path="/button" render={() => <Doc folder="Button" />} />
        <Route path="/alert" render={() => <Doc folder="Alert" />} />
        <Route path="/table" render={() => <Doc folder="Table" />} />
        <Route path="/icon" render={() => <IconDoc />} />
        <Route path="/signup" component={SignupForm} />
      </div>
    </div>
  </RouteListener>
);

export default withStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
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
    paddingLeft: "248px", // sidebar width + 8px padding
  },
}))(Main);
