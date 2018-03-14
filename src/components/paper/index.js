import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classNames from 'classnames';

const Paper = ({ children, className, classes, element: Element }) => (
  <Element className={classNames(classes.root, className)}>{children}</Element>
);

Paper.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  classes: PropTypes.object,
  element: PropTypes.string,
};

Paper.defaultProps = {
  element: 'div',
};

export default withStyles(theme => ({
  root: {
    width: '100%',
    height: 'auto',
    background: theme.colors.white,
    border: `1px solid ${theme.colors.gray200}`,
    borderRadius: theme.globalBorderRadius,
    ...theme.globalPadding,
  },
}))(Paper);
