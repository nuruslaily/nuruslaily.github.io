import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  const isProjectDetail = location.pathname.startsWith("/project/");

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

  const navLink = (to: string, label: string) => (
    <Link
      to={to}
      smooth
      duration={500}
      offset={-80}
      className="cursor-pointer block px-2 py-1"
      onClick={() => {
        (document.activeElement as HTMLElement | null)?.blur();
      }}
    >
      {label}
    </Link>
  );

  return (
    // <div className="navbar bg-[#384C65] text-[#FAE5D8] shadow-lg fixed top-0 z-50 px-4">
    <div className="navbar bg-[#384C65] text-[#C0C9DB] shadow-lg fixed top-0 z-50 px-4">
      <div className="flex-1">
        <a
          href="/"
          className="btn btn-ghost hover:bg-[#C0C9DB] hover:text-[#384C65] hover:shadow text-sm lg:text-lg font-bold"
        >
          Nurus Laily Aprilia
        </a>
      </div>

      <div className="flex-none flex items-center gap-2">
        <label className="flex items-center cursor-pointer gap-2">
          <input
            type="checkbox"
            checked={isDark}
            onChange={toggleDarkMode}
            className="toggle"
          />
          <span className="text-xl">{isDark ? "🌙" : "☀️"}</span>
        </label>

        {!isProjectDetail && (
          <>
            <div className="dropdown dropdown-end lg:hidden">
              <label tabIndex={0} className="btn btn-ghost cursor-pointer">
                <Menu />
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-[#384C65] hover:bg-[#C0C9DB] hover:text-[#384C65] rounded-box w-40"
              >
                <li>{navLink("home", "Home")}</li>
                <li>{navLink("about", "About")}</li>
                <li>{navLink("projects", "Projects")}</li>
                <li>{navLink("contact", "Contact")}</li>
              </ul>
            </div>

            {/* Desktop */}
            <ul className="menu menu-horizontal hidden lg:flex gap-2">
              <li>
                <Link to="home" smooth>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth>
                  About
                </Link>
              </li>
              <li>
                <Link to="projects" smooth>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="contact" smooth>
                  Contact
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
