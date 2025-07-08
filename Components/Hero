import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, TrendingUp, Lightbulb, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full border border-orange-200">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-orange-800 text-sm font-medium">Platform Engineering & Innovation</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Empowering Scalable
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Infrastructure
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                A dynamic platform engineer and team leader, continuously learning and adapting to 
                leverage the latest advancements in technology, including <span className="font-semibold text-orange-700">AI and data-driven tools</span>,
                to build robust and secure platforms. Proven track record of delivering significant 
                <span className="font-semibold text-orange-700"> cost savings and efficiency gains</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('work')}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white text-orange-700 font-semibold rounded-xl border-2 border-orange-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>

          {/* Right column - Visual elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-100 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-orange-600" />
                    </div>
                    <span className="font-semibold text-slate-700">Cost Optimization</span>
                  </div>
                  <p className="text-sm text-slate-600">Strategic initiatives delivering significant annual savings</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-100 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Lightbulb className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="font-semibold text-slate-700">Adaptability & Growth</span>
                  </div>
                  <p className="text-sm text-slate-600">Continuously integrating new technologies and methodologies</p>
                </div>
              </div>
              
              <div className="space-y-6 pt-8">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-100 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Sparkles className="w-6 h-6 text-purple-600" />
                    </div>
                    <span className="font-semibold text-slate-700">Data-Driven Approach</span>
                  </div>
                  <p className="text-sm text-slate-600">Leveraging insights for intelligent platform solutions</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-2xl border border-orange-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-800 mb-1">5+ Years</div>
                    <div className="text-sm text-orange-700">Platform Engineering Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown className="w-6 h-6 text-slate-600 animate-bounce" />
      </motion.div>
    </section>
  );
}