// @flow
import React from 'react';
import classNames from 'classnames';
import withStyles from 'react-jss';

type Props = {
  element?: string,
  children: any,
  classes: Object,
  className: string,
  color: 'primary' | 'secondary',
};

const Button = (props: Props) => {
  const { children, classes, className, element: Element, ...rest } = props;
  const passthroughProps = { ...rest };
  delete passthroughProps.color;
  delete passthroughProps.theme;

  return (
    // $FlowFixMe -- it doesn't understand the element: Element
    <Element
      className={classNames(classes.root, className)}
      {...passthroughProps}
    >
      <div className={classes.children}>{children}</div>
    </Element>
  );
};

Button.defaultProps = {
  element: 'button',
  color: 'primary',
};

export default withStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: props => theme.colors[props.color],
    borderRadius: '2px',
  },
  children: {
    color: theme.colors.white,
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '600',
    padding: '10px 16px',
  },
}))(Button);
