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
          <input
            ref={c => {
              this.checkbox = c;
            }}
            {...passthroughProps}
            style={{ display: 'none' }}
          />
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

    '&:focus': {
      outline: 'none',
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
  toggle: {
    position: 'relative',
    display: 'inline-block',
    width: '44px',
    height: '40px',

    borderRadius: '2px',
    padding: '8px 10px 12px 10px',
    flexShrink: '0',
    overflow: 'hidden',
    fill: theme.colors.gray500,
    '$root:focus & svg': {
      boxShadow: theme.globalBoxShadow,
    },

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
    },
  },
  label: {
    color: theme.colors.gray500,
    fontFamily: 'inherit',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '20px',
  },
}))(Toggle);
