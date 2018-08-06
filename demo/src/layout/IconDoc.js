import React, { Component } from "react";
import withStyles from "react-jss";

import LiveExample from "./LiveExample";
import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import * as AllIcons from "elevate-ui/Icon";
import Icon from "elevate-ui/Icon/Icon";

type Props = {
  classes: Object,
};

type State = {
  initialIcons: Array<string>,
  icons: Array<string>,
};

const IconExample = (props) => {
  return (
    <div>
      <Icon name="AlarmOn" color="red" size={34} />
    </div>
  );
};

class IconDoc extends Component<Props, State> {
  constructor(props) {
    super(props);

    const IconLibrary = Object.keys(AllIcons);

    this.state = {
      initialIcons: IconLibrary,
      icons: IconLibrary,
    };
  }

  searchIcons = (iconList, searchTerm) => {
    let updatedList = iconList;
    return (updatedList = updatedList.filter((icon) => {
      return icon.toLowerCase().search(searchTerm.toLowerCase()) !== -1;
    }));
  };

  handleInputChange = (e) => {
    const initialIcons = this.state.initialIcons;
    const searchTerm = e.target.value;
    const iconList = this.searchIcons(initialIcons, searchTerm);

    this.setState({ icons: iconList });
  };

  render() {
    const { classes } = this.props;
    const { icons } = this.state;
    const documentation = require(`../../../src/Icon/component.json`);

    return (
      <Paper>
        <Typography type="title">{`<Icon />`}</Typography>
        <Typography type="body">
          {`${
            documentation.description
          } In addition to all the Material Design Icons – we also ship a handful
          of custom icons.`}
        </Typography>
        <LiveExample
          element={IconExample}
          code={`
            const IconExample = (props) => {
              return (
                <div>
                  <Icon name="AlarmOn" color="red" size={34} />
                </div>
              );
            };
          `}
        />
        <div className={classes.formContainer}>
          <form>
            <label htmlFor="searchTerm" className={classes.label}>
              Icon Search
            </label>
            <input
              id="searchTerm"
              type="text"
              name="searchTerm"
              className={classes.input}
              onChange={this.handleInputChange}
            />
          </form>
        </div>
        <div className={classes.grid}>
          {icons.map((name) => {
            return (
              <div key={name} className={classes.box}>
                <div className={classes.icon}>
                  <Icon name={name} />
                </div>
                <div className={classes.name}>{name}</div>
              </div>
            );
          })}
        </div>
      </Paper>
    );
  }
}

export default withStyles((theme) => ({
  grid: {
    display: "grid",
    margin: "80px auto",
    position: "relative",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridColumnGap: "20px",
    gridRowGap: "80px",
    maxWidth: "100%",
  },
  box: {
    display: "flex",
    position: "relative",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    textAlign: "center",
    overflow: "hidden",
  },
  icon: {
    position: "relative",
    flex: "0 1 auto",
    display: "inline-block",
  },
  name: {
    position: "relative",
    flex: "0 1 auto",
    display: "inline-block",
  },
  [theme.breakpoints[600]]: {
    grid: { gridTemplateColumns: "repeat(2, 1fr)" },
  },
  [theme.breakpoints[900]]: {
    grid: { gridTemplateColumns: "repeat(4, 1fr)" },
  },
  [theme.breakpoints[1200]]: {
    grid: { gridTemplateColumns: "repeat(6, 1fr)" },
  },
  input: {
    display: "block",
    width: "100%",
    maxWidth: "400px",
    height: "40px",
    color: theme.typography.bodyColor,
    fontFamily: "inherit",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.gray300}`,
    padding: "8px 12px",
    boxShadow: "none", // Reset default inputs for mozilla
    "-webkit-appearance": "none", // Reset default browser styles
    "-moz-appearance": "none", // Reset default browser styles

    "&:focus": {
      outline: "none", // Disable default focus glow
      boxShadow: theme.globalBoxShadow, // Add back focus style
    },

    "&:disabled": {
      cursor: "not-allowed",
    },
  },
  label: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: "700",
    color: theme.colors.gray500,
    marginBottom: "4px",
  },
  formContainer: {
    margin: "40px 0 0",
  },
}))(IconDoc);