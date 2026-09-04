import { createContext, useContext, useState, useEffect } from "react";

const SKIN_COLORS = {
  "color-1": "#c60606",
  "color-2": "#fa5b0f",
  "color-3": "#03c200",
  "color-4": "#008eff",
  "color-5": "#5500ff",
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [skin, setSkin] = useState("color-4");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty("--skin-color", SKIN_COLORS[skin]);
  }, [skin]);

  useEffect(() => {
    document.body.classList.toggle("light", !dark);
  }, [dark]);

  const value = {
    skin,
    setSkin,
    skinColors: SKIN_COLORS,
    dark,
    toggleDark: () => setDark((prev) => !prev),
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
