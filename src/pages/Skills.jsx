import { useEffect, useState } from "react";
import {
  FaMicrochip,
  FaRobot,
  FaCogs,
  FaDraftingCompass,
  FaCode,
  FaTools,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import {
  SiArduino,
  SiEspressif,
  SiCplusplus,
  SiPython,
  SiProteus,
  SiAutodesk,
} from "react-icons/si";

const skills = [
  {
    name: "Arduino",
    icon: <SiArduino />,
    level: "Expert",
    category: "Embedded",
    desc: "Sensors, motors, relays, control logic, and practical embedded projects.",
  },
  {
    name: "ESP32",
    icon: <SiEspressif />,
    level: "Advanced",
    category: "Embedded",
    desc: "Wi-Fi, camera modules, IoT tests, and embedded connectivity.",
  },
  {
    name: "C / C++",
    icon: <SiCplusplus />,
    level: "Expert",
    category: "Programming",
    desc: "Embedded logic, microcontroller programming, and project control code.",
  },
  {
    name: "Python",
    icon: <SiPython />,
    level: "Advanced",
    category: "Programming",
    desc: "Automation scripts, AI basics, image processing, and data handling.",
  },
  {
    name: "PLC",
    icon: <FaCogs />,
    level: "Advanced",
    category: "Automation",
    desc: "Ladder logic, timers, counters, alarms, and industrial control sequences.",
  },
  {
    name: "SCADA / WinCC",
    icon: <FaDatabase />,
    level: "Intermediate",
    category: "Automation",
    desc: "HMI screens, tags, alarms, monitoring, and operator interface design.",
  },
  {
    name: "Proteus",
    icon: <SiProteus />,
    level: "Expert",
    category: "Simulation",
    desc: "Circuit simulation, Arduino testing, motor drivers, and relay circuits.",
  },
{
  name: "SolidWorks",
  icon: <FaDraftingCompass />,
  level: "Advanced",
  category: "Mechanical",
  desc: "3D modeling, assemblies, mechanical parts, drawings, and CNC concepts.",
},
  {
    name: "MATLAB / Simulink",
    icon: <FaCode />,
    level: "Advanced",
    category: "Control",
    desc: "Control systems, response analysis, root locus, PID, and simulations.",
  },
  {
    name: "Robotics",
    icon: <FaRobot />,
    level: "Advanced",
    category: "Robotics",
    desc: "Robot cars, line followers, motor drivers, sensors, and motion control.",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    level: "Intermediate",
    category: "Tools",
    desc: "Uploading projects, version control, repositories, and portfolio code.",
  },
  {
  name: "Sensors Integration",
  icon: <FaMicrochip />,
  level: "Expert",
  category: "Embedded",
  desc: "Working with temperature, ultrasonic, IR, and analog sensors in real systems.",
},
{
  name: "Motor Drivers",
  icon: <FaCogs />,
  level: "Advanced",
  category: "Embedded",
  desc: "Controlling DC motors, relays, and actuators using drivers and PWM.",
},
{
  name: "Control Systems",
  icon: <FaCogs />,
  level: "Advanced",
  category: "Control",
  desc: "PID control, system response, transfer functions, and stability analysis.",
},
{
  name: "System Integration",
  icon: <FaTools />,
  level: "Expert",
  category: "Engineering",
  desc: "Integrating hardware, software, sensors, and control into complete systems.",
},
{
  name: "Industrial Automation",
  icon: <FaCogs />,
  level: "Advanced",
  category: "Automation",
  desc: "PLC + SCADA integration, industrial processes, and real control systems.",
},
{
  name: "HMI Design",
  icon: <FaDatabase />,
  level: "Advanced",
  category: "Automation",
  desc: "Designing operator interfaces, alarms, dashboards, and monitoring systems.",
},
{
  name: "Problem Solving",
  icon: <FaTools />,
  level: "Expert",
  category: "Engineering",
  desc: "Debugging hardware/software issues and finding practical engineering solutions.",
},
{
  name: "Project Design",
  icon: <FaDraftingCompass />,
  level: "Expert",
  category: "Mechanical",
  desc: "Designing complete systems from idea to implementation.",
},

];

const stats = [
  ["Embedded Systems", "6+"],
  ["Automation & Control", "5+"],
  ["Mechanical Design", "4+"],
  ["Programming & Tools", "5+"],
  ["Real Projects", "15+"],
];

const levelColors = {
  Expert: "bg-emerald-500/20 text-emerald-300",
  Advanced: "bg-blue-500/20 text-blue-300",
  Intermediate: "bg-yellow-500/20 text-yellow-300",
  Beginner: "bg-slate-500/20 text-slate-300",
};
function CountUp({ value }) {
  const target = parseInt(value);
  const suffix = value.includes("+") ? "+" : "";
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const speed = 40;

    const timer = setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= target) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredSkills =
  activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* HEADER */}
      <div className="mb-14 text-center">
        <h1 className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-pink-400 bg-clip-text text-5xl font-black text-transparent">
          Technical Skills
        </h1>

        <div className="mx-auto mt-3 h-[4px] w-20 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"></div>

        <p className="mx-auto mt-5 max-w-3xl text-slate-400">
          A practical overview of my engineering skills across embedded systems,
          automation, robotics, mechanical design, simulations, and programming tools.
        </p>
      </div>

      {/* CATEGORY PILLS */}
