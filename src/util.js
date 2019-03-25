// @flow

export const checkString = (colorProp: string): boolean => {
  if (["primary", "secondary", "tertiary"].includes(colorProp)) {
    return true;
  } else {
    return false;
  }
};
