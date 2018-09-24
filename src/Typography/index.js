import React from "react";
import classNames from "classnames";
import withStyles from "react-jss";

type Props = {
  children: any,
  classes: Object,
  /**
   * Accepts any classNames to be passed down to the component.
   */
  className: string,
  /**
   * What HTML element or component to use when rendered.
   */
  component: string,
  theme: Object,
  /**
   * Type of typography to render such as "title" or "body".
   */
  type: "title" | "body",
};

const typeElementMap = {
  title: "h1",
  body: "p",
};

/**
 * Renders a component used for displaying headings or body copy.
 */
const Typography = ({
  children,
  classes,
  className,
  component: componentProp,
  theme,
  type,
  ...rest
}: Props) => {
  const Element = componentProp || typeElementMap[type] || "span";
  return (
    <Element
      className={classNames(classes.root, classes[type], className)}
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
    fontSize: "36px",
    lineHeight: "48px",
    fontWeight: "600",
    color: theme.colors.gray800,
  },
  body: {
    maxWidth: "600px",
    fontSize: "14px",
    lineHeight: "18px",
  },
});

export default withStyles(styles, { name: "EuiTypography" })(Typography);
