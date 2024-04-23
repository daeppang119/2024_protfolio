"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { CiDark, CiLight } from "react-icons/ci";

export default function DarkTheme() {
  const { systemTheme, theme, setTheme } = useTheme();
  const handleToggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    if (!theme) {
      setTheme(systemTheme || "light");
    }
  }, [systemTheme, theme, setTheme]);

  return (
    <button onClick={handleToggleTheme}>
      {theme === "light" ? <CiLight size={26} /> : <CiDark size={26} />}
    </button>
  );
}
