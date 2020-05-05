import React, { Component, Fragment } from "react";
import withStyles from "../withStyles";
import classNames from "classnames";
import get from "lodash/get";
import { checkString } from "../util";

import Scaffold from "../Scaffold";
import without from "lodash/without";
import Color from "color";

type Props = {
  classes: Object,
  /**
   * classNames to be passed to the component.
   */
  className: string,
  field: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  form: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  /**
   * Array of items to use as the values. `{label: string, value: string}`
   */
  items: Array<{ label: string, value: string, disabled: boolean }>,
  /**
   * Text input to be used as the label for the checkbox group.
   */
  label: string,
  theme: Object,
  /**
   * Allows the button group to have multiple values selected when set to true
   */
  multiSelect?: boolean,
  /**
   * Color to be applied to the Button component. Can be "primary", "secondary", or any custom value.
   */
  color?: string,
};

function getBackgroundColor(theme, props) {
  try {
    if (checkString(props.color)) {
      return theme.colors[props.color]["500"];
    } else {
      if (Color(props.color)) {
        return props.color;
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn(err);
    return theme.colors.black;
  }
}

function getSpanColor(theme, props) {
  let backgroundColor;
  if (checkString(props.color)) {
    backgroundColor = theme.colors[props.color]["500"];
  } else {
    backgroundColor = props.color;
  }

  if (Color(backgroundColor).isDark()) {
    return theme.colors["white"];
  } else if (Color(backgroundColor).isLight()) {
    return theme.colors["gray900"];
  } else {
    return theme.colors["gray600"];
  }

  // // if (Color(background).isDark()) {
  // //   return theme.colors.white;
  // // } else {
  // //   return theme.colors.gray900;
  // // }
}

/**
 * A component used to render a group of buttons that can have a single or multiple values.
 */
class ButtonGroup extends Component<Props> {
  static defaultProps = {
    items: [],
    multiSelect: false,
    color: "primary",
  };

  onChange = (e) => {
    const {
      field: { name, value },
      form: { setFieldValue },
    } = this.props;
    const selectedButton = e.target.id;
    if (this.props.multiSelect) {
      let selectedButtons = Array.isArray(value) ? value.slice() : [];
      if (e.target.checked && selectedButtons.indexOf(selectedButton) === -1) {
        selectedButtons.push(selectedButton);
      } else if (!e.target.checked) {
        selectedButtons = without(selectedButtons, selectedButton);
      }
      return setFieldValue(name, selectedButtons);
    } else {
      if (value === selectedButton) {
        return setFieldValue(name, "");
      }

      return setFieldValue(name, selectedButton);
    }
  };

  render() {
    const {
      classes,
      className,
      field: { name, value },
      form: { errors, touched, values },
      items,
      label,
      multiSelect,
    } = this.props;
    const error = get(touched, name) && get(errors, name);
    const selectedValue = get(values, name);

    return (
      <Scaffold label={label} error={error}>
        <div className={classNames(className, classes.toggles, classes.inline)}>
          {items.map((item) => {
            return (
              <Fragment key={item.value}>
                <label
                  className={classNames(
                    classes.button,
                    Array.isArray(selectedValue)
                      ? selectedValue.includes(item.value)
                        ? classes.buttonActive
                        : null
                      : selectedValue === item.value
                      ? classes.buttonActive
                      : null
                  )}
                >
                  <span>{item.label}</span>
                  <input
                    id={item.value}
                    type="checkbox"
                    name={name}
                    className={classes.hiddenInput}
                    checked={
                      multiSelect
                        ? value.includes(item.value)
                        : value === item.value
                    }
                    value={item.value}
                    onChange={this.onChange}
                    ref={(node) => (this[`input${item.value}`] = node)}
                  />
                </label>
              </Fragment>
            );
          })}
        </div>
      </Scaffold>
    );
  }
}

const styles = (theme) => ({
  toggles: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    width: "100%",
  },
  inline: {
    flexDirection: "row",
  },
  hiddenInput: {
    display: "none",
  },
  button: {
    background: "#fff",
    border: `1px solid ${theme.colors["gray300"]}`,
    borderRight: "none",
    padding: 12,
    cursor: "pointer",
    "&:first-of-type": {
      borderLeft: `1px solid ${theme.colors["gray300"]}`,
      borderTopLeftRadius: theme.globalBorderRadius,
      borderBottomLeftRadius: theme.globalBorderRadius,
    },
    "&:last-of-type": {
      borderRight: `1px solid ${theme.colors["gray300"]}`,
      borderTopRightRadius: theme.globalBorderRadius,
      borderBottomRightRadius: theme.globalBorderRadius,
    },
    "& span": {
      pointerEvents: "none",
      color: theme.colors["gray600"],
    },
  },
  buttonActive: {
    background: (props) => getBackgroundColor(theme, props),
    border: `1px solid ${theme.colors["gray300"]}`,
    borderRight: "none",
    padding: 12,
    cursor: "pointer",
    "&:first-of-type": {
      borderLeft: `1px solid ${theme.colors["gray300"]}`,
      borderTopLeftRadius: theme.globalBorderRadius,
      borderBottomLeftRadius: theme.globalBorderRadius,
    },
    "&:last-of-type": {
      borderRight: `1px solid ${theme.colors["gray300"]}`,
      borderTopRightRadius: theme.globalBorderRadius,
      borderBottomRightRadius: theme.globalBorderRadius,
    },
    "& span": {
      color: (props) => getSpanColor(theme, props),
    },
  },
});

export default withStyles(styles, { name: "EuiButtonGroup" })(ButtonGroup);
