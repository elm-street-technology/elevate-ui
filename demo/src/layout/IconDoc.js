import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";

import LiveExample from "./LiveExample";
import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import * as AllIcons from "elevate-ui-icons";
import Icon from "elevate-ui-icons/Icon";

type Props = {
  classes: Object,
};

type State = {
  initialIcons: Array<string>,
  icons: Array<string>,
};

const IconExample = (props) => {
  const { classes } = props;
  return (
    <Paper>
      <div className={classes.iconContainer}>
        <Icon name="AlarmOn" color="#55c3ba" size={34} />
      </div>
      <div className={classes.iconContainer}>
        <Icon name="AddCircleOutline" color="rgb(77, 77, 77)" size={24} />
      </div>
      <div className={classes.iconContainer}>
        <Icon name="Pool" color="#f15953" size={48} />
      </div>
    </Paper>
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
    // const documentation = require(`elevate-ui/src/Icon/component.json`);

    return (
      <div style={{ width: "100%", height: "auto" }}>
        <div className={classes.container}>
          <Typography type="title">{`<Icon />`}</Typography>
          <Typography type="body">
            In addition to all the Material Design Icons– we also ship a handful
            of custom icons.
          </Typography>
          <LiveExample
            element={() => <IconExample classes={classes} />}
            code={`
const IconExample = (props) => {
  const { classes } = props;
  return (
    <div>
      <div className={classes.iconContainer}>
        <Icon name="AlarmOn" color="#55c3ba" size={34} />
      </div>
      <div className={classes.iconContainer}>
        <Icon name="AddCircleOutline" color="rgb(77, 77, 77)" size={24} />
      </div>
      <div className={classes.iconContainer}>
        <Icon name="Pool" color="#f15953" size={48} />
      </div>
    </div>
  );
};
          `}
          />
          <Typography type="heading5" style={{ margin: "48px 0px" }}>
            Search for icons
          </Typography>
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
          <Paper style={{ marginTop: "40px" }}>
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
        </div>
      </div>
    );
  }
}

export default withStyles((theme) => ({
  grid: {
    display: "grid",
    margin: "80px auto",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gridColumnGap: "20px",
    gridRowGap: "100px",
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
  container: {
    maxWidth: "800px",
    margin: "45px auto",
    height: "auto",
    width: "100%",
    padding: "12px",

    [theme.breakpoints(600)]: {
      padding: "24px 0px",
    },

    [theme.breakpoints(900)]: {
      margin: "45px auto 45px 80px",
    },
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
    fontSize: "14px",
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
    fontWeight: "600",
    color: theme.colors.gray500,
    marginBottom: "4px",
  },
  formContainer: {
    margin: "16px 0 0",
  },
  iconContainer: {
    display: "inline-block",
    verticalAlign: "middle",
    margin: "10px 18px",
  },
}))(IconDoc);
