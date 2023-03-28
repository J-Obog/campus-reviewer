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
    <div className="flex items-center gap-1">
      <label className="swap-rotate swap text-4xl">
        <input type="checkbox" onClick={toggleTheme} />
        <div className="swap-off h-10 w-10 fill-current">
          <BsMoon />
        </div>
        <div className="swap-on h-10 w-10 fill-current">
          <BsSun />
        </div>
      </label>
      <span className="font-semibold">
        {theme === "winter" ? "Dark" : "Light"} mode
      </span>
    </div>
  );
};

export default ThemeToggle;
