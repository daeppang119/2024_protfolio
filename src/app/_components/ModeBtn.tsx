"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { CiDark, CiLight } from "react-icons/ci";

export default function ModeBtn() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    if (!theme) {
      setTheme(systemTheme || "light");
    }
  }, [systemTheme, theme, setTheme]);

  return (
    <button
      onClick={() => {
        setTheme(currentTheme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "light" ? <CiLight size={26} /> : <CiDark size={26} />}
    </button>
  );
}
