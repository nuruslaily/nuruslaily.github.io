import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Navigation() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark",
  );
  const location = useLocation();

  const isProjectDetail = location.pathname.startsWith("/project/");

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // DaisyUI
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );

    // Tailwind
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
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
    // <div className="navbar bg-[#445c3f] text-[#FAE5D8] shadow-lg fixed top-0 z-50 px-4">
    <div className="navbar bg-[#7d936c] text-[#eceee3] shadow-lg fixed top-0 z-50 px-4">
      <div className="flex-1 mx-auto">
        <a
          href="/"
          className="text-[#2f4029] hover:text-[#eceee3] text-sm lg:text-lg font-bold mx-auto lg:mx-0 transition-all duration-300"
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
            className="toggle dark:bg-[#7d936c] dark:checked:bg-[#445c3f]"
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
                className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-[#2f4029] text-[#eceee3] rounded-box w-40"
              >
                <li>{navLink("home", "Home")}</li>
                <li>{navLink("about", "About")}</li>
                <li>{navLink("projects", "Projects")}</li>
                <li>{navLink("contact", "Contact")}</li>
              </ul>
            </div>

            {/* Desktop */}
            <ul className="menu menu-horizontal hidden lg:flex gap-2">
              <li className="hover:bg-[#2f4029] rounded-box">
                <Link to="home" smooth>
                  Home
                </Link>
              </li>
              <li className="hover:bg-[#2f4029] rounded-box">
                <Link to="about" smooth>
                  About
                </Link>
              </li>
              <li className="hover:bg-[#2f4029] rounded-box">
                <Link to="projects" smooth>
                  Projects
                </Link>
              </li>
              <li className="hover:bg-[#2f4029] rounded-box">
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
