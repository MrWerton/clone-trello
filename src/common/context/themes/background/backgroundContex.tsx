import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { THEMES } from "./themeConfig";
import { Theme, ThemeType } from "./themeModel";

interface ThemeContextProps {
  themeType: ThemeType;
  themeBg: Theme;
  themeColor: Theme;
  changeThemeBg: (type: ThemeType) => void;
  changeThemeColor: (type: ThemeType) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeType: "white",
  themeBg: THEMES["white"],
  themeColor: THEMES['dark'],
} as ThemeContextProps);

interface IThemeBackgroundProps{
    children: ReactNode
}

export const ThemeBackgroundProvider = ({ children }:IThemeBackgroundProps) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeType>("white");
  const [currentThemeColor, setCurrentThemeColor] = React.useState<ThemeType>("dark_white");
  const changeThemeBg = (type: ThemeType) => {
    setCurrentTheme(type);
  };
  const changeThemeColor = (type: ThemeType) => {
    setCurrentThemeColor(type);
  };
  return (
    <ThemeContext.Provider
      value={{
        changeThemeBg,
        changeThemeColor,
        themeType: currentTheme,
        themeBg: THEMES[currentTheme],
        themeColor: THEMES[currentThemeColor],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeBackground = () => React.useContext(ThemeContext);
