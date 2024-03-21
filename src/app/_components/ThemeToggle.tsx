"use client";

import { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // 서버에도 정보를 알아ㅑ 안깜밖이다...라 쿠키로 넣으래

  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        setDarkMode(!darkMode);
      }}
    >
      {darkMode ? (
        <IoMdMoon className="text-[#f1f1f1]" size={24} />
      ) : (
        <MdSunny className="text-[#222]" size={24} />
      )}
    </div>
  );
}
