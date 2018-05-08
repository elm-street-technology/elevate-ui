// @flow
import React from 'react';
import classNames from 'classnames';
import withStyles from 'react-jss';

import Icon from '../Icon';

type Props = {
  children: any,
  element?: string,
  classes: Object,
  className: string,
  color: 'primary' | 'secondary' | 'danger',
  icon: string,
  theme: Object,
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
    // $FlowIgnore -- it doesn't understand the element: Element
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
    backgroundColor: props => theme.alertColors[props.color].backgroundColor,
    borderRadius: '2px',
    borderColor: props => theme.alertColors[props.color].borderColor,
    borderWidth: '1px',
    borderStyle: 'solid',
  },
  icon: {
    flexShrink: '0',
    color: props => theme.alertColors[props.color].color,
    padding: '10px 0 10px 16px',
  },
  children: {
    width: '100%',
    color: props => theme.alertColors[props.color].color,
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '600',
    padding: '10px 16px',

    // Override default link styling
    '& a': {
      color: props => theme.alertColors[props.color].color,
      whiteSpace: 'nowrap',
    },
  },
}))(Alert);
