import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <h1 className="text-3xl font-black italic tracking-wide text-white sm:text-4xl">
          Mohamed
        </h1>

        <div className="hidden items-center gap-3 lg:flex">
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
            className="ml-3 rounded-xl border border-white/20 p-3 text-lg text-white transition hover:bg-white/10"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-xl border border-white/20 p-3 text-lg text-white"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-white/20 p-3 text-xl text-white"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <div className="grid gap-3 border-t border-white/10 px-4 py-4 lg:hidden">
          {links.map(([name, path]) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-center text-sm font-bold transition ${
                  isActive
                    ? "bg-cyan-400 text-slate-950"
                    : "bg-white/5 text-slate-200"
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}