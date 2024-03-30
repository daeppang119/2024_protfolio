"use client";
import { useState, useEffect } from "react";

const DARK = "dark";
const LIGHT = "light";
const THEME = "theme";

const useTheme = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem(THEME);
    if (theme === DARK) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const documentClassList = document.documentElement.classList;
    if (darkMode) {
      documentClassList.add(DARK);
      localStorage.setItem(THEME, DARK);
      return;
    }

    documentClassList.remove(DARK);
    localStorage.setItem(THEME, LIGHT);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return {
    darkMode,
    toggleTheme,
  };
};
export default useTheme;
