import { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type ThemeToggleProps = {
  size: "small" | "large";
};

const ThemeToggle = ({ size }: ThemeToggleProps) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (!localStorage.theme) {
      localStorage.theme = "winter";
    } else {
      setTheme(localStorage.theme);
    }
  }, []);

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "winter") {
      localStorage.theme = "night";
      setTheme("night");
    } else if (theme === "night") {
      localStorage.theme = "winter";
      setTheme("winter");
    }
  };

  return (
    <div
      className="flex cursor-pointer items-center gap-1 space-x-1"
      onClick={toggleTheme}
    >
      <div className={`relative ${size === "large" && "text-4xl"} ${size === "small" && "text-xl"}`}>
        {theme === "winter" && <BsMoon />}
        {theme === "night" && <BsSun />}
      </div>
      <span className="font-semibold">
        {theme === "winter" ? "Dark" : "Light"} mode
      </span>
    </div>
  );
};

export default ThemeToggle;
