import { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeToggle = () => {
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
    <div className="flex items-center gap-1 cursor-pointer space-x-1" onClick={toggleTheme}>
      <div className="relative text-4xl">
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
