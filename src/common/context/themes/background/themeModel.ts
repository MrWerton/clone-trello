import { Color } from "../models/color.model";


export interface Theme {
  "--background": Color;
  "--color": Color;
}


export type ThemeType =
  
  | "dark"
  | "white"
  | "dark_green"
  | "dark_red"
  | "dark_blue"
  | "dark_yellow"
  | "dark_pink"
  | "dark_dark"
  | "dark_white";

