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

    // 클라이언트에서 서버로 데이터를 전송
    updateThemeOnServer(darkMode);
  }, [darkMode]);

  const updateThemeOnServer = async (isDarkMode: boolean) => {
    try {
      const response = await fetch("/api/theme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ darkMode: isDarkMode }),
      });

      if (!response.ok) {
        // 서버 응답이 성공적이지 않은 경우 오류 처리
        throw new Error("Failed to update theme on server");
      }

      // 성공적으로 요청이 완료된 후에 할 작업
      console.log("Theme updated on server");
    } catch (error) {
      // 네트워크 오류 또는 서버 응답 처리
      console.error("Error updating theme on server:", error);
    }
  };

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
