import injectSheet from "react-jss";
import merge from "lodash/merge";

const withStyles = (styles, options) =>
  injectSheet((theme) => {
    if (
      options &&
      options.name &&
      theme &&
      theme.overrides &&
      theme.overrides[options.name]
    ) {
      return merge(styles(theme), theme.overrides[options.name]);
    }

    return styles(theme);
  });

export default withStyles;
