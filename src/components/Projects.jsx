import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../entities/Project.js';
import { ExternalLink, Award, TrendingUp, Shield } from 'lucide-react';

export default function Projects() {
  const [projects, setProjects] = React.useState([]);
  const [featuredProjects, setFeaturedProjects] = React.useState([]);

  React.useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const allProjects = await Project.list('-created_date');
    setProjects(allProjects);
    setFeaturedProjects(allProjects.filter(p => p.featured));
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'AI Automation':
        return <Award className="w-5 h-5" />;
      case 'Cost Optimization':
        return <TrendingUp className="w-5 h-5" />;
      case 'Security & Compliance':
        return <Shield className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'AI Automation':
        return 'from-purple-500 to-pink-500';
      case 'Platform Modernization':
        return 'from-blue-500 to-cyan-500';
      case 'Security & Compliance':
        return 'from-red-500 to-orange-500';
      case 'Cost Optimization':
        return 'from-green-500 to-emerald-500';
      case 'Data Platform':
        return 'from-indigo-500 to-purple-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing transformative platform engineering solutions that deliver 
            measurable business impact and cost savings.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(project.category)}`}>
                  {getCategoryIcon(project.category)}
                  <div className="text-white text-xs font-medium">
                    {project.category}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                  <p className="text-slate-500 text-sm">{project.company} • {project.year}</p>
                </div>
              </div>
              
              <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              
              <div className="border-t border-slate-200 pt-4">
                <div className="flex items-center gap-2 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-semibold">{project.impact}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Impact Summary
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$600K+</div>
                <div className="text-slate-600">Annual Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">10x</div>
                <div className="text-slate-600">Faster Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">80%</div>
                <div className="text-slate-600">Reduced Overhead</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}