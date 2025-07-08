// Mock Project entity for development
export class Project {
  static async list(sortBy) {
    // Mock project data
    return [
      {
        id: 1,
        title: "Multi-Cloud Platform Optimization",
        company: "Enterprise Corp",
        description: "Architected and implemented a comprehensive multi-cloud strategy reducing infrastructure costs by 40% while improving deployment efficiency.",
        technologies: ["AWS", "Azure", "Terraform", "Kubernetes", "ArgoCD"],
        impact: "40% cost reduction, 10x faster deployments",
        category: "Cost Optimization",
        year: "2024",
        featured: true
      },
      {
        id: 2,
        title: "Zero-Trust Security Implementation",
        company: "Security First Inc",
        description: "Designed and deployed enterprise-wide zero-trust architecture with automated compliance monitoring and threat detection.",
        technologies: ["Identity Management", "Network Security", "CSPM", "Automation"],
        impact: "100% compliance achievement, 60% security incident reduction",
        category: "Security & Compliance",
        year: "2024",
        featured: true
      },
      {
        id: 3,
        title: "AI-Powered Infrastructure Automation",
        company: "Innovation Labs",
        description: "Built intelligent infrastructure automation platform using AI/ML for predictive scaling and self-healing systems.",
        technologies: ["Python", "Machine Learning", "Kubernetes", "Prometheus", "Grafana"],
        impact: "80% reduction in manual operations, 99.9% uptime",
        category: "AI Automation",
        year: "2023",
        featured: true
      },
      {
        id: 4,
        title: "Data Platform Modernization",
        company: "DataCorp Solutions",
        description: "Migrated legacy data infrastructure to modern cloud-native platform with improved scalability and performance.",
        technologies: ["Databricks", "Data Factory", "MongoDB", "Apache Spark"],
        impact: "300% performance improvement, 50% cost savings",
        category: "Data Platform",
        year: "2023",
        featured: true
      }
    ];
  }
}
