import React, { Dispatch, ReactNode, SetStateAction, useCallback } from "react";
import { THEMES } from "./config";
import { Theme, ThemeType } from "./model";

interface ThemeContextProps {
  themeType: ThemeType;
  theme: Theme;
  
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>;
  changeTheme: (type: ThemeType) => void;
}

export const ThemeColorContext = React.createContext<ThemeContextProps>({
  themeType: "dark",
  theme: THEMES["dark"]
} as ThemeContextProps);
interface IThemeBackgroundProps{
  children: ReactNode
}

export const ThemeColorProvider = ({ children }: IThemeBackgroundProps) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeType>("dark");

  const changeTheme = useCallback((type: ThemeType)=>{
      setCurrentTheme(type);
  },[setCurrentTheme])
  
  return (
    <ThemeColorContext.Provider
      value={{
        changeTheme,
        themeType: currentTheme,
        theme: THEMES[currentTheme],
        setCurrentTheme
      }}
    >
      {children}
    </ThemeColorContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeColorContext);
