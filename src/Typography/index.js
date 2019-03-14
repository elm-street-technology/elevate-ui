import React from "react";
import classNames from "classnames";
import withStyles from "../withStyles";

type Props = {
  children: any,
  classes: Object,
  /**
   * Accepts any classNames to be passed down to the component.
   */
  className?: string,
  /**
   * Accepts a string value to be used as the color for the component.
   */
  color?: string,
  /**
   * What HTML element to use when rendered.
   */
  element?: string,
  /**
   * Adds margin to the top of the component
   */
  gutterTop?: boolean,
  /**
   * Adds margin to the bottom of the component
   */
  gutterBottom?: boolean,
  theme: Object,
  /**
   * Type of text to be used.
   */
  // prettier-ignore
  type: "title"| "body"| "heading2"| "heading3"| "heading4"| "heading5"| "heading6"
};

const typeElementMap = {
  title: "h1",
  body: "p",
  heading2: "h2",
  heading3: "h3",
  heading4: "h4",
  heading5: "h5",
  heading6: "h6",
};

/**
 * Renders a component used for displaying headings or body copy.
 */
const Typography = ({
  children,
  color,
  classes,
  className,
  element: elementProp,
  gutterTop,
  gutterBottom,
  theme,
  type,
  ...rest
}: Props) => {
  const Element = elementProp || typeElementMap[type] || "span";
  return (
    <Element
      className={classNames(
        classes.root,
        classes[type],
        gutterTop && classes.gutterTop,
        gutterBottom && classes.gutterBottom,
        className
      )}
      {...rest}
    >
      {children}
    </Element>
  );
};

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  title: {
    fontSize: "32px",
    lineHeight: "48px",
    fontWeight: "600",
    color: (props) => props.color || "#2E2E35",

    [theme.breakpoints(600)]: {
      fontSize: "36px",
    },
  },
  heading2: {
    fontSize: "28px",
    lineHeight: "44px",
    fontWeight: "600",
    color: (props) => props.color || "#2E2E35",

    [theme.breakpoints(600)]: {
      fontSize: "32px",
    },
  },
  heading3: {
    fontSize: "24px",
    lineHeight: "40px",
    fontWeight: "600",
    color: (props) => props.color || "#2E2E35",

    [theme.breakpoints(600)]: {
      fontSize: "28px",
    },
  },
  heading4: {
    fontSize: "24px",
    lineHeight: "36px",
    fontWeight: "600",
    color: (props) => props.color || "#2E2E35",

    [theme.breakpoints(600)]: {
      fontSize: "28px",
    },
  },
  heading5: {
    fontSize: "18px",
    lineHeight: "32px",
    fontWeight: "600",
    color: (props) => props.color || "#2E2E35",

    [theme.breakpoints(600)]: {
      fontSize: "20px",
    },
  },
  heading6: {
    fontSize: "16px",
    lineHeight: "30px",
    fontWeight: "600",
    color: (props) => props.color || "#2E2E35",

    [theme.breakpoints(600)]: {
      fontSize: "18px",
    },
  },
  body: {
    fontSize: "18px",
    lineHeight: "28px",
    color: (props) => props.color || "#4b565f",

    [theme.breakpoints(600)]: {
      fontSize: "20px",
    },
  },
  gutterBottom: {
    marginBottom: (props) => (props.type === "body" ? "1.5em" : "0.35em"),
  },
  gutterTop: {
    marginTop: "0.35em",
  },
});

export default withStyles(styles, { name: "EuiTypography" })(Typography);
