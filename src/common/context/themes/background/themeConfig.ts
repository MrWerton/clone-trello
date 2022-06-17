import { Color } from "../models/color.model";
import { Theme, ThemeType } from "./themeModel";

export const THEMES: Record<ThemeType, Theme> = {
  white: {
    "--background": Color.DARK,
    "--color": Color.GREEN
  },
  dark: {
    "--background": Color.DARK,
    "--color": Color.LIGHT
  },
  dark_blue: {
    "--background": Color.DARK,
    "--color": Color.LIGHT
  },
  dark_green: {
    "--background": Color.DARK,
    "--color": Color.LIGHT
  },
  dark_pink: {
    "--background": Color.DARK,
    "--color": Color.LIGHT
  },
  dark_white: {
    "--background": Color.DARK,
    "--color": Color.LIGHT
  },
  dark_dark: {
    "--background": Color.DARK,
    "--color": Color.LIGHT
  },
  dark_yellow: {
    "--background": Color.DARK,
    "--color": Color.LIGHT
  },
  dark_red: {
    "--background": Color.DARK,
    "--color": Color.PINK
  },
  

};
