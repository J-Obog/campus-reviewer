import { useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { updateTheme } from "../redux/slices/ThemeSlice";
import { useAppSelector, useAppDispatch } from "../redux/store";

type ThemeToggleProps = {
  size: "small" | "large" | null
};

const ThemeToggle = ({ size }: ThemeToggleProps) => {
  const themeValue = useAppSelector((state) => state.theme.value);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!localStorage.theme) {
      localStorage.theme = "winter";
      dispatch(updateTheme("winter"));
    } else {
      dispatch(updateTheme(localStorage.theme));
    }
  }, []);

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", themeValue);
  }, [themeValue]);

  const toggleTheme = () => {
    if (themeValue === "winter") {
      localStorage.theme = "night";
      dispatch(updateTheme("night"));
    } else if (themeValue === "night") {
      localStorage.theme = "winter";
      dispatch(updateTheme("winter"));
    }
  };

  return (
    <div
      className="flex cursor-pointer items-center gap-1 space-x-1"
      onClick={toggleTheme}
    >
      <div
        className={`relative ${size === "large" && "text-4xl"} ${
          size === "small" && "text-xl"
        }`}
      >
        {themeValue === "winter" && <BsMoon />}
        {themeValue === "night" && <BsSun />}
      </div>
      <span className="font-semibold">
        {themeValue === "winter" ? "Dark" : "Light"} mode
      </span>
    </div>
  );
};

export default ThemeToggle;
