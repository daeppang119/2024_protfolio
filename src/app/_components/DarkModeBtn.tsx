"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { CiDark, CiLight } from "react-icons/ci";

export default function DarkModeBtn() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    if (!theme) {
      setTheme(systemTheme || "light");
    }
  }, [systemTheme, theme, setTheme]);

  return (
    <div>
      <button
        onClick={() => {
          setTheme(currentTheme === "dark" ? "light" : "dark");
        }}
      >
        {theme === "light" ? <CiLight /> : <CiDark />}
      </button>
    </div>
  );
}
