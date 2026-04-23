"use client";

const STORAGE_KEY = "portfolio-theme";

export function ThemeToggle() {
  function handleToggle() {
    const currentTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem(STORAGE_KEY, nextTheme);
  }

  return (
    <button
      type="button"
      aria-label="Alternar tema"
      onClick={handleToggle}
      className="inline-flex h-10 items-center justify-center rounded-full border border-line bg-surface-strong px-4 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:border-cyan/30 hover:text-foreground"
    >
      Alternar tema
    </button>
  );
}
