import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaPaperPlane,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://mohamed-backend-portfolio-production.up.railway.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      alert(data.message || "Message sent ✅");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (err) {
      console.log(err);
      alert("Error ❌");
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-28 text-center">
        <h1 className="text-5xl font-black text-white">
          Get in Touch
        </h1>
        <div className="mx-auto mt-3 h-[4px] w-20 rounded-full bg-slate-500"></div>
      </div>

      <div className="mx-auto grid max-w-6xl items-start gap-20 lg:grid-cols-2">
        
        {/* LEFT */}
        <div className="mx-auto w-full max-w-md space-y-6">

          <div className="rounded-2xl border border-white/20 bg-white/5 p-7 text-center">
            <h3 className="font-black text-white">
              Call Me <FaPhoneAlt className="ml-1 inline text-xs" />
            </h3>
            <p className="mt-2 font-bold text-white">01152371851</p>
            <a href="tel:+201152371851" className="mt-2 inline-flex text-white">
              Call Now <FaExternalLinkAlt className="text-xs ml-1" />
            </a>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/20 p-7 text-center">
            <h3 className="font-black text-white">
              Email <FaEnvelope className="ml-1 inline text-xs" />
            </h3>
            <p className="mt-2 font-bold text-white">
              mohammedgamall151@gmail.com
            </p>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/5 p-7 text-center">
            <h3 className="font-black text-white">
              Whatsapp <FaWhatsapp className="ml-1 inline text-xs" />
            </h3>
            <p className="mt-2 font-bold text-white">01152471947</p>
            <a
              href="https://wa.me/201152371851"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              Message Me <FaExternalLinkAlt className="text-xs ml-1" />
            </a>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/20 p-7 text-center">
            <h3 className="font-black text-white">
              LinkedIn <FaLinkedin className="ml-1 inline text-xs" />
            </h3>
            <p className="mt-2 font-bold text-white">
              Mohamed Saeed
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full pt-20">
          <p className="mb-5 text-center text-slate-400">
            Please fill out the form below <FaPaperPlane className="inline" />
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="w-full rounded-lg border px-4 py-4 bg-transparent text-white"
            />

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full rounded-lg border px-4 py-4 bg-transparent text-white"
            />

            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Message"
              className="w-full rounded-lg border px-4 py-4 bg-transparent text-white"
            />

            <button
              type="submit"
              className="mx-auto block text-white hover:text-cyan-300"
            >
              Submit  
            </button>

          </form>
        </div>
      </div>
    </main>
  );
}