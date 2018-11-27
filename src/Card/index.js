// @flow
import React, { Component } from "react";
import classNames from "classnames";

import Typography from "../Typography";
import withStyles from "../withStyles";
import Button from "../Button";
import MoreVert from "elevate-ui-icons/MoreVert";

import SecondaryActions from "./SecondaryActions";

type $Props = Object;
type $State = {
  menuActive: boolean,
};

class Card extends Component<$Props, $State> {
  constructor(props) {
    super(props);

    this.state = {
      menuActive: false,
    };
  }

  toggleSecondaryActions = () => {
    this.setState((state) => ({ menuActive: !state.menuActive }));
  };

  render() {
    const {
      classes,
      className,
      title,
      children,
      icon,
      secondaryActions,
      actions,
    } = this.props;

    const { menuActive } = this.state;

    return (
      <div className={classNames(classes.root, className)}>
        <div className={classes.titleContainer}>
          <div>
            <div className={classes.icon}>{icon}</div>{" "}
            <Typography type="heading6">{title}</Typography>
          </div>
          {secondaryActions && secondaryActions.length > 0 ? (
            <div>
              <button
                className={classes.secondaryActionsButton}
                type="button"
                onClick={this.toggleSecondaryActions}
              >
                <MoreVert />
              </button>
            </div>
          ) : null}
        </div>
        <div className={classes.contentContainer}>{children}</div>
        <div className={classes.footerContainer}>
          {actions.map((action) => {
            return (
              <Button
                key={action.label}
                type="button"
                className={classes.actionButton}
                onClick={action.onClick}
                icon={action.icon}
                isOutlined={action.isOutlined}
                color={action.color ? action.color : "primary"}
              >
                {action.label}
              </Button>
            );
          })}
        </div>
        <SecondaryActions
          handleClickOutside={this.toggleSecondaryActions}
          secondaryActions={secondaryActions}
          visible={menuActive}
        />
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    width: "100%",
    maxWidth: "300px",
    border: "1px solid #ccc",
    borderRadius: "3px",
    backgroundColor: theme.colors["white"],
    boxShadow: theme.shadows[0],
  },
  titleContainer: {
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    borderBottom: `1px solid ${theme.colors["gray100"]}`,
    "& > div": {
      display: "flex",
      alignItems: "center",
    },
  },
  icon: {
    marginRight: "4px",
  },
  secondaryActionsButton: {
    appearance: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
  },
  contentContainer: {
    flex: "1 0 auto",
    padding: "8px",
  },
  footerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px",
    backgroundColor: theme.colors["gray050"],
    "& button + button": {
      marginLeft: "6px",
    },
  },
});

export default withStyles(styles)(Card);
