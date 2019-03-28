// @flow
import Color from "color";

exports.generatePalette = (hex: string) => {
  const color: Object = {
    "50": Color(hex)
      .lighten(0.5)
      .string(),
    "100": Color(hex)
      .lighten(0.4)
      .string(),
    "200": Color(hex)
      .lighten(0.3)
      .string(),
    "300": Color(hex)
      .lighten(0.2)
      .string(),
    "400": Color(hex)
      .lighten(0.1)
      .string(),
    "500": hex,
    "600": Color(hex)
      .darken(0.1)
      .string(),
    "700": Color(hex)
      .darken(0.2)
      .string(),
    "800": Color(hex)
      .darken(0.3)
      .string(),
    "900": Color(hex)
      .darken(0.4)
      .string(),
  };
  return color;
};
