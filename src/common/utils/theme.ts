export type Theme = "light" | "dark" | "system";

export const applyTheme = (theme: Theme) => {
  const root = document.documentElement;

  root.classList.remove("dark", "light");

  if (theme === "system") {
    localStorage.removeItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (prefersDark) {
      root.classList.add("dark");
    } else {
      root.classList.add("light");
    }
  } else {
    localStorage.theme = theme;
    root.classList.add(theme);
  }
};

export const initTheme = () => {
  const saved = localStorage.getItem("theme") as Theme | null;

  if (saved === "dark" || saved === "light") {
    applyTheme(saved);
  } else {
    applyTheme("system");
  }
};
