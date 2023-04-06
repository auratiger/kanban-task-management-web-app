"use client";

import React from "react";
import { useTheme } from "next-themes";

const Toggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        className="text-2xl md:text-4xl absolute bottom-32 rounded-lg bg-gray-800 px-8 py-2 text-white transition-all duration-100 hover:bg-gray-600 dark:bg-red-500 dark:text-gray-800 dark:hover:bg-gray-300"
      >
        Toggle Mode
      </button>
      {currentTheme}
    </div>
  );
};

export default Toggle;
