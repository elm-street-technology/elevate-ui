// @flow
import React, { Component } from "react";
import withStyles from "../withStyles";
import ChevronRight from "elevate-ui-icons/ChevronRight";

import BaseAccordion from "./BaseAccordion";
import AccordionContents from "./AccordionContents";
import Paper from "../Paper";

type Props = {
  classes: Object,
  items: Array<{
    title: any | string,
    contents: any,
  }>,
};

class Accordion extends Component<Props> {
  render() {
    const { classes, items, ...rest } = this.props;
    return (
      <BaseAccordion {...rest}>
        {({ openIndexes, handleItemClick }) => (
          <Paper {...rest} withPadding={false}>
            {items.map((item, index) => (
              <div // AccordionItem
                key={index}
                className={classes.item}
              >
                <button // AccordionButton
                  className={classes.button}
                  onClick={() => handleItemClick(index)}
                >
                  <span className={classes.headerTitle}>{item.title}</span>
                  <div className={classes.headerIcon}>
                    <ChevronRight
                      className={
                        openIndexes.includes(index)
                          ? classes.rotateMinus90
                          : classes.rotate90
                      }
                    />
                  </div>
                </button>
                <AccordionContents
                  className={
                    openIndexes.includes(index) ? classes.content : null
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
  item: {
    display: "flex",
    flexDirection: "column",
    borderBottom: `1px solid ${theme.colors["gray200"]}`,

    "&:last-child": {
      borderBottom: "none",
    },
  },
  button: {
    display: "flex",
    padding: "12px 16px",
    textAlign: "left",
  },
  headerTitle: {
    display: "flex",
    fontWeight: "600",
  },
  headerIcon: {
    flexShrink: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    padding: "8px 16px 16px",
  },
  rotateMinus90: {
    transform: "rotate(-90deg)",
    transition: ".2s ease",
  },
  rotate90: {
    transform: "rotate(90deg)",
    transition: ".2s ease",
  },
}))(Accordion);
