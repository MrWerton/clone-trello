import { Color } from "../models/color.model";
import { Theme, ThemeType } from "./model";

export const THEMES: Record<ThemeType, Theme> = {
  white: {
    "--primary": Color.LIGHT
  },
  dark: {
    "--primary": Color.DARK
  },

  blue: {
    "--primary": Color.BLUE
  },
  green: {
    "--primary": Color.GREEN
  },
  pink: {
    "--primary": Color.PINK
  },
  yellow: {
    "--primary": Color.YELLOW
  },

  red: {
    "--primary": Color.RED
  },
  dark_white: {
    "--primary": Color.LIGHT
  },
  dark_dark: {
    "--primary": Color.DARK
  },

  dark_blue: {
    "--primary": Color.BLUE
  },
  dark_green: {
    "--primary": Color.GREEN
  },
  dark_pink: {
    "--primary": Color.PINK
  },
  dark_yellow: {
    "--primary": Color.YELLOW
  },

  dark_red: {
    "--primary": Color.RED
  }
};
