import {
  FaMicrochip,
  FaRobot,
  FaCogs,
  FaDraftingCompass,
  FaBolt,
  FaFileAlt,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaMicrochip />,
    title: "Embedded Systems Development",
    desc: "Designing and programming Arduino, ESP32, sensors, actuators, and control circuits for real engineering applications.",
    tech: ["Arduino", "ESP32", "Sensors", "C/C++"],
    features: [
      "Sensor integration",
      "Motor control",
      "Relay control",
      "Embedded C programming",
      "Hardware troubleshooting",
    ],
  },
  {
    icon: <FaCogs />,
    title: "Automation & PLC Projects",
    desc: "Building automation solutions using PLC logic, control sequences, alarms, and industrial simulation tools.",
    tech: ["PLC", "TIA Portal", "Ladder Logic", "Automation"],
    features: [
      "PLC ladder design",
      "Control sequences",
      "Timers and counters",
      "Industrial automation logic",
      "System testing",
    ],
  },
  {
    icon: <FaRobot />,
    title: "Robotics Projects",
    desc: "Developing robotics systems including robot cars, line followers, motor drivers, and sensor-based navigation.",
    tech: ["Robotics", "L298N", "Motors", "PID"],
    features: [
      "Robot car systems",
      "Line follower control",
      "Motor driver circuits",
      "Obstacle detection",
      "Motion control",
    ],
  },
  {
    icon: <FaDraftingCompass />,
    title: "Mechanical Design",
    desc: "Creating mechanical parts, assemblies, drawings, and machine concepts using SolidWorks.",
    tech: ["SolidWorks", "Assembly", "Drawing", "3D Design"],
    features: [
      "3D modeling",
      "Assembly design",
      "Engineering drawings",
      "Mechanical structure planning",
      "Design documentation",
    ],
  },
  {
    icon: <FaBolt />,
    title: "Proteus Circuit Simulation",
    desc: "Designing and simulating electronic circuits before hardware implementation to reduce errors and improve reliability.",
    tech: ["Proteus", "Electronics", "Simulation", "PCB"],
    features: [
      "Arduino simulation",
      "Motor driver circuits",
      "Relay circuits",
      "Power circuits",
      "Circuit debugging",
    ],
  },
  {
    icon: <FaFileAlt />,
    title: "Technical Documentation",
    desc: "Preparing clear reports, project documentation, wiring diagrams, calculations, and presentation-ready engineering files.",
    tech: ["Reports", "PDF", "Diagrams", "Documentation"],
    features: [
      "Project reports",
      "Wiring diagrams",
      "Calculation sheets",
      "Presentation content",
      "Portfolio documentation",
    ],
  },
];

export default function Services() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* HEADER */}
      <div className="mb-14 text-center">
        <h1 className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-pink-400 bg-clip-text text-5xl font-black text-transparent">
          My Services
        </h1>

        <div className="mx-auto mt-3 h-[4px] w-20 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"></div>

        <p className="mx-auto mt-5 max-w-3xl text-slate-400">
          Engineering services focused on embedded systems, automation,
          robotics, mechanical design, circuit simulation, and technical documentation.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-cyan-500/20"
          >
            {/* TOP */}
            <div className="border-b border-white/10 p-8 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-800 text-3xl text-cyan-300 shadow-lg transition duration-500 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950">
                {service.icon}
              </div>

              <h2 className="text-2xl font-black text-white">
                {service.title}
              </h2>
            </div>

            {/* BODY */}
            <div className="p-7">
              <p className="mb-6 leading-7 text-slate-300">
                {service.desc}
              </p>

              <h3 className="mb-3 font-black text-white">
                🛠 Technologies:
              </h3>

              <div className="mb-7 flex flex-wrap gap-2">
                {service.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-4 py-2 text-xs font-bold text-cyan-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <h3 className="mb-3 font-black text-white">
                ✅ Key Features:
              </h3>

              <ul className="space-y-3 text-sm text-slate-400">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-cyan-300">▸</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-md">
        <h2 className="mb-4 text-4xl font-black text-white">
          Ready to Start Your Project?
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-slate-400">
          Let’s collaborate to build a practical engineering solution from idea
          to design, simulation, prototype, and documentation.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-4 font-black text-slate-950 transition hover:bg-cyan-300"
          >
            Get Started
            <FaArrowRight />
          </a>

          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-4 font-black text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            View Projects
          </a>
        </div>
      </div>
    </main>
  );
}