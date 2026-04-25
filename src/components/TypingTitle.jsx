import { useEffect, useState } from "react";

const roles = [
  "Mechatronics Engineer",
  "Embedded Systems Engineer",
  "Automation Engineer",
  "Robotics Developer"
];

export default function TypingTitle() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    let speed = isDeleting ? 50 : 100;

    const typing = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(typing);
  }, [text, isDeleting, roleIndex]);

  return (
    <div className="mb-8 h-10 w-[550px] max-w-full overflow-hidden">
<h2 className="inline-block whitespace-nowrap border-r-4 border-cyan-400 pr-2 text-3xl font-black tracking-wide text-slate-200 drop-shadow-lg">
  {text}
</h2>
    </div>
  );
}