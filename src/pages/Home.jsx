import { motion } from "framer-motion";
import { FaDownload, FaFolderOpen, FaPaperPlane } from "react-icons/fa";
import resume from "../assets/resume.pdf";
import profile from "../images/profile.jpg";
import { useEffect, useState } from "react";
import TypingTitle from "../components/TypingTitle";

export default function Home() {
  return (
    <main className="mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-10 sm:px-6 md:gap-10 lg:grid-cols-2 lg:px-8 lg:py-16">

      {/* LEFT */}
      <motion.section
initial={{ opacity: 0, x: -120 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="mb-6 inline-flex rounded-full bg-white/10 px-5 py-3 text-sm font-bold shadow-xl backdrop-blur">
          👋 Welcome to my portfolio
        </div>

        <h1 className="mb-4 text-4xl font-black italic leading-tight tracking-wide sm:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-pink-400 bg-clip-text text-transparent">
            Mohamed Saied
          </span>
        </h1>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
>
  <TypingTitle />
</motion.div>
        {/* TEXT BOX */}
        <div className="mb-8 w-full max-w-full overflow-hidden rounded-3xl border-l-4 border-cyan-400 bg-slate-900/80 p-4 shadow-2xl backdrop-blur-md sm:p-7">
<p className="mt-4 text-slate-300 leading-8">
  I am a Mechatronics Engineering student with hands-on experience in{" "}
  <span className="my-1 inline-block max-w-full break-words rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-2 py-1 text-sm font-bold text-cyan-200 sm:text-base">
    Embedded Systems
  </span>
  ,{" "}
  <span className="mx-1 inline-block rounded-lg bg-cyan-400/10 border border-cyan-400/20 px-2 py-1 font-bold text-cyan-200">
    Robotics
  </span>
  ,{" "}
  <span className="mx-1 inline-block rounded-lg bg-cyan-400/10 border border-cyan-400/20 px-2 py-1 font-bold text-cyan-200">
    Automation
  </span>
  ,{" "}
  <span className="mx-1 inline-block rounded-lg bg-cyan-400/10 border border-cyan-400/20 px-2 py-1 font-bold text-cyan-200">
    PLC Programming
  </span>
  ,{" "}
  <span className="mx-1 inline-block rounded-lg bg-cyan-400/10 border border-cyan-400/20 px-2 py-1 font-bold text-cyan-200">
    IoT
  </span>
  , and{" "}
  <span className="mx-1 inline-block rounded-lg bg-cyan-400/10 border border-cyan-400/20 px-2 py-1 font-bold text-cyan-200">
    Mechanical Design
  </span>
  . I enjoy building practical projects that connect hardware, software,
  sensors, actuators, and control systems to create real engineering solutions.
</p>

          <p className="mt-4 text-slate-300 leading-7">
            I focus on creating efficient, reliable, and scalable solutions in
            embedded systems, automation, and control engineering.
          </p>

          <div className="mt-6 space-y-3 text-slate-300">
            <p>🚀 Turning ideas into real projects</p>
            <p>💡 Passionate about robotics & embedded systems</p>
            <p>⚙️ PLC & Automation Experience</p>
            <p>📍 Based in Cairo, Egypt</p>
          </div>
        </div>

        {/* SKILLS */}
        <div className="mb-8 flex flex-wrap gap-3">
          {["Arduino", "PLC", "Robotics", "IoT", "SolidWorks", "C++"].map((s) => (
            <span
              key={s}
              className="rounded-full bg-white/10 px-5 py-2 text-sm font-bold shadow-lg backdrop-blur hover:bg-white/20 transition"
            >
              {s}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-wrap items-center gap-4">

          {/* Download */}
<motion.a
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  href={resume}
  download
  className="flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold text-white shadow-lg backdrop-blur-md"
>
  <FaDownload />
  Download Resume
</motion.a>

          {/* Projects */}
          <a
            href="/projects"
            className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 shadow-lg transition hover:bg-cyan-300 hover:scale-105"
          >
            <FaFolderOpen />
            View Projects
          </a>

          {/* Contact */}
          <a
            href="/contact"
            className="flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-white/20 hover:scale-105"
          >
            <FaPaperPlane />
            Let’s Talk
          </a>
        </div>
      </motion.section>

      {/* RIGHT IMAGE */}
      <motion.section
initial={{ opacity: 0, scale: 0.7, x: 120 }}
animate={{ opacity: 1, scale: 1, x: 0 }}
transition={{ duration: 1 }}
        className="flex justify-center"
      >
        <div className="relative group">

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-3xl group-hover:bg-cyan-500/40 transition"></div>

<motion.img
  src={profile}
  alt="profile"
  whileHover={{ scale: 1.1, rotate: 2 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] rounded-full border-[8px] sm:border-[10px] border-white/10 object-cover shadow-2xl"
/>

          {/* Floating icons */}
          <span className="absolute -left-6 top-1/2 rounded-full bg-white/10 p-4 text-xl shadow-xl backdrop-blur">
            💻
          </span>

          <span className="absolute -right-6 top-16 rounded-full bg-white/10 p-4 text-xl shadow-xl backdrop-blur">
            ⚙️
          </span>

          <span className="absolute -right-4 bottom-16 rounded-full bg-white/10 p-4 text-xl shadow-xl backdrop-blur">
            🤖
          </span>

        </div>
      </motion.section>

    </main>
  );
}