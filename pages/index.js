import { useEffect } from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  useEffect(() => {
    document.title = "Welcome | zinko";
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 text-indigo-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm <span className="text-indigo-500">zinko</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I code shit, Technology Engineer (Kinda).
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-800 py-20 px-6">
        <div className="contact-container">
          <h2 className="text-3xl font-bold text-white mb-6">Let's connect</h2>
          <p className="text-gray-300 mb-8">
            Want to work together or just say hi? Reach out through any of the platforms below.
          </p>
          <div className="contact-icons">
            <a href="mailto:zinko@orcbin.com" aria-label="Email">
              <Mail className="w-8 h-8 hover:text-indigo-400 transition-all" />
            </a>
            <a href="https://github.com/zinkowinko" target="_blank" aria-label="GitHub">
              <Github className="w-8 h-8 hover:text-indigo-400 transition-all" />
            </a>
            {/* Discord Icon */}
            <a href="https://discord.com/users/1215148880052625478" target="_blank" aria-label="Discord">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/66/Discord_logo_2023.svg"
                alt="Discord"
                className="w-8 h-8 hover:text-indigo-400 transition-all"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
