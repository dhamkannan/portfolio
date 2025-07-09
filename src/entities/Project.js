// Mock Project entity for development
export class Project {
  static async list(sortBy) {
    // Projects based on real work experience
    return [
      {
        id: 1,
        title: "GDPR-Compliant Medical Data Automation",
        company: "Heart for Health",
        description: "Evaluated, fine-tuned, and deployed GDPR-compliant LLMs to automate sensitive data extraction from medical records, reducing manual effort and operational costs while ensuring regulatory compliance.",
        technologies: ["LLMs", "Python", "GDPR Compliance", "Medical Data Processing", "AI/ML"],
        impact: "Significant reduction in manual effort and operational costs",
        category: "AI Automation",
        year: "2024",
        featured: true
      },
      {
        id: 2,
        title: "GCP Landing Zone Architecture",
        company: "Heart for Health",
        description: "Designed and implemented a shared-VPC hub-and-spoke architecture with transient networks, consolidating 20+ networks into 3 streamlined networks.",
        technologies: ["Google Cloud Platform", "VPC", "Terraform", "Network Architecture", "Cloud Native"],
        impact: "$400K annual savings through network consolidation",
        category: "Cloud Infrastructure",
        year: "2023",
        featured: true
      },
      {
        id: 3,
        title: "GKE Cost Optimization Initiative",
        company: "Heart for Health",
        description: "Spearheaded organization-wide GKE cost optimization through advanced application profiling, node rightsizing, and strategic cluster consolidation.",
        technologies: ["Google Kubernetes Engine", "Application Profiling", "Cluster Management", "Cost Optimization"],
        impact: "$200K annual infrastructure savings",
        category: "Cost Optimization",
        year: "2023",
        featured: true
      },
      {
        id: 4,
        title: "Zero-Trust Security Implementation",
        company: "Heart for Health",
        description: "Initiated comprehensive security controls including Cloud Armor, Secure Web Proxy, IDS, Security Command Centre, Identity Aware Proxy, Workload Identity, and Privileged Access Management.",
        technologies: ["Cloud Armor", "Identity Aware Proxy", "Workload Identity", "Security Command Centre", "PAM"],
        impact: "Comprehensive zero-trust security architecture implementation",
        category: "Security & Compliance",
        year: "2022",
        featured: true
      },
      {
        id: 5,
        title: "Meeting-to-Code Automation Pipeline",
        company: "Heart for Health",
        description: "Integrated LLMs into CI/CD pipelines to convert meeting notes into Azure DevOps work items with automated complexity scoring, streamlining project management workflows.",
        technologies: ["LLMs", "Azure DevOps", "CI/CD", "Automation", "Python"],
        impact: "Automated project management workflow from meetings to code",
        category: "AI Automation",
        year: "2024",
        featured: true
      },
      {
        id: 6,
        title: "Infrastructure as Code Transformation",
        company: "Heart for Health",
        description: "Transformed cloud deployments with Terraform, Ansible and cloud native tools, achieving 10x faster releases and zero configuration errors via automated CI/CD.",
        technologies: ["Terraform", "Ansible", "CI/CD", "Cloud Native", "Infrastructure as Code"],
        impact: "10x faster releases, zero configuration errors",
        category: "DevOps",
        year: "2022",
        featured: true
      },
      {
        id: 7,
        title: "Multi-Tenant Kubernetes Platform",
        company: "Heart for Health",
        description: "Designed and deployed multi-tenant app services using Helm, ArgoCD, and custom Python tools with organization-wide deployment standards and security hardening.",
        technologies: ["Kubernetes", "Helm", "ArgoCD", "Python", "GitOps", "Network Security"],
        impact: "Accelerated team velocity through standardization",
        category: "Platform Engineering",
        year: "2022",
        featured: true
      },
      {
        id: 8,
        title: "Enterprise Azure Data Platform",
        company: "International Card Services",
        description: "Architected secure data platform in Azure integrating Data Factory, Synapse, and Databricks with private connectivity for enterprise-scale data processing.",
        technologies: ["Azure", "Data Factory", "Synapse", "Databricks", "Private Connectivity"],
        impact: "Enterprise-scale secure data platform deployment",
        category: "Data Platform",
        year: "2021",
        featured: true
      },
      {
        id: 9,
        title: "NoSQL Data Platform Leadership",
        company: "ABN AMRO",
        description: "Led delivery of NoSQL platform (MongoDB, MarkLogic) as onsite lead, managing offshore teams to ensure high availability, disaster recovery, security, and performance.",
        technologies: ["MongoDB", "MarkLogic", "NoSQL", "Disaster Recovery", "CyberArk", "CI/CD"],
        impact: "High-availability NoSQL platform with enhanced security",
        category: "Data Platform",
        year: "2020",
        featured: true
      },
      {
        id: 10,
        title: "AWS Self-Service EMR Platform",
        company: "Proctor & Gamble",
        description: "Engineered an AWS Elastic MapReduce self-service platform enabling data teams to provision resources and run automated jobs on demand with integrated security controls.",
        technologies: ["AWS", "EMR", "Hadoop", "Self-Service Platform", "Automation"],
        impact: "Self-service data platform enabling on-demand resource provisioning",
        category: "Data Platform",
        year: "2018",
        featured: false
      },
      {
        id: 11,
        title: "Legacy Hadoop to AWS Migration",
        company: "Proctor & Gamble",
        description: "Orchestrated legacy Hadoop cluster migration to AWS with automated Cloudera Hadoop ecosystem deployment integrating disaster recovery and security controls.",
        technologies: ["AWS", "Hadoop", "Cloudera", "Migration", "Disaster Recovery"],
        impact: "Successful cloud migration with improved reliability",
        category: "Cloud Migration",
        year: "2018",
        featured: false
      },
      {
        id: 12,
        title: "Post-Acquisition Infrastructure Integration",
        company: "Mphasis (Canada Bread to Bimbo Bakery)",
        description: "Led migration of Canada Bread's infrastructure into Bimbo Bakery, ensuring seamless transition of Servers, Citrix XenApp Farms, VMware environments, and Active Directory.",
        technologies: ["VMware", "Citrix XenApp", "Active Directory", "Infrastructure Migration"],
        impact: "Seamless post-acquisition infrastructure integration",
        category: "Infrastructure Migration",
        year: "2016",
        featured: false
      }
    ];
  }
}
