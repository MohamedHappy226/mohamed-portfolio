import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Experience", "/experience"],
    ["Projects", "/projects"],
    ["Services", "/services"],
    ["Skills", "/skills"],
    ["Contact", "/contact"],
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <h1 className="text-3xl font-black italic tracking-wide">
          Mohamed
        </h1>

        <div className="flex items-center gap-3">
          {links.map(([name, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2 text-sm font-bold transition ${
                  isActive
                    ? "bg-cyan-400 text-slate-950"
                    : "text-slate-200 hover:bg-white/10"
                }`
              }
            >
              {name}
            </NavLink>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-3 rounded-xl border border-white/20 p-3 text-lg transition hover:bg-white/10"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}