// @flow
import React, { Component } from "react";
import filter from "lodash/filter";
import clone from "lodash/clone";
import classNames from "classnames";
import withStyles from "react-jss";
import Paper from "../Paper";
import CaretRight from "../Icon/CaretRight";

type Props = {
  children: any,
  classes: Object,
  className: string,
  expanded: boolean,
  innerClassName: string,
  theme: Object,
  title: string,
};

type State = {
  expanded: boolean,
  isExpandablePanels: boolean,
  panels: boolean[],
};

class ExpandablePanel extends Component<Props, State> {
  constructor(props) {
    super(props);
    let panels = [];
    const isExpandablePanels = Array.isArray(this.props.children)
      ? filter(React.Children.toArray(this.props.children), (item) => {
          return item.type.displayName === "Jss(ExpandablePanel)";
        }).length > 0
      : false;
    if (isExpandablePanels) {
      panels = React.Children.map(this.props.children, () => {
        return false;
      });
    }

    this.state = {
      expanded: props.expanded || false,
      isExpandablePanels,
      panels,
    };
  }

  togglePanel = () => {
    this.setState((state) => ({
      expanded: !state.expanded,
    }));
  };

  togglePanels = (index) => {
    const panelsClone = clone(this.state.panels);
    const current = panelsClone[index];
    var i,
      n = panelsClone.length;
    for (i = 0; i < n; ++i) {
      panelsClone[i] = false;
    }
    //panelsClone.map(() => false);

    panelsClone[index] = !current;
    this.setState({
      panels: panelsClone,
    });
  };

  render() {
    const {
      children,
      classes,
      className,
      innerClassName,
      theme,
      title,
      ...rest
    } = this.props;
    const { expanded, panels } = this.state;

    if (this.state.isExpandablePanels) {
      // Here is we make some magic happen.
      return React.Children.map(children, (child, index) => {
        return (
          <Paper
            key={index}
            className={classNames(classes.root, className)}
            {...rest}
            withPadding={false}
          >
            <button
              onClick={() => this.togglePanels(index)}
              className={classes.button}
            >
              <span className={classes.headerTitle}>{child.props.title}</span>
              <div className={classes.headerIcon}>
                <CaretRight
                  className={panels[index] ? classes.rotate90 : classes.rotate0}
                />
              </div>
            </button>
            <div
              className={classNames(
                classes.children,
                innerClassName,
                panels[index] ? classes.open : classes.close
              )}
            >
              {typeof child.props.children === "string" ? (
                <div className={classes.padding}>{child.props.children}</div>
              ) : (
                child.props.children
              )}
            </div>
          </Paper>
        );
      });
    } else {
      return (
        <Paper
          className={classNames(classes.root, className)}
          {...rest}
          withPadding={false}
        >
          <button onClick={this.togglePanel} className={classes.button}>
            <span className={classes.headerTitle}>{title}</span>
            <div className={classes.headerIcon}>
              <CaretRight
                className={expanded ? classes.rotate90 : classes.rotate0}
              />
            </div>
          </button>
          <div
            className={classNames(
              classes.children,
              innerClassName,
              expanded ? classes.open : classes.close
            )}
          >
            {typeof children === "string" ? (
              <div className={classes.padding}>{children}</div>
            ) : (
              children
            )}
          </div>
        </Paper>
      );
    }
  }
}

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 0,
    borderBottom: `1px solid ${theme.colors["gray200"]}`,
    "&:only-of-type": {
      border: `1px solid ${theme.colors["gray200"]} !important`,
      borderRadius: "5px !important",
    },
    "&:first-of-type": {
      borderTop: `1px solid ${theme.colors["gray200"]}`,
      borderBottom: "none",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    "&:last-of-type": {
      borderTop: "none",
      borderBottom: `1px solid ${theme.colors["gray200"]}`,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    },
  },
  children: {
    //display: "flex",
    overflow: "hidden",
  },
  padding: {
    ...theme.globalPadding,
  },
  open: {
    maxHeight: "500px",
    transition: "max-height 1s ease",
  },
  close: {
    maxHeight: "0",
    transition: "max-height 1s ease",
  },
  button: {
    display: "flex",
    padding: "10px 16px",
    "&:focus": {
      outline: "none !important",
    },
  },
  headerTitle: {
    flexGrow: "1",
    marginLeft: "4px",
    textAlign: "left",
  },
  headerIcon: {
    flexShrink: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "4px",
  },
  rotate90: {
    transform: "rotate(90deg)",
    transition: ".2s ease",
  },
  rotate0: {
    transform: "rotate(0deg)",
    transition: ".2s ease",
  },
}))(ExpandablePanel);
