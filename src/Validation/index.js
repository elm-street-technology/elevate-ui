import React from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';

const Validation = ({ className, classes, color, error, theme, ...props }) => (
  <div className={classNames(classes.root, className)} {...props}>
    {error}
  </div>
);

Validation.defaultProps = {
  color: 'danger',
};

export default withStyles(theme => ({
  root: {
    display: 'inline-flex',
    fontSize: '14px',
    lineHeight: '18px',
    color: props => theme.alertColors[props.color].color,
    backgroundColor: props => theme.alertColors[props.color].backgroundColor,
    borderRadius: '2px',
    borderColor: props => theme.alertColors[props.color].borderColor,
    borderWidth: '1px',
    borderStyle: 'solid',
    marginTop: '4px',
    padding: '2px 8px',
  },
}))(Validation);
