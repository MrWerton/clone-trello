import { Color } from "../models/color.model";

export type ThemeType =
  | "green"
  | "red"
  | "blue"
  | "yellow"
  | "pink"
  | "dark"
  | "white"
  | "dark_green"
  | "dark_red"
  | "dark_blue"
  | "dark_yellow"
  | "dark_pink"
  | "dark_dark"
  | "dark_white";

export interface Theme {
  "--primary": Color;
}