<div className="mb-12 flex flex-wrap justify-center gap-3">
  {[
    "All",
    "Embedded",
    "Automation",
    "Robotics",
    "Mechanical",
    "Simulation",
    "Programming",
    "Tools",
    "Engineering",
    "Control",
  ].map((cat) => (
    <button
      key={cat}
      onClick={() => setActiveCategory(cat)}
      className={`rounded-full px-6 py-3 text-sm font-black shadow-lg transition-all duration-300 ${
        activeCategory === cat
          ? "bg-cyan-400 text-slate-950 shadow-cyan-400/30"
          : "bg-slate-800 text-slate-200 hover:bg-cyan-400 hover:text-slate-950"
      }`}
    >
      {cat}
    </button>
  ))}
</div>

      {/* SKILLS GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="group min-h-[300px] rounded-3xl border border-white/10 bg-white/5 p-7 text-center shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-cyan-500/20"
          >
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-900 text-5xl text-cyan-300 shadow-xl transition duration-500 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950">
              {skill.icon}
            </div>

            <h2 className="text-2xl font-black text-white">
              {skill.name}
            </h2>

            <span
              className={`mt-3 inline-block rounded-full px-4 py-1 text-xs font-black ${
                levelColors[skill.level]
              }`}
            >
              {skill.level}
            </span>

            <p className="mt-4 text-sm font-bold text-slate-400">
              🏷 {skill.category}
            </p>

            <p className="mt-5 leading-7 text-slate-400">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
      {filteredSkills.length === 0 && (
  <p className="mt-10 text-center text-slate-400">
    No skills found in this category.
  </p>
)}
      {/* STATS */}
      <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([label, value]) => (
          <div
            key={label}
            className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center shadow-xl backdrop-blur-md"
          >
            <h3 className="text-4xl font-black text-cyan-300">
  <CountUp value={value} />
</h3>
            <p className="mt-2 font-bold text-slate-400">{label}</p>
          </div>
        ))}
      </div>

      {/* LEVELS */}
      <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-md">
        <h2 className="mb-7 text-2xl font-black text-white">
          Proficiency Levels
        </h2>

        <div className="flex flex-wrap justify-center gap-8 text-sm font-black">
          <span className="flex items-center gap-2 text-emerald-300">
            <span className="h-4 w-4 rounded-full bg-emerald-400"></span>
            Expert
          </span>

          <span className="flex items-center gap-2 text-blue-300">
            <span className="h-4 w-4 rounded-full bg-blue-400"></span>
            Advanced
          </span>

          <span className="flex items-center gap-2 text-yellow-300">
            <span className="h-4 w-4 rounded-full bg-yellow-400"></span>
            Intermediate
          </span>

          <span className="flex items-center gap-2 text-slate-300">
            <span className="h-4 w-4 rounded-full bg-slate-400"></span>
            Beginner
          </span>
        </div>
      </div>
    </main>
  );
}