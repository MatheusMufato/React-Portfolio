import { useState, useEffect } from "react";
import { useTheme } from "../../../context/ThemeContext";

export default function ThemeSwitcher() {
  const { skin, setSkin, skinColors, dark, toggleDark } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (open) setOpen(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <div className={`style-switcher${open ? " open" : ""}`}>
      <div className="style-switcher-toggler s-icon" onClick={() => setOpen((o) => !o)}>
        <i className="fas fa-cog"></i>
      </div>
      <div className="day-night s-icon" onClick={toggleDark}>
        <i className={`fas ${dark ? "fa-sun" : "fa-moon"}`}></i>
      </div>
      <h4>Theme Colors</h4>
      <div className="colors">
        {Object.keys(skinColors).map((key) => (
          <span
            key={key}
            className={key}
            onClick={() => setSkin(key)}
            style={{
              outline: skin === key ? `2px solid ${skinColors[key]}` : "none",
              outlineOffset: "2px",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
