import { useEffect } from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  useEffect(() => {
    document.title = "Welcome | zinko";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm <span className="text-indigo-500">zinko</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-2xl text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I code shit, Technology Engineer (Kinda).
        </motion.p>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="#contact"
            className="px-4 py-2 border border-white hover:bg-white hover:text-black transition rounded"
          >
            Contact Me
          </a>
          <a
            href="/"
            target="_blank"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 transition rounded"
          >
            Resume
          </a>
        </motion.div>
      </section>

      <section id="contact" className="bg-gray-800 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's connect</h2>
          <p className="text-gray-300 mb-8">
            Want to work together or just say hi? Reach out through any of the platforms below.
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:zinko@orcbin.com" aria-label="Email">
              <Mail className="w-6 h-6 hover:text-indigo-400 transition" />
            </a>
            <a href="https://github.com/zinkowinko" target="_blank" aria-label="GitHub">
              <Github className="w-6 h-6 hover:text-indigo-400 transition" />
            </a>
            <a href="https://discord.com/users/1215148880052625478" target="_blank" aria-label="Discord">
              <Linkedin className="w-6 h-6 hover:text-indigo-400 transition" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
