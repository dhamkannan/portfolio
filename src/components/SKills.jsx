import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Settings, Shield, Database, Code, Layers } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["AWS", "Azure", "GCP", "Multi-Cloud Architecture", "Landing Zone Design"],
      description: "Expert in designing and implementing scalable cloud infrastructure across major providers"
    },
    {
      title: "DevOps & Infrastructure",
      icon: Settings,
      skills: ["Kubernetes", "Terraform", "Docker", "GitOps (ArgoCD)", "Helm", "Ansible"],
      description: "Specializing in modern infrastructure automation and container orchestration"
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      skills: ["Zero-Trust Architecture", "CSPM", "Identity Management", "Network Security", "Compliance Automation"],
      description: "Implementing enterprise-grade security controls and regulatory compliance"
    },
    {
      title: "Data & Analytics",
      icon: Database,
      skills: ["Databricks", "Hadoop", "Data Lake Architecture", "MongoDB", "Data Factory"],
      description: "Building secure and scalable data platform solutions"
    },
    {
      title: "Development & Automation",
      icon: Code,
      skills: ["Python", "Java", "CI/CD Pipelines", "Infrastructure as Code", "Automation Scripts"],
      description: "Creating robust automation solutions and development workflows"
    },
    {
      title: "Platform Architecture",
      icon: Layers,
      skills: ["Microservices", "API Gateway", "Service Mesh", "Observability", "Performance Optimization"],
      description: "Designing resilient and scalable platform architectures"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            My Toolkit
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive expertise spanning cloud infrastructure, modern DevOps practices, 
            and enterprise-grade platform engineering solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100 hover:border-orange-300 transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl group-hover:scale-110 transition-transform">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
              </div>
              
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white text-slate-700 rounded-full text-xs font-medium border border-orange-200 hover:border-orange-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Key Technologies & Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">Infrastructure & Orchestration</h4>
                <div className="flex flex-wrap gap-2">
                  {['Kubernetes', 'Docker', 'Terraform', 'Helm', 'ArgoCD', 'Ansible'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-slate-700 rounded-lg text-sm font-medium border border-orange-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">Monitoring & Observability</h4>
                <div className="flex flex-wrap gap-2">
                  {['Datadog', 'Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'New Relic'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-slate-700 rounded-lg text-sm font-medium border border-orange-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}