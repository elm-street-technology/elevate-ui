import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classNames from 'classnames';

const typeElementMap = {
  title: 'h1',
  body: 'p',
};

const Typography = ({
  children,
  className,
  classes,
  component: componentProp,
  type,
  ...rest
}) => {
  const Element = componentProp || typeElementMap[type] || 'span';
  return (
    <Element
      className={classNames(classes.root, classes[type], className)}
      {...rest}
    >
      {children}
    </Element>
  );
};

Typography.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  classes: PropTypes.object,
  component: PropTypes.string,
  type: PropTypes.oneOf(['title', 'body']),
};

export default withStyles(theme => ({
  root: {
    width: '100%',
  },
  title: {
    fontSize: '36px',
    lineHeight: '48px',
    fontWeight: '600',
    color: theme.colors.gray800,
  },
  body: {
    maxWidth: '600px',
    fontSize: '14px',
    lineHeight: '18px',
  },
}))(Typography);
