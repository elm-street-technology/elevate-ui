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
  isDisabled: true | false,
  isRounded: true | false,
  isOutlined: true | false,
  isProcessing: true | false,
};

function getChildColor(theme, props) {
  if (props.isDisabled) {
    return theme.colors['gray300'];
  } else if (props.isOutlined) {
    return theme.colors[props.color];
  } else {
    return theme.colors.white;
  }
}

const Button = (props: Props) => {
  const {
    children,
    classes,
    className,
    element: Element,
    isRounded,
    isOutlined,
    isDisabled,
    ...rest
  } = props;
  const passthroughProps = { ...rest };
  delete passthroughProps.color;
  delete passthroughProps.theme;
  delete passthroughProps.isRounded;

  return (
    // $FlowFixMe -- it doesn't understand the element: Element
    <Element
      disabled={isDisabled}
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
  isRounded: true,
  isOutlined: false,
  isDisabled: false,
  isProcessing: false,
};

export default withStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: props =>
      props.isOutlined ? 'transparent' : theme.colors[props.color],
    borderRadius: props => (props.isRounded ? theme.globalBorderRadius : '0px'),
    borderColor: props =>
      props.isOutlined ? theme.colors[props.color] : 'transparent',
    borderWidth: '1px',
    borderStyle: 'solid',
    '&:disabled': {
      cursor: 'not-allowed',
      background: props =>
        props.isOutlined ? 'transparent' : theme.colors['gray100'],
      color: theme.colors['gray300'],
      borderColor: props =>
        props.isOutlined ? theme.colors['gray200'] : 'none',
    },
  },
  children: {
    color: props => getChildColor(theme, props),
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '600',
    padding: '10px 16px',
  },
}))(Button);
