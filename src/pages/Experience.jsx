import {
  FaBriefcase,
  FaGraduationCap,
  FaTools,
  FaCertificate,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTrophy,
  FaWrench,
  FaUniversity,
  FaCode,
  FaCar,
  FaHandshake,
  FaExternalLinkAlt,
  FaDownload,
} from "react-icons/fa";

const timeline = [
  {
    type: "Graduation Project",
    badgeColor: "bg-cyan-400",
    icon: <FaGraduationCap />,
    title: "Automated CNC Soldering Machine",
    company: "Graduation Project",
    location: "New Cairo Technological University",
    date: "2025 - 2026",
    desc: "Designed and developed a CNC soldering and dispensing machine combining mechanical design, embedded control, motion system, and automation concepts.",
    skills: ["CNC", "Arduino Nano", "SolidWorks", "Stepper Motors", "Automation"],
    achievements: [
      "Designed full mechanical structure",
      "Built X-Y-Z motion control concept",
      "Integrated soldering and dispensing logic",
      "Reduced manual PCB assembly effort",
    ],
  },
  {
    type: "Work Experience",
    badgeColor: "bg-emerald-400",
    icon: <FaBriefcase />,
    title: "Sales Account Manager / Team Leader",
    company: "SoftTrend",
    location: "Maadi, Egypt",
    date: "2025 - 2026",
    desc: "Managed B2B IT solution sales for Gulf clients, built long-term client relationships, and achieved communication and sales KPIs.",
    skills: ["B2B Sales", "Cybersecurity", "Client Management", "Negotiation", "CRM"],
    achievements: [
      "Handled Gulf clients professionally",
      "Built long-term client relationships",
      "Improved communication and follow-up process",
      "Combined technical knowledge with sales skills",
    ],
  },
  {
    type: "Sales Experience",
    badgeColor: "bg-pink-400",
    icon: <FaHandshake />,
    title: "Retail Sales Experience",
    company: "Town Team / Tie House / Zara / Pull&Bear",
    location: "Cairo, Egypt",
    date: "Previous Years",
    desc: "Worked in customer-facing sales roles, developing strong communication, negotiation, customer handling, and problem-solving skills.",
    skills: ["Sales", "Customer Service", "Communication", "Negotiation", "Teamwork"],
    achievements: [
      "Gained strong customer handling experience",
      "Improved persuasion and presentation skills",
      "Worked under pressure and sales targets",
      "Built confidence in professional communication",
    ],
  },
  {
    type: "Training",
    badgeColor: "bg-blue-400",
    icon: <FaCar />,
    title: "Automotive Mechanics Training",
    company: "Arab Contractors Company",
    location: "Egypt",
    date: "2024",
    desc: "Practical workshop training focused on engine assembly, disassembly, and automotive mechanical systems.",
    skills: ["Automotive", "Mechanical Systems", "Engine Assembly", "Workshop"],
    achievements: [
      "Practiced engine assembly and disassembly",
      "Understood automotive mechanical systems",
      "Improved hands-on workshop skills",
      "Connected theory with practical mechanics",
    ],
  },
  {
    type: "Course",
    badgeColor: "bg-purple-400",
    icon: <FaCode />,
    title: "Embedded Systems & Robotics Training",
    company: "Zagazig University / IEEE Cairo University",
    location: "Egypt",
    date: "2024 - 2025",
    desc: "Completed practical training in embedded systems, robotics, microcontrollers, sensors, motors, and real hardware debugging.",
    skills: ["Embedded C", "Arduino", "ESP32", "Sensors", "Robotics"],
    achievements: [
      "Worked with microcontrollers and sensors",
      "Built embedded and robotics tasks",
      "Practiced hardware debugging",
      "Improved C/C++ embedded programming",
    ],
  },
  {
    type: "Course",
    badgeColor: "bg-orange-400",
    icon: <FaTools />,
    title: "PLC & Classic Control",
    company: "Zagazig University",
    location: "Egypt",
    date: "2025",
    desc: "Studied PLC programming, ladder logic, classic control, timers, counters, and industrial control sequences.",
    skills: ["PLC", "Ladder Logic", "Classic Control", "Timers", "Counters"],
    achievements: [
      "Designed ladder logic tasks",
      "Practiced motor control circuits",
      "Worked with timers and counters",
      "Understood industrial automation basics",
    ],
  },
  {
    type: "Program",
    badgeColor: "bg-red-400",
    icon: <FaUniversity />,
    title: "Entrepreneurship & Innovation Program",
    company: "ITIDA / TIEC",
    location: "Egypt",
    date: "2025",
    desc: "Completed a 45-hour entrepreneurship and innovation program focused on developing a final project for a potential startup.",
    skills: ["Entrepreneurship", "Innovation", "Startup Thinking", "Presentation"],
    achievements: [
      "Completed 45-hour certified program",
      "Developed startup project thinking",
      "Improved presentation and planning",
      "Learned business model fundamentals",
    ],
  },
];

