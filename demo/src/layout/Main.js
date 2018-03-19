import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import withStyles from 'react-jss';

import Loadable from '../../../src/components/loaders/Loadable';

import Sidebar from './Sidebar';

const Home = Loadable({ loader: () => import('../docs/Home') });
const Inputs = Loadable({ loader: () => import('../docs/Inputs') });
const Textareas = Loadable({ loader: () => import('../docs/Textareas') });
const Selects = Loadable({ loader: () => import('../docs/Selects') });
const Checkboxes = Loadable({ loader: () => import('../docs/Checkboxes') });
const Radios = Loadable({ loader: () => import('../docs/Radios') });
const Buttons = Loadable({ loader: () => import('../docs/Buttons') });
const Alerts = Loadable({ loader: () => import('../docs/Alerts') });
const SignupForm = Loadable({ loader: () => import('../docs/SignupForm') });

const Main = ({ classes }) => (
  <Router>
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.children}>
        <Route exact path="/" component={Home} />
        <Route path="/input" component={Inputs} />
        <Route path="/textarea" component={Textareas} />
        <Route path="/select" component={Selects} />
        <Route path="/checkbox" component={Checkboxes} />
        <Route path="/radio" component={Radios} />
        <Route path="/button" component={Buttons} />
        <Route path="/alert" component={Alerts} />
        <Route path="/signup" component={SignupForm} />
      </div>
    </div>
  </Router>
);

export default withStyles(theme => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    margin: '0 auto',
  },
  sidebar: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 99,
    display: 'flex',
    flexDirection: 'column',
    width: '240px',
    height: '100vh',
    borderRight: `1px solid ${theme.colors.gray200}`,
    background: theme.colors.white,
    transition: 'all 250ms cubic-bezier(.455, .030, .515, .955)',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  children: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    width: '100%',
    margin: '0 auto',
    padding: '8px',
    paddingLeft: '248px', // sidebar width + 8px padding
  },
}))(Main);
