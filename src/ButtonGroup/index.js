import React, { Component, Fragment } from "react";
import withStyles from "react-jss";
import classNames from "classnames";
import Label from "../Label";
import without from "lodash/without";

type Props = {
  classes: Object,
  /**
   * classNames to be passed to the component.
   */
  className: string,
  field: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  form: Object, // needs flow-typed https://github.com/flowtype/flow-typed/issues/1903
  options: Array<{ label: string, value: string, disabled: boolean }>,
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
   * Accepts a color value to change the button group colors.
   */
  color?: string,
};

type State = {
  /**
   * Array of current selection.
   */
  selected: Array<string>,
};

/**
 * A component used to render a group of buttons that can have a single or multiple values.
 */
class ButtonGroup extends Component<Props, State> {
  static defaultProps = {
    options: [],
    multiSelect: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: [],
    };
  }

  onChange = (e) => {
    const {
      field: { name, value },
      form: { setFieldValue },
    } = this.props;

    const selectedCheckbox = e.target.id;
    if (this.props.multiSelect) {
      let selectedCheckboxes = Array.isArray(value) ? value.slice() : [];

      if (
        e.target.checked &&
        selectedCheckboxes.indexOf(selectedCheckbox) === -1
      ) {
        selectedCheckboxes.push(selectedCheckbox);
      } else if (!e.target.checked) {
        selectedCheckboxes = without(selectedCheckboxes, selectedCheckbox);
      }
      return setFieldValue(name, selectedCheckboxes);
    }

    return setFieldValue(name, selectedCheckbox);
  };

  handleClick = (input) => {
    document.getElementById(input).click();
    let updatedState = this.state.selected.slice();

    if (updatedState.includes(input) && this.props.multiSelect === true) {
      updatedState = updatedState.filter((val) => {
        return val !== input;
      });
    } else if (updatedState.includes(input)) {
      return;
    } else if (this.props.multiSelect) {
      updatedState.push(input);
    } else {
      updatedState = [input];
    }

    this.setState({ selected: updatedState });
  };

  render() {
    const {
      label,
      options,
      classes,
      field: { name },
      multiSelect,
    } = this.props;

    const { selected } = this.state;
    return (
      <div className={classes.scaffold}>
        {label && <Label>{label}</Label>}
        <div className={classNames(classes.toggles, classes.inline)}>
          {options.map((option) => (
            <Fragment key={option.value}>
              <label
                className={classNames(
                  classes.button,
                  selected.includes(option.value) ? classes.buttonActive : null
                )}
                onClick={() => this.handleClick(option.value)}
              >
                <span className={classes.spanText}>{option.label}</span>
              </label>
              <input
                id={option.value}
                type={multiSelect ? "checkbox" : "radio"}
                name={name}
                className={classes.hiddenInput}
                onChange={this.onChange}
              />
            </Fragment>
          ))}
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
    border: `2px solid ${theme.colors["gray200"]}`,
    borderRight: "none",
    padding: 12,
    cursor: "pointer",
    "&:first-of-type": {
      borderLeft: `2px solid ${theme.colors["gray200"]}`,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    "&:last-of-type": {
      borderRight: `2px solid ${theme.colors["gray200"]}`,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
  },
  spanText: {
    pointerEvents: "none",
  },
  buttonActive: {
    background: (props) =>
      props.color ? theme.colors[props.color] : theme.colors["primary"],
    border: `2px solid ${theme.colors["gray200"]}`,
    borderRight: "none",
    padding: 12,
    cursor: "pointer",
    "&:first-of-type": {
      borderLeft: `2px solid ${theme.colors["gray200"]}`,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    "&:last-of-type": {
      borderRight: `2px solid ${theme.colors["gray200"]}`,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
  },
}))(ButtonGroup);
