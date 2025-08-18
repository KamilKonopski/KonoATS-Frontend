import { useEffect, useState } from "react";
import { applyTheme, type Theme } from "../../../utils/theme";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;

    if (!saved) {
      applyTheme("system");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    } else {
      applyTheme(saved);
      setTheme(saved);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    applyTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center transition-colors duration-300 px-1"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white dark:bg-gray-200 shadow-md transform transition-transform duration-300
          ${theme === "dark" ? "translate-x-6" : "translate-x-0"}`}
      ></div>
      <span
        className={`absolute left-1 text-sm transition-opacity duration-300 ${
          theme === "light" ? "opacity-100" : "opacity-0"
        }`}
      >
        🌙
      </span>
      <span
        className={`absolute right-1.5 text-sm transition-opacity duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      >
        🌞
      </span>
    </button>
  );
};

export default ThemeSwitcher;
