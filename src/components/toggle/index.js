import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classNames from 'classnames';

class Toggle extends Component {
  static propTypes = {
    checked: PropTypes.bool.isRequired,
    checkedIcon: PropTypes.node.isRequired,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
    uncheckedIcon: PropTypes.node.isRequired,
  };

  static defaultProps = {
    tabIndex: '0',
    type: 'text',
  };

  render() {
    const {
      classes,
      className,
      checkedIcon,
      label,
      tabIndex,
      uncheckedIcon,
      validation,
      ...passthroughProps
    } = this.props;

    return (
      <div className={classNames(classes.scaffold, className)}>
        <label
          className={classes.root}
          ref={l => {
            this.label = l;
          }}
          onKeyDown={e => {
            if (e.keyCode === 32) {
              e.preventDefault();
              this.label.click();
            }
          }}
          tabIndex={passthroughProps.disabled ? null : tabIndex}
        >
          <input {...passthroughProps} style={{ display: 'none' }} />
          <span className={classes.toggle}>
            {passthroughProps.checked ? checkedIcon : uncheckedIcon}
          </span>
          <span className={classes.label}>{label}</span>
        </label>
        {validation ? (
          <div className={classes.validation}>{validation}</div>
        ) : null}
      </div>
    );
  }
}

export default withStyles(theme => ({
  scaffold: {
    position: 'relative',
    display: 'flex',
  },
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    // cursor: disabled ? 'not-allowed' : 'pointer',
    // opacity: disabled ? '0.65' : '1',
  },
  toggle: {
    position: 'relative',
    display: 'inline-block',
    width: '44px',
    height: '40px',
    borderRadius: '2px',
    padding: '10px',
    flexShrink: '0',
    overflow: 'hidden',

    // on-click expanding-circle animation shenanigans
    ':after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '100%',
      top: '0',
      left: '0',
      pointerEvents: 'none',
      backgroundColor: theme.colors.primary,
      // transform: checked ? 'scale(1, 1)' : 'scale(0, 0)',
      // opacity: checked ? '0' : '0.4',
      // transitionProperty: 'transform, opacity',
      // transitionTimingFunction: 'ease-out',
      // transitionDuration: checked ? '600ms' : '0s',
    },
  },
  label: {
    fontSize: '16px',
    fontWeight: '500',
    paddingRight: '12px', // extra hitbox padding
  },
}))(Toggle);
