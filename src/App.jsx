import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const glow = document.querySelector(".mouse-glow");

    let x = 0;
    let y = 0;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      if (glow) {
        glow.style.left = x + "px";
        glow.style.top = y + "px";
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="mouse-glow"></div>

      <div className={darkMode ? "dark-theme" : "light-theme"}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}