import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 px-6 py-10 text-center">
      <p className="text-lg font-bold">© 2026 Mohamed Saied.</p>
      <p className="mt-1 text-slate-400">All rights reserved.</p>

      <div className="mt-5 flex justify-center gap-6 text-slate-400">
        <Link to="/contact" className="hover:text-cyan-400">
          Contact Us
        </Link>

        <a href="#" className="hover:text-cyan-400">
          Privacy Policy
        </a>

        <a href="#" className="hover:text-cyan-400">
          Terms of Service
        </a>
      </div>

      <div className="mt-6 flex justify-center gap-5 text-xl text-slate-400">
        <a href="https://www.facebook.com/share/1KSsKmCETp/" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
          <FaFacebookF />
        </a>

        <a href="https://www.instagram.com/mohamedhappy226?igsh=cnJ5cDRvbGNpNmxk" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
          <FaInstagram />
        </a>

        <a href="https://www.linkedin.com/in/mohamed-saied-538a64323/" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
          <FaLinkedinIn />
        </a>

        <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}