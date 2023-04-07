"use client";

import React from "react";
import { useTheme } from "next-themes";

import DarkThemeIcon from "./icons/DarkThemeIcon";
import LightThemeIcon from "./icons/LightThemeIcon";
import Toggle from "./Toggle";

const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex items-center justify-around rounded-lg bg-grey-light px-8 py-2 dark:bg-grey-vdark">
      <LightThemeIcon />
      <Toggle
        checked={currentTheme === "dark"}
        onActive={() => setTheme("dark")}
        onInactive={() => setTheme("light")}
      />
      <DarkThemeIcon />
    </div>
  );
};

export default ThemeToggle;
