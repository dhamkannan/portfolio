import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Zap } from 'lucide-react';

export default function About() {
  const achievements = [
    {
      icon: Award,
      title: "Technical Leadership",
      description: "Recognized expertise in platform modernization and infrastructure optimization"
    },
    {
      icon: Users,
      title: "Team Mentorship",
      description: "Experienced in guiding engineering teams and cross-functional collaboration"
    },
    {
      icon: Target,
      title: "Cost Excellence",
      description: "Delivered $600K+ in annual infrastructure savings through strategic optimization"
    },
    {
      icon: Zap,
      title: "Innovation Driver",
      description: "Pioneered automated platform solutions and modern engineering practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'm a dynamic platform engineer passionate about building scalable, secure, and 
            cost-effective infrastructure solutions that drive business success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-orange-100 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Platform Engineering Excellence
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                My expertise centers on creating robust, scalable platform solutions that reduce 
                operational complexity while enhancing security and performance. I specialize in 
                bridging the gap between development teams and infrastructure needs.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Multi-cloud platform architecture and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Infrastructure as Code with Terraform and cloud-native tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Enterprise-grade security and compliance implementation</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-orange-100 hover:border-orange-300 transition-colors shadow-lg">
                <div className="p-3 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">{achievement.title}</h4>
                  <p className="text-slate-600 text-sm">{achievement.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl p-8 text-white shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Scale Your Infrastructure?
          </h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            I collaborate with leadership teams to implement cutting-edge platform solutions 
            that accelerate development velocity while maintaining operational excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-200 rounded-full"></div>
              <span>10x Faster Deployments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-200 rounded-full"></div>
              <span>80% Reduced Engineering Overhead</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-200 rounded-full"></div>
              <span>Zero Configuration Errors</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}