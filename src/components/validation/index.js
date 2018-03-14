import React from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';

const Validation = ({ className, classes, error, theme, ...props }) => (
  <div className={classNames(classes.root, className)} {...props}>
    {error}
  </div>
);

export default withStyles(theme => ({
  root: {
    display: 'inline-flex',
    fontSize: '14px',
    lineHeight: '18px',
    color: theme.colors.white,
    backgroundColor: theme.colors.danger,
    marginTop: '4px',
    padding: '2px 8px',
  },
}))(Validation);
