export const setTheme = (theme: "light" | "dark") => {
  document.documentElement.className = theme;
};
