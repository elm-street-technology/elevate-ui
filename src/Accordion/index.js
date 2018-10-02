import React, { Component } from "react";
import { BaseAccordion } from "./base";
import AccordionContents from "./accordion-contents";
import Paper from "../Paper";
import classNames from "classnames";
import withStyles from "react-jss";
import ChevronRight from "elevate-ui-icons/ChevronRight";

type Props = {
  className?: string,
  items: any,
  stateReducer?: Function,
};

class Accordion extends Component<Props> {
  render() {
    const { classes, className, items, stateReducer, ...rest } = this.props;
    return (
      <BaseAccordion
        className={classNames(classes.root, className)}
        {...this.props}
      >
        {({ openIndexes, handleItemClick }) => (
          <Paper {...rest} withPadding={false}>
            {items.map((item, index) => (
              <div // AccordionItem
                className={classes.item}
                key={item.title}
                direction="vertical"
              >
                <button // AccordionButton
                  className={classNames(
                    classes.button,
                    openIndexes.includes(index) ? classes.open : null
                  )}
                  onClick={() => handleItemClick(index)}
                >
                  <span className={classes.headerTitle}>{item.title} </span>
                  <div className={classes.headerIcon}>
                    {openIndexes.includes(index) ? (
                      <ChevronRight className={classes.rotateMinus90} />
                    ) : (
                      <ChevronRight className={classes.rotate90} />
                    )}
                  </div>
                </button>
                <AccordionContents
                  className={
                    openIndexes.includes(index)
                      ? classes.contentOpen
                      : classes.content
                  }
                  isOpen={openIndexes.includes(index)}
                >
                  {item.contents}
                </AccordionContents>
              </div>
            ))}
          </Paper>
        )}
      </BaseAccordion>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 0,
    borderBottom: `1px solid ${theme.colors["gray200"]}`,
  },
  headerTitle: {
    flex: "1 1 0% !important",
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
  item: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 0,
    borderBottom: `1px solid ${theme.colors["gray200"]}`,
    "&:only-of-type": {
      border: `1px solid ${theme.colors["gray200"]} !important`,
      borderRadius: "5px !important",
    },
    "&:first-of-type": {},
    "&:last-of-type": {
      borderTop: "none",
      borderBottom: `1px solid ${theme.colors["gray200"]}`,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    },
  },
  button: {
    display: "flex",
    padding: "10px 16px",
    "&:focus": {
      outline: "none !important",
    },
  },
  content: {
    display: "grid",
    gridTemplate: "auto auto",
    gridGap: 4,
    gridAutoFlow: "row",
  },
  contentOpen: {
    display: "grid",
    gridTemplate: "auto auto",
    gridGap: 4,
    gridAutoFlow: "row",
    ...theme.globalPadding,
  },
  open: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  rotateMinus90: {
    transform: "rotate(-90deg)",
    transition: ".2s ease",
  },
  rotate90: {
    transform: "rotate(90deg)",
    transition: ".2s ease",
  },
  rotate0: {
    transform: "rotate(0deg)",
    transition: ".2s ease",
  },
}))(Accordion);
