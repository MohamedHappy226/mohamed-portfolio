import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaPaperPlane,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .send(
      "service_y0q4u3a",
      "template_meelbcq",
      formData,
      "uDAamNZ5h-PQkADHM"
    )
    .then(() => {
      alert("Message sent ✅");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.log(error);
      alert("Error ❌");
    })
    .finally(() => {
      setLoading(false);
    });
};

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-28 text-center">
        <h1 className="text-3xl md:text-5xl font-black text-white">Get in Touch</h1>
        <div className="mx-auto mt-3 h-[4px] w-20 rounded-full bg-cyan-400"></div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 lg:grid-cols-2">
        {/* LEFT */}
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="rounded-2xl border border-white/20 bg-white/5 p-7 text-center transition duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20">
            <h3 className="font-black text-white">
              Call Me{" "}
              <FaPhoneAlt className="icon-float ml-1 inline text-sm text-cyan-300" />
            </h3>
            <p className="mt-2 font-bold text-white">01152371851</p>
            <a
              href="tel:+201152371851"
              className="mt-2 inline-flex items-center justify-center text-white hover:text-cyan-300"
            >
              Call Now <FaExternalLinkAlt className="ml-1 text-xs" />
            </a>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/20 p-7 text-center transition duration-500 hover:-translate-y-2 hover:border-pink-300 hover:shadow-2xl hover:shadow-pink-500/20">
            <h3 className="font-black text-white">
              Email{" "}
              <FaEnvelope className="icon-float ml-1 inline text-sm text-pink-300" />
            </h3>
            <p className="mt-2 font-bold text-white">
              mohamedsaiiid1421973@gmail.com
            </p>
            <a
              href="mailto:mohamedsaiiid1421973@gmail.com"
              className="mt-2 inline-flex items-center justify-center text-white hover:text-pink-300"
            >
              Message Me <FaExternalLinkAlt className="ml-1 text-xs" />
            </a>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/5 p-7 text-center transition duration-500 hover:-translate-y-2 hover:border-green-400 hover:shadow-2xl hover:shadow-green-500/20">
            <h3 className="font-black text-white">
              Whatsapp{" "}
              <FaWhatsapp className="icon-float ml-1 inline text-sm text-green-400" />
            </h3>
            <p className="mt-2 font-bold text-white">01152371851</p>
            <a
              href="https://wa.me/201152371851"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center text-white hover:text-green-400"
            >
              Message Me <FaExternalLinkAlt className="ml-1 text-xs" />
            </a>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/20 p-7 text-center transition duration-500 hover:-translate-y-2 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20">
            <h3 className="font-black text-white">
              LinkedIn{" "}
              <FaLinkedin className="icon-float ml-1 inline text-sm text-blue-400" />
            </h3>
            <p className="mt-2 font-bold text-white">Mohamed Saeed</p>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center text-white hover:text-blue-400"
            >
              View Profile <FaExternalLinkAlt className="ml-1 text-xs" />
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full pt-20">
          <p className="mb-5 text-center text-slate-400">
            Please fill out the form below{" "}
            <FaPaperPlane className="icon-float inline text-cyan-300" />
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-4 text-white outline-none transition focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20"
            />

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-4 text-white outline-none transition focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20"
            />

            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Message"
              className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-4 text-white outline-none transition focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20"
            />

            <button
              type="submit"
              disabled={loading}
              className="mx-auto block rounded-full bg-cyan-400 px-10 py-3 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}