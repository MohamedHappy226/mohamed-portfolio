import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGraduationCap,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaUser
} from "react-icons/fa";

export default function About() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">

      {/* TITLE */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-black tracking-wide bg-gradient-to-r from-cyan-300 via-emerald-300 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h1>

        <div className="mx-auto mt-3 h-[4px] w-20 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"></div>
      </div>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-3xl bg-white/10 p-8 shadow-2xl backdrop-blur-md"
      >

        {/* NAME + ROLE */}
        <div className="mb-6">

          <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-300 via-emerald-300 to-pink-400 bg-clip-text text-transparent">
            Mohamed Saeed Ibrahim Ibrahim Attia
          </h2>

          <div className="mt-2 flex items-center gap-2 text-lg text-slate-400">
            <span className="text-cyan-300">&lt;/&gt;</span>

            <span className="font-bold text-slate-200">
              Mechatronics Engineer
            </span>

            <span>|</span>

            <span className="text-slate-400">
              Embedded Systems & Automation
            </span>
          </div>

        </div>

        {/* ABOUT TITLE */}
        <div className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-300">
          <FaUser /> About Me
        </div>

        {/* ABOUT TEXT */}
<p className="text-slate-300 leading-8">
  I am a Mechatronics Engineering student with strong hands-on experience in
  <span className="mx-1 font-bold text-cyan-300">Embedded Systems</span>,
  <span className="mx-1 font-bold text-cyan-300">Automation</span>, and
  <span className="mx-1 font-bold text-cyan-300">Robotics</span>.

  <br /><br />

  I have worked with microcontrollers such as Arduino and ESP32,
  developed control systems using PLC, and designed mechanical systems
  using SolidWorks. I focus on building efficient and scalable solutions
  that integrate hardware and software into real-world applications.

  <br /><br />

  I am passionate about continuous learning and innovation, especially in
  combining engineering with AI to create smart and impactful systems.
  I enjoy working on challenging projects that push my technical and
  problem-solving skills to the next level.
</p>

        {/* INFO BOX */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">

          <div className="flex items-center gap-3 text-slate-300">
            <FaMapMarkerAlt /> Cairo, Egypt
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <FaPhone /> +20 115-2371-851
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <FaEnvelope /> mohamedsaiiid1424973@gmail.com
          </div>

          <div className="flex items-center gap-3 text-cyan-300 cursor-pointer hover:underline">
            📄 View Resume
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-8 border-t border-white/10"></div>

        {/* EDUCATION */}
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-200">
          <FaGraduationCap /> Education
        </h2>

        <div className="rounded-2xl bg-white/5 p-6 shadow-lg">
          <h3 className="text-xl font-bold text-slate-200">
            New Cairo Technological University
          </h3>

          <p className="text-slate-400">
            Faculty of Engineering – Mechatronics
          </p>

          <p className="mt-2 text-slate-400">
            GPA: 3.5 • Expected Graduation: 2026
          </p>
        </div>

        {/* DIVIDER */}
        <div className="my-8 border-t border-white/10"></div>

        {/* SOCIAL */}
        <h2 className="mb-4 text-xl font-bold text-slate-200">
          Connect With Me
        </h2>

        <div className="flex gap-4">

          <a className="rounded-full bg-white/10 p-4 hover:bg-cyan-400 hover:text-black transition">
            <FaFacebookF />
          </a>

          <a className="rounded-full bg-white/10 p-4 hover:bg-cyan-400 hover:text-black transition">
            <FaLinkedinIn />
          </a>

          <a className="rounded-full bg-white/10 p-4 hover:bg-cyan-400 hover:text-black transition">
            <FaInstagram />
          </a>

          <a className="rounded-full bg-white/10 p-4 hover:bg-cyan-400 hover:text-black transition">
            <FaGithub />
          </a>

        </div>

      </motion.div>
    </main>
  );
}