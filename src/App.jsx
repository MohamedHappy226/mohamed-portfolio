import profile from './images/profile.jpg'
import cnc from './images/cnc.jpg'
import blindHardware from './images/blind-hardware.jpg'
import blindProteus from './images/blind-proteus.jpg'
import solid from './images/solid.jpg'
import soldering from './images/soldering.jpg'
export default function MohamedPortfolio() {
  const skills = {
    technical: [
      "Embedded Systems",
      "PLC Programming",
      "Arduino & ESP32",
      "SolidWorks",
      "MATLAB / Simulink",
      "C / C++",
      "Python",
      "IoT Systems",
      "Robotics & Motion Control",
      "PCB Design",
    ],
    tools: [
      "Arduino IDE",
      "SolidWorks",
      "MATLAB",
      "Proteus",
      "VS Code",
      "GitHub",
    ],
    soft: [
      "Problem Solving",
      "Teamwork",
      "Technical Communication",
      "Fast Learning",
      "Presentation Skills",
      "Sales & Negotiation",
    ],
  };

  const services = [
    {
      title: "Embedded Systems Development",
      desc: "Building smart systems using microcontrollers, sensors, actuators, and control logic.",
    },
    {
      title: "PLC & Automation",
      desc: "Basic industrial automation, ladder logic, and control-focused system thinking.",
    },
    {
      title: "Mechanical Design",
      desc: "Designing machine structures, assemblies, and prototypes using SolidWorks.",
    },
    {
      title: "IoT Prototyping",
      desc: "Connecting devices, sensors, and monitoring systems for smart applications.",
    },
    {
      title: "Robotics Prototyping",
      desc: "Developing control ideas and prototypes for motion-based and robotic systems.",
    },
    {
      title: "Technical Sales Support",
      desc: "Explaining technical solutions clearly and communicating effectively with clients.",
    },
  ];

const projects = [
{
  title: "CNC Soldering Machine",
  subtitle: "Graduation Project",
  desc: "3-axis CNC soldering system combining mechanical design and embedded control.",
  image: soldering,
  tags: ["CNC", "Automation", "ArdAuino"],
  drive: "https://drive.google.com/drive/folders/1wSqETtDsSbqoUAJmEAveZAYMf3ReO6pH?usp=drive_link"
},
  { 
    title: "Smart Blind Stick Hardware",
    subtitle: "IoT Project",
    desc: "Hardware implementation for a smart blind stick with sensing and assistive features.",
    image: blindHardware,
    tags: ["IoT", "Sensors", "Hardware"],
  },
  {
    title: "Smart Blind Stick Proteus Design",
    subtitle: "Circuit Design",
    desc: "Proteus-based circuit design and simulation for the smart blind stick project.",
    image: blindProteus,
    tags: ["Proteus", "Circuit", "Simulation"],
  },
  {
    title: "Mechanical Design in SolidWorks",
    subtitle: "Mechanical Project",
    desc: "Mechanical design work and modeling using SolidWorks.",
    image: solid,
    tags: ["SolidWorks", "Design", "Mechanical"],
  },  
]

  const experiences = [
    {
      title: "Freelance Mechanical Engineer",
      period: "Recent Experience",
      desc: "Designed and optimized mechanical systems using CAD tools and delivered engineering solutions for different requirements.",
    },
    {
      title: "Telemarketing Specialist / Sales Account Manager - SoftTrend",
      period: "2025",
      desc: "Handled B2B sales, client communication, and account follow-up for Gulf markets in IT solutions and software licensing.",
    },
    {
      title: "Training at Arab Contractors",
      period: "Training",
      desc: "Received practical workshop training in engine assembly, disassembly, and automotive mechanics.",
    },
    {
      title: "ITIDA Entrepreneurship Program",
      period: "Certified Program",
      desc: "Completed entrepreneurship and innovation training focused on turning ideas into practical projects.",
    },
  ];

  const courses = [
    "PLC and Classic Control",
    "Full Embedded Systems",
    "Embedded Workshop & Robotics",
    "AI & Data Science Diploma",
    "Entrepreneurship",
    "English B2 → C1",
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <span className="text-lg font-bold tracking-wide">Mohamed Saied</span>
          </div>
          <div className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#services" className="hover:text-cyan-400">What I Can Do</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#experience" className="hover:text-cyan-400">Experience</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-10 top-16 h-72 w-72 rounded-full bg-cyan-500 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-emerald-500 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
              Mechatronics Engineer Portfolio
            </p>
            <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
              Mohamed Saied
            </h1>
            <p className="mb-3 text-xl font-semibold text-slate-200 md:text-2xl">
              Mechatronics Engineering Student | Embedded Systems | PLC | Robotics | IoT
            </p>
            <p className="mb-8 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              I build smart engineering systems that combine electronics, programming,
              automation, and mechanical design. I enjoy turning ideas into practical
              prototypes and real project outcomes.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-300 transition hover:scale-[1.02]"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-[2rem] border border-cyan-400/20 bg-slate-900/70 p-6 shadow-2xl">
              <div className="mb-6 flex items-center gap-4">
                <img
                  src={profile}
                  alt="Mohamed Saied"
                  className="h-16 w-16 rounded-full object-cover border-2 border-cyan-400"
                />
                 <div>
                  <h3 className="text-xl font-bold">Mohamed Saied</h3>
                  <p className="text-slate-300">Cairo, Egypt</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <StatCard label="Projects" value="6+" />
                <StatCard label="Focus Areas" value="4" />
                <StatCard label="GPA" value="3.5" />
                <StatCard label="English" value="B2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="About Me" sub="A short introduction" />
        <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/70 p-8 leading-8 text-slate-300 shadow-xl">
          I am a Mechatronics Engineering student at New Cairo Technological University with
          hands-on experience in embedded systems, PLC, robotics, CNC automation, MATLAB,
          IoT, and mechanical design. My work focuses on building smart multidisciplinary
          systems that combine electronics, programming, and mechanics to solve real-world
          engineering problems.
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="What I Can Do" sub="My engineering strengths" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} title={service.title} desc={service.desc} />
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Skills" sub="Technical and professional capabilities" />
        <div className="grid gap-6 lg:grid-cols-3">
          <SkillPanel title="Technical Skills" items={skills.technical} />
          <SkillPanel title="Tools" items={skills.tools} />
          <SkillPanel title="Soft Skills" items={skills.soft} />
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Projects" sub="Selected engineering work" />
        <div className="grid gap-6 lg:grid-cols-2">
{projects.map((project) => (
  <div
    key={project.title}
    className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/70 p-7 shadow-xl transition hover:-translate-y-1"
  >
    <img
      src={project.image}
      alt={project.title}
      className="mb-4 h-48 w-full rounded-xl object-cover"
    />

    <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
      {project.subtitle}
    </p>

    <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>

    <p className="mb-5 leading-8 text-slate-300">{project.desc}</p>

    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200"
        >
          {tag}
        </span>
      ))}
    </div>
    <a 
  href="https://drive.google.com/drive/folders/1IvTskhR8zAkkadEv0DZ3EcS4bTmR4Yrv?usp=sharing"
  target="_blank"
  className="mt-4 inline-block text-cyan-400 hover:underline"
>
  View Details
</a>
  </div>
))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Experience & Training" sub="My practical journey" />
        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/70 p-7 shadow-xl"
            >
              <p className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-400">{item.period}</p>
              <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
              <p className="leading-8 text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Courses & Certifications" sub="Continuous learning" />
        <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/70 p-8 shadow-xl">
          <div className="flex flex-wrap gap-3">
            {courses.map((course) => (
              <span
                key={course}
                className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Contact" sub="Let’s work together" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/70 p-8 shadow-xl">
            <h3 className="mb-6 text-2xl font-bold">Get in touch</h3>
            <div className="space-y-4 text-slate-300">
              <p><span className="font-semibold text-slate-100">Phone:</span> 01152371851</p>
              <p><span className="font-semibold text-slate-100">Email:</span> mohamedsaiiid1421973@gmail.com</p>
              <p><span className="font-semibold text-slate-100">Location:</span> Cairo, Egypt</p>
              <p><span className="font-semibold text-slate-100">LinkedIn:</span> linkedin.com/in/mohamed-saied-538a64323</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 p-8 shadow-xl">
            <h3 className="mb-4 text-2xl font-bold">Build your future with engineering</h3>
            <p className="leading-8 text-slate-300">
              I am open to internships, engineering opportunities, robotics projects,
              automation roles, embedded systems work, and collaborative technical ideas.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Mohamed Saied. Built with React & Tailwind.
      </footer>
    </div>
  );
}

function SectionTitle({ title, sub }) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-sm uppercase tracking-[0.25em] text-cyan-400">{sub}</p>
      <h2 className="text-3xl font-black md:text-4xl">{title}</h2>
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/70 p-7 shadow-xl transition hover:-translate-y-1">
      <h3 className="mb-4 text-xl font-bold">{title}</h3>
      <p className="leading-8 text-slate-300">{desc}</p>
    </div>
  );
}

function SkillPanel({ title, items }) {
  return (
    <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/70 p-7 shadow-xl">
      <h3 className="mb-5 text-xl font-bold">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/50 p-4 text-center">
      <p className="text-2xl font-black text-cyan-300">{value}</p>
      <p className="mt-1 text-sm text-slate-400">{label}</p>
    </div>
  );
}