const certificates = [
  {
    title: "Skill Lync Automotive Electronics Workshop",
    issuer: "Skill Lync",
    date: "June 2025",
    image: "/certificates/skill-lync.jpg",
    tags: ["Automotive", "Electronics", "Workshop"],
  },
  {
    title: "Software Testing Diploma",
    issuer: "WE Telecom Egypt",
    date: "Sep 2025",
    image: "/certificates/we-testing.png",
    tags: ["Testing", "Software", "Quality"],
  },
  {
    title: "ITIDA Entrepreneurship Program",
    issuer: "ITIDA / TIEC",
    date: "2025",
    image: "/certificates/itida.jpg",
    tags: ["Entrepreneurship", "Innovation", "Startup"],
  },
 {
  title: "Kaspersky Small Office Security",
  issuer: "Kaspersky",
  date: "Oct 2025",
  image: "/certificates/kaspersky-ksos.pdf",
  preview: "/certificates/kaspersky-ksos.jpg",
  tags: ["Sales", "Cybersecurity", "Kaspersky"],
},
{
  title: "Kaspersky Partner Onboarding Program",
  issuer: "Kaspersky",
  date: "Oct 2025",
  image: "/certificates/kaspersky-onboarding.pdf",
  preview: "/certificates/kaspersky-onboarding.jpg",
  tags: ["Partner", "Sales", "Security"],
},
{
  title: "Kaspersky Endpoint Security for Business",
  issuer: "Kaspersky",
  date: "Oct 2025",
  image: "/certificates/kaspersky-s02.pdf",
  preview: "/certificates/kaspersky-s02.jpg",
  tags: ["Endpoint", "Business", "Security"],
},
  {
    title: "Kaspersky Next",
    issuer: "Kaspersky",
    date: "Oct 2025",
    image: "/certificates/kaspersky-s19.pdf",
    tags: ["Security", "Sales", "Next"],
  },
  {
    title: "Kaspersky Endpoint Security Cloud",
    issuer: "Kaspersky",
    date: "Oct 2025",
    image: "/certificates/kaspersky-s40.pdf",
    tags: ["Cloud", "Endpoint", "Security"],
  },
];

