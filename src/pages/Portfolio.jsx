import React from 'react';
import Navigation from '../components/Navigation.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Skills from '../components/SKills.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '../components/Contact.jsx';

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <div id="work">
        <Projects />
      </div>
      <Contact />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2024 Platform Engineer Portfolio. Crafted with precision and passion.
          </p>
        </div>
      </footer>
    </div>
  );
}