import React from "react";
import { Route } from "react-router-dom";
import withStyles from "react-jss";

import Loadable from "elevate-ui/Loadable";

import Sidebar from "./Sidebar";
import Doc from "./Doc";

const Home = Loadable({ loader: () => import("../docs/Home") });
const Inputs = Loadable({ loader: () => import("../docs/Inputs") });
const Textareas = Loadable({ loader: () => import("../docs/Textareas") });
const Selects = Loadable({ loader: () => import("../docs/Selects") });
const MultiSelects = Loadable({ loader: () => import("../docs/MultiSelects") });
const Checkboxes = Loadable({ loader: () => import("../docs/Checkboxes") });
const CheckboxGroups = Loadable({
  loader: () => import("../docs/CheckboxGroups"),
});
const RadioGroups = Loadable({
  loader: () => import("../docs/RadioGroups"),
});
const Datetimes = Loadable({ loader: () => import("../docs/Datetimes") });
const Buttons = Loadable({ loader: () => import("../docs/Buttons") });
const Alerts = Loadable({ loader: () => import("../docs/Alerts") });
const Tables = Loadable({ loader: () => import("../docs/Tables") });
const Icons = Loadable({ loader: () => import("../docs/Icons") });
const SignupForm = Loadable({ loader: () => import("../docs/SignupForm") });

const Main = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.sidebar}>
      <Sidebar />
    </div>
    <div className={classes.children}>
      <Route exact path="/" component={Home} />
      <Route path="/input" component={Inputs} />
      <Route path="/textarea" component={Textareas} />
      <Route path="/select" component={Selects} />
      <Route path="/multi-select" component={MultiSelects} />
      <Route path="/checkbox" component={Checkboxes} />
      <Route path="/checkbox-group" component={CheckboxGroups} />
      <Route path="/radio-group" component={RadioGroups} />
      <Route path="/datetime" component={Datetimes} />
      <Route path="/button" component={Buttons} />
      <Route path="/alert" render={() => <Doc folder="Alert" />} />
      <Route path="/table" component={Tables} />
      <Route path="/icon" component={Icons} />
      <Route path="/signup" component={SignupForm} />
    </div>
  </div>
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
