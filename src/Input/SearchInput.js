import React, { Component } from "react";
import withStyles from "react-jss";
import classNames from "classnames";

type Props = {
  classes: Object,
  className: string,
  onChange: Function,
  tabIndex: string,
  theme: Object,
  type: string,
  value: string,
};

class SearchInput extends Component<Props> {
  _input;
  _inputWrapper;

  inputRef = (c) => {
    this._input = c;
  };

  inputWrapperRef = (c) => {
    this._inputWrapper = c;
  };

  onWrapperClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this._input.focus();
  };

  render() {
    const {
      classes,
      className,
      tabIndex = "0",
      theme: { colors },
      type = "text",
      onChange,
      value,
      ...rest
    } = this.props;

    return (
      <div
        ref={this.inputWrapperRef}
        className={classes.wrapper}
        onClick={this.onWrapperClick}
      >
        <div className={classes.searchIcon}>
          <svg width={18} height={18} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
          </svg>
        </div>
        <input
          ref={this.inputRef}
          type={type}
          className={classNames(classes.root, className)}
          tabIndex={tabIndex}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          {...rest}
        />
        {value && (
          <button
            type="button"
            className={classes.clearIcon}
            onClick={() => onChange("")}
          >
            <svg width={18} height={18} viewBox="0 0 24 24">
              <path
                fill={colors.error || "currentColor"}
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
}
export default withStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    minHeight: "32px",
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.gray300}`,
    padding: "0 8px",
    cursor: (props) => (props.disabled ? "not-allowed" : "default"),
  },
  root: {
    flexGrow: "1",
    width: "100%",
    color: "inherit",
    fontFamily: "inherit",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    border: "none",
    outline: "none",
    cursor: "inherit",
    boxShadow: "none", // Reset default inputs for mozilla
    "-webkit-appearance": "none", // Reset default browser styles
    "-moz-appearance": "none", // Reset default browser styles
  },
  searchIcon: {
    flexShrink: "0",
    display: "inline-flex",
    color: theme.colors.gray300,
    marginRight: "4px",
  },
  clearIcon: {
    flexShrink: "0",
    display: "inline-flex",
    marginLeft: "8px",

    "&:focus": {
      outline: `1px dotted ${theme.colors.gray400}`, // Modify default focus glow
    },
  },
}))(SearchInput);
