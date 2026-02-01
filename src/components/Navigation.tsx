import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setIsDark(saved);
    document.documentElement.setAttribute(
      "data-theme",
      saved ? "dark" : "light",
    );
  }, []);

  const toggleDarkMode = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
    document.documentElement.setAttribute(
      "data-theme",
      newDark ? "dark" : "light",
    );
  };

  return (
    <div className="navbar bg-[#522959] text-[#FAE5D8] shadow-lg">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-lg font-bold">
          Nurus Laily Aprilia
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <label className="flex items-center cursor-pointer gap-2 ml-2 bg-transparent">
              <input
                type="checkbox"
                checked={isDark}
                onChange={toggleDarkMode}
                className="toggle border-[#180018] bg-[#824D69] text-[#180018] checked:bg-[#2A114B] checked:text-[#DFB6B2]"
              />
              <span className="text-xl">{isDark ? "🌙" : "☀️"}</span>
            </label>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
