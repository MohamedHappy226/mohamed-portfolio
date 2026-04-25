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
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-black italic tracking-wide text-white sm:text-4xl lg:text-3xl">
            Mohamed
          </h1>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-xl border border-white/20 p-3 text-lg text-white transition hover:bg-white/10 lg:hidden"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <div className="flex w-full items-center gap-3 overflow-x-auto whitespace-nowrap pb-1 lg:w-auto lg:overflow-visible lg:pb-0">
          {links.map(([name, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `shrink-0 rounded-xl px-4 py-2 text-sm font-bold transition sm:px-5 ${
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
            className="ml-3 hidden shrink-0 rounded-xl border border-white/20 p-3 text-lg text-white transition hover:bg-white/10 lg:block"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}