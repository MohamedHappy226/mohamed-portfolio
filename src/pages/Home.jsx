import { motion } from "framer-motion";
import { FaDownload, FaFolderOpen, FaPaperPlane } from "react-icons/fa";
import resume from "../assets/resume.pdf";
import profile from "../images/profile.jpg";
import TypingTitle from "../components/TypingTitle";

export default function Home() {
  const highlights = [
    "Embedded Systems",
    "Robotics",
    "Automation",
    "PLC Programming",
    "IoT",
    "Mechanical Design",
  ];

  const skills = ["Arduino", "PLC", "Robotics", "IoT", "SolidWorks", "C++"];

  return (
    <main className="mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
      <motion.section
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full min-w-0"
      >
        <div className="mb-6 inline-flex max-w-full rounded-full bg-white/10 px-4 py-3 text-sm font-bold shadow-xl backdrop-blur sm:px-5">
          👋 Welcome to my portfolio
        </div>

        <h1 className="mb-4 break-words text-4xl font-black italic leading-tight tracking-wide sm:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-pink-400 bg-clip-text text-transparent">
            Mohamed Saied
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 min-w-0"
        >
          <TypingTitle />
        </motion.div>

        <div className="mb-8 w-full max-w-full overflow-hidden rounded-3xl border-l-4 border-cyan-400 bg-slate-900/80 p-4 shadow-2xl backdrop-blur-md sm:p-7">
          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            I am a Mechatronics Engineering student with hands-on experience in:
          </p>

          <div className="mt-4 flex w-full flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm font-bold text-cyan-200 sm:text-base"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-5 break-words text-base leading-8 text-slate-300 sm:text-lg">
            I enjoy building practical projects that connect hardware, software,
            sensors, actuators, and control systems to create real engineering
            solutions.
          </p>

          <p className="mt-4 break-words text-base leading-8 text-slate-300 sm:text-lg">
            I focus on creating efficient, reliable, and scalable solutions in
            embedded systems, automation, and control engineering.
          </p>

          <div className="mt-6 space-y-3 text-base leading-7 text-slate-300 sm:text-lg">
            <p>🚀 Turning ideas into real projects</p>
            <p>💡 Passionate about robotics & embedded systems</p>
            <p>⚙️ PLC & Automation Experience</p>
            <p>📍 Based in Cairo, Egypt</p>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full bg-white/10 px-5 py-2 text-sm font-bold shadow-lg backdrop-blur transition hover:bg-white/20"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:flex sm:flex-wrap sm:items-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={resume}
            download
            className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold text-white shadow-lg backdrop-blur-md"
          >
            <FaDownload />
            Download Resume
          </motion.a>

          <a
            href="/projects"
            className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 shadow-lg transition hover:bg-cyan-300 hover:scale-105"
          >
            <FaFolderOpen />
            View Projects
          </a>

          <a
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-white/20 hover:scale-105"
          >
            <FaPaperPlane />
            Let’s Talk
          </a>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, scale: 0.85, x: 60 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex w-full justify-center overflow-hidden"
      >
        <div className="relative mt-4 max-w-full">
          <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-3xl transition"></div>

          <motion.img
            src={profile}
            alt="profile"
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative h-[260px] w-[260px] rounded-full border-[8px] border-white/10 object-cover shadow-2xl sm:h-[320px] sm:w-[320px] lg:h-[420px] lg:w-[420px] lg:border-[10px]"
          />

          <span className="absolute left-0 top-1/2 rounded-full bg-white/10 p-3 text-lg shadow-xl backdrop-blur sm:-left-6 sm:p-4 sm:text-xl">
            💻
          </span>

          <span className="absolute right-0 top-12 rounded-full bg-white/10 p-3 text-lg shadow-xl backdrop-blur sm:-right-6 sm:top-16 sm:p-4 sm:text-xl">
            ⚙️
          </span>

          <span className="absolute bottom-12 right-0 rounded-full bg-white/10 p-3 text-lg shadow-xl backdrop-blur sm:-right-4 sm:bottom-16 sm:p-4 sm:text-xl">
            🤖
          </span>
        </div>
      </motion.section>
    </main>
  );
}