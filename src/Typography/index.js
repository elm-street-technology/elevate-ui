import React from "react";
import classNames from "classnames";
import withStyles from "react-jss";

type Props = {
  children: any,
  classes: Object,
  className: string,
  component: string,
  gutterBottom: boolean,
  theme: Object,
  type:
    | "title"
    | "body"
    | "heading2"
    | "heading3"
    | "heading4"
    | "heading5"
    | "heading6",
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

const Typography = ({
  children,
  classes,
  className,
  component: componentProp,
  gutterBottom,
  theme,
  type,
  ...rest
}: Props) => {
  const Element = componentProp || typeElementMap[type] || "span";
  return (
    <Element
      className={classNames(
        classes.root,
        classes[type],
        gutterBottom && classes.gutterBottom,
        className
      )}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default withStyles((theme) => ({
  root: {
    width: "100%",
  },
  title: {
    fontSize: "36px",
    lineHeight: "48px",
    fontWeight: "600",
    color: theme.colors.gray800,
  },
  heading2: {
    fontSize: "32px",
    lineHeight: "44px",
    fontWeight: "600",
    color: theme.colors.gray800,
  },
  heading3: {
    fontSize: "28px",
    lineHeight: "40px",
    fontWeight: "600",
    color: theme.colors.gray800,
  },
  heading4: {
    fontSize: "24px",
    lineHeight: "36px",
    fontWeight: "600",
    color: theme.colors.gray800,
  },
  heading5: {
    fontSize: "20px",
    lineHeight: "32px",
    fontWeight: "600",
    color: theme.colors.gray800,
  },
  heading6: {
    fontSize: "18px",
    lineHeight: "30px",
    fontWeight: "600",
    color: theme.colors.gray800,
  },
  body: {
    maxWidth: "600px",
    fontSize: "14px",
    lineHeight: "18px",
  },
  gutterBottom: {
    marginBottom: "0.35em",
  },
}))(Typography);
