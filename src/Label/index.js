import React from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';

const Label = ({ classes, className, children, theme, ...props }) => {
  return (
    <label className={classNames(classes.root, className)} {...props}>
      {children}
    </label>
  );
};

export default withStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: '700',
    color: theme.colors.gray500,
    marginBottom: '4px',
  },
}))(Label);