function ExperienceCard({ item }) {
  return (
    <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-cyan-500/20">
      <span
        className={`absolute -top-4 left-8 inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-black text-slate-950 shadow-lg ${item.badgeColor}`}
      >
        {item.icon}
        {item.type}
      </span>

      <h2 className="mt-4 text-2xl font-black text-white">{item.title}</h2>

      <div className="mt-4 space-y-2 text-sm font-bold text-slate-400">
        <p className="flex items-center gap-2">
          <FaBriefcase className="text-cyan-300" />
          {item.company}
        </p>

        <p className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-cyan-300" />
          {item.location}
        </p>

        <p className="flex items-center gap-2">
          <FaCalendarAlt className="text-cyan-300" />
          {item.date}
        </p>
      </div>

      <p className="mt-6 leading-8 text-slate-300">{item.desc}</p>

      <div className="mt-6">
        <h3 className="mb-3 flex items-center gap-2 font-black text-white">
          <FaWrench /> Skills & Technologies:
        </h3>

        <div className="flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-slate-800 px-3 py-2 text-xs font-bold text-cyan-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-3 flex items-center gap-2 font-black text-white">
          <FaTrophy /> Key Achievements:
        </h3>

        <ul className="space-y-2 text-sm font-bold text-slate-400">
          {item.achievements.map((ach) => (
            <li key={ach} className="flex gap-2">
              <span className="text-cyan-300">▸</span>
              {ach}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-20 text-center">
        <h1 className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-pink-400 bg-clip-text text-3xl font-black text-transparent md:text-5xl">
          Experience
        </h1>

        <div className="mx-auto mt-3 h-[4px] w-20 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"></div>

        <p className="mx-auto mt-5 max-w-3xl text-slate-400">
          Mechatronics Engineer with strong hands-on engineering experience and a powerful sales & client communication background.
        </p>
      </div>

      <section className="relative mx-auto max-w-6xl">
        <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 md:block"></div>

        <div className="space-y-20">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={item.title} className="relative grid items-start md:grid-cols-2">
                <div className="absolute left-1/2 top-10 z-20 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-slate-950 shadow-xl md:flex">
                  <div className={`h-7 w-7 rounded-full ${item.badgeColor}`}></div>
                </div>

                {isLeft ? (
                  <div className="md:pr-14">
                    <ExperienceCard item={item} />
                  </div>
                ) : (
                  <div></div>
                )}

                {!isLeft ? (
                  <div className="md:pl-14">
                    <ExperienceCard item={item} />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-28">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-black text-white md:text-4xl">
            Certifications & Credentials
          </h2>

          <div className="mx-auto mt-3 h-[4px] w-20 rounded-full bg-slate-500"></div>

          <p className="mx-auto mt-5 max-w-3xl text-slate-400">
            Professional certifications validating my technical, sales, cybersecurity, and engineering learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => {
            const isPdf = cert.image.toLowerCase().endsWith(".pdf");
            const fileName = cert.image.split("/").pop();

            return (
              <div
                key={cert.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-cyan-500/20"
              >
                <div className="relative h-64 bg-slate-900">
                  {isPdf ? (
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-t-3xl bg-slate-800 text-center">
                      <FaCertificate className="mb-4 text-5xl text-cyan-300 animate-pulse" />

                      <p className="px-4 text-sm font-bold text-slate-300">
                        {fileName}
                      </p>

                      <div className="mt-5 flex flex-wrap justify-center gap-3">
                        <a
                          href={cert.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-cyan-400 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-300 active:scale-95"
                        >
                          Open
                        </a>

                        <a
                          href={cert.image}
                          download={fileName}
                          className="rounded-full border border-cyan-300 px-6 py-3 font-black text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950 active:scale-95"
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  ) : (
  <img
    src={cert.preview || cert.image}
    alt={cert.title}
    className="h-full w-full object-cover"
  />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black text-white">
                    {cert.title}
                  </h3>

                  <div className="mt-4 space-y-2 text-sm font-bold text-slate-400">
                    <p>🏢 {cert.issuer}</p>
                    <p>📅 {cert.date}</p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-cyan-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

  <a
    href={cert.image}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300 active:scale-95"
  >
    View Certificate
    <FaExternalLinkAlt />
  </a>

                  {isPdf && (
  <a
    href={cert.image}
    download={cert.image.split("/").pop()}
    className="inline-flex items-center gap-2 rounded-xl border border-cyan-300 px-5 py-3 font-black text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950 active:scale-95"
  >
    Download
    <FaDownload />
  </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}