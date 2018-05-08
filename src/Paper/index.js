import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classNames from 'classnames';

type Props = {
  children: any,
  classes: Object,
  className: string,
  element: string,
  theme: Object,
};

const Paper = ({
  children,
  classes,
  className,
  element: Element,
  theme,
  ...rest
}: Props) => (
  <Element className={classNames(classes.root, className)} {...rest}>
    {children}
  </Element>
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
