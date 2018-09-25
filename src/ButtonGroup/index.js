import React, { Component, Fragment } from "react";
import withStyles from "react-jss";
import classNames from "classnames";
import Label from "../Label";
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
  if (props.color !== "primary" && props.color !== "secondary") {
    return props.color;
  } else {
    return theme.colors[props.color];
  }
}

function getSpanColor(theme, props) {
  let backgroundColor;
  if (props.color === "primary" || props.color === "secondary") {
    backgroundColor = theme.colors[props.color];
  } else {
    backgroundColor = props.color;
  }

  if (Color(backgroundColor).isDark()) {
    return theme.colors["white"];
  } else if (Color(backgroundColor).isLight()) {
    return theme.colors["gray900"];
  } else {
    return theme.colors["gray500"];
  }
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
      label,
      items,
      classes,
      field: { name, value },
      multiSelect,
      form: { values },
    } = this.props;

    return (
      <div className={classes.scaffold}>
        {label && <Label>{label}</Label>}
        <div className={classNames(classes.toggles, classes.inline)}>
          {items.map((item) => {
            const input = item.value;
            return (
              <Fragment key={item.value}>
                <label
                  className={classNames(
                    classes.button,
                    Array.isArray(values[name])
                      ? values[name].includes(item.value)
                        ? classes.buttonActive
                        : null
                      : values[name] === item.value
                        ? classes.buttonActive
                        : null
                  )}
                >
                  <span
                    className={
                      this[`input${item.value}`] &&
                      this[`input${item.value}`].checked
                        ? classes.spanTextActive
                        : classes.spanText
                    }
                  >
                    {item.label}
                  </span>
                  <input
                    id={item.value}
                    type="checkbox"
                    name={name}
                    className={classes.hiddenInput}
                    checked={
                      multiSelect
                        ? value.indexOf(item.value) > -1
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
      </div>
    );
  }
}

export default withStyles((theme) => ({
  scaffold: {
    margin: "8px auto 16px",
  },
  toggles: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginLeft: "-12px",
  },
  inline: {
    flexDirection: "row",
  },
  hiddenInput: {
    display: "none",
  },
  button: {
    background: "none",
    border: `1px solid ${theme.colors["gray200"]}`,
    borderRight: "none",
    padding: 12,
    cursor: "pointer",
    "&:first-of-type": {
      borderLeft: `1px solid ${theme.colors["gray200"]}`,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    "&:last-of-type": {
      borderRight: `1px solid ${theme.colors["gray200"]}`,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
  },
  spanText: {
    pointerEvents: "none",
    color: theme.colors["gray500"],
  },
  spanTextActive: {
    pointerEvents: "none",
    color: (props) => getSpanColor(theme, props),
  },
  buttonActive: {
    background: (props) => getBackgroundColor(theme, props),
    border: `1px solid ${theme.colors["gray200"]}`,
    borderRight: "none",
    padding: 12,
    cursor: "pointer",
    "&:first-of-type": {
      borderLeft: `1px solid ${theme.colors["gray200"]}`,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    "&:last-of-type": {
      borderRight: `1px solid ${theme.colors["gray200"]}`,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
  },
}))(ButtonGroup);
