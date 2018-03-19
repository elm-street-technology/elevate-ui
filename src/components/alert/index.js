// @flow
import React from 'react';
import classNames from 'classnames';
import withStyles from 'react-jss';

import Icon from '../icons';

type Props = {
  element?: string,
  children: any,
  className: string,
  color: 'primary' | 'secondary' | 'danger',
};

const Alert = (props: Props) => {
  const {
    children,
    classes,
    className,
    element: Element,
    icon,
    ...rest
  } = props;
  const passthroughProps = { ...rest };
  delete passthroughProps.color;
  delete passthroughProps.theme;

  return (
    // $FlowFixMe -- it doesn't understand the element: Element
    <Element
      className={classNames(classes.root, className)}
      {...passthroughProps}
    >
      {icon && (
        <div className={classes.icon}>
          <Icon icon={icon} />
        </div>
      )}
      <div className={classes.children}>{children}</div>
    </Element>
  );
};

Alert.defaultProps = {
  element: 'div',
  color: 'danger',
};

export default withStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: props => theme.colors[props.color],
    borderRadius: '2px',
  },
  icon: {
    flexShrink: '0',
    color: theme.colors.white,
    padding: '10px 0 10px 16px',
  },
  children: {
    width: '100%',
    color: theme.colors.white,
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '600',
    padding: '10px 16px',

    // Override default link styling
    '& a': {
      color: theme.colors.white,
      whiteSpace: 'nowrap',
    },
  },
}))(Alert);
