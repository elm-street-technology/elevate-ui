import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../../../src/components/icons/logo';

const Sidebar = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Link className={classes.logoLink} to="/" title="Back to Home">
        <Logo width="100%" height="100%" />
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
          to="/checkbox"
        >
          Checkbox
        </NavLink>
        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/radio"
        >
          Radio
        </NavLink>

        <span className={classes.header}>General</span>
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

        <span className={classes.header}>Demos</span>
        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/signup"
        >
          Sign up
        </NavLink>
      </nav>
    </div>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: theme.colors.white,
  },
  logoLink: {
    display: 'flex',
    margin: '0 auto 8px',
    padding: '32px 40px 16px',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '24px',
  },
  header: {
    fontSize: '12px',
    lineHeight: '1',
    color: '#b3bac1',
    fontWeight: '500',
    textTransform: 'uppercase',
    padding: '16px',
    borderBottom: `1px solid ${theme.colors.gray200}`,
    marginBottom: '12px',
  },
  item: {
    display: 'flex',
    color: theme.colors.gray800,
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '14px',
    textDecoration: 'none',
    padding: '6px 16px',
    borderLeft: `4px solid transparent`,
    margin: '4px 0',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease-in-out',
    transitionDuration: '200ms',

    '&:hover': {
      borderLeft: `4px solid ${theme.colors.secondary}`,
    },
  },
  active: {
    color: theme.colors.secondary,
    borderLeft: `4px solid ${theme.colors.secondary}`,
  },
}))(Sidebar);
