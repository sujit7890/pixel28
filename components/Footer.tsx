"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Gamepad2, Mail } from "lucide-react"; // ✅ added

const links = {
  Games: ["Neon Void", "Stellar Rift", "Phantom Protocol", "Arcane Siege", "Vortex Run", "Deep Signal"],
  Studio: ["About", "Team", "Press Kit", "Awards", "Blog"],
  Support: ["FAQ", "Contact Us", "Community", "Bug Reports"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "EULA"],
};

// ✅ added socials back (safe)
const socials = [
  { icon: Mail, label: "Email", href: "mailto:hello@pixel28.studio" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 border-t border-white/10 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA */}
        <div className="py-16 border-b border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
                STAY IN THE
                <span className="text-cyan-400"> LOOP.</span>
              </h2>
              <p className="text-slate-400">
                Early access, dev diaries, and exclusive drops.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2 w-full lg:w-auto"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 lg:w-72 px-4 py-3 rounded-xl bg-gray-800 border border-white/10 text-white text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-3 font-semibold text-black bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links */}
        <div className="py-16 grid grid-cols-2 sm:grid-cols-4 gap-10 border-b border-white/10">
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs font-bold text-slate-500 uppercase mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="text-sm text-slate-400 hover:text-white transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Gamepad2 className="w-4 h-4 text-white" />
            </div>

            <span className="text-lg font-black text-white">
              PIXEL<span className="text-cyan-400">28</span>
            </span>
          </Link>

          {/* Copyright */}
          <p className="text-xs text-slate-600 text-center">
            © {new Date().getFullYear()} Pixel28 Studio Ltd.
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ y: -2, scale: 1.1 }}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-slate-500 hover:text-white"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}