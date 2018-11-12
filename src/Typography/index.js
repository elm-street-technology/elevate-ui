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

const styles = () => ({
  root: {
    width: "100%",
  },
  title: {
    fontSize: "36px",
    lineHeight: "48px",
    fontWeight: "600",
    color: "#2E2E35",
  },
  heading2: {
    fontSize: "32px",
    lineHeight: "44px",
    fontWeight: "600",
    color: "#2E2E35",
  },
  heading3: {
    fontSize: "28px",
    lineHeight: "40px",
    fontWeight: "600",
    color: "#2E2E35",
  },
  heading4: {
    fontSize: "24px",
    lineHeight: "36px",
    fontWeight: "600",
    color: "#2E2E35",
  },
  heading5: {
    fontSize: "20px",
    lineHeight: "32px",
    fontWeight: "600",
    color: "#2E2E35",
  },
  heading6: {
    fontSize: "18px",
    lineHeight: "30px",
    fontWeight: "600",
    color: "#2E2E35",
  },
  body: {
    maxWidth: "600px",
    fontSize: "14px",
    lineHeight: "18px",
  },
  gutterBottom: {
    marginBottom: "0.35em",
  },
  gutterTop: {
    marginTop: "0.35em",
  },
});

export default withStyles(styles, { name: "EuiTypography" })(Typography);
