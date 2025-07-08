import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to explore how robust platform engineering can accelerate your business?
            Connect with me directly through my professional networks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-8 md:flex-row"
        >
          <a
            href="https://www.linkedin.com/in/dhamkannan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-blue-600/20 rounded-xl hover:bg-blue-600/30 transition-colors shadow-lg"
          >
            <Linkedin className="w-8 h-8 text-blue-400" />
            <div>
              <div className="text-xl font-bold">LinkedIn</div>
              <div className="text-blue-300">Connect Professionally</div>
            </div>
          </a>
          <a
            href="https://github.com/dhamkannan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-slate-600/20 rounded-xl hover:bg-slate-600/30 transition-colors shadow-lg"
          >
            <Github className="w-8 h-8 text-slate-400" />
            <div>
              <div className="text-xl font-bold">GitHub</div>
              <div className="text-slate-300">Explore My Code</div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}