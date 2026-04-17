/**
 * Portfolio Data
 * Placeholder content reflecting Full Stack + AI Engineer background
 */

import {
  Project,
  Experience,
  Skill,
  ContactLink,
  SkillCategory,
} from "./types";

export const skills: Skill[] = [
  // Frontend
  {
    id: "react",
    name: "React",
    category: "Frontend",
    level: "Expert",
    yearsOfExperience: 5,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    level: "Expert",
    yearsOfExperience: 4,
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    level: "Expert",
    yearsOfExperience: 4,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Expert",
    yearsOfExperience: 3,
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    level: "Expert",
    yearsOfExperience: 6,
  },
  {
    id: "express",
    name: "Express",
    category: "Backend",
    level: "Expert",
    yearsOfExperience: 5,
  },
  {
    id: "go",
    name: "Go",
    category: "Backend",
    level: "Advanced",
    yearsOfExperience: 3,
  },
  {
    id: "python",
    name: "Python",
    category: "Backend",
    level: "Advanced",
    yearsOfExperience: 4,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Backend",
    level: "Expert",
    yearsOfExperience: 5,
  },
  {
    id: "redis",
    name: "Redis",
    category: "Backend",
    level: "Advanced",
    yearsOfExperience: 3,
  },
  {
    id: "rabbitmq",
    name: "RabbitMQ",
    category: "Backend",
    level: "Advanced",
    yearsOfExperience: 2,
  },

  // AI/Systems
  {
    id: "rag",
    name: "RAG Pipelines",
    category: "AI/Systems",
    level: "Advanced",
    yearsOfExperience: 2,
  },
  {
    id: "vector-search",
    name: "Vector Search",
    category: "AI/Systems",
    level: "Advanced",
    yearsOfExperience: 2,
  },
  {
    id: "llm-integration",
    name: "LLM Integration",
    category: "AI/Systems",
    level: "Advanced",
    yearsOfExperience: 2,
  },
  {
    id: "microservices",
    name: "Microservices",
    category: "AI/Systems",
    level: "Expert",
    yearsOfExperience: 4,
  },

  // DevOps
  {
    id: "docker",
    name: "Docker",
    category: "DevOps",
    level: "Advanced",
    yearsOfExperience: 3,
  },
  {
    id: "aws",
    name: "AWS",
    category: "DevOps",
    level: "Advanced",
    yearsOfExperience: 3,
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "DevOps",
    level: "Advanced",
    yearsOfExperience: 3,
  },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Event-Driven Content Pipeline",
    description:
      "Real-time content processing system with distributed architecture",
    problem:
      "Content ingestion was bottlenecked by synchronous processing, causing 10+ minute delays in publishing",
    solution:
      "Built event-driven microservice system using RabbitMQ, Node.js + Express backend, PostgreSQL for persistence, and Redis caching layer. Implemented pub/sub pattern for real-time updates.",
    impact: "Reduced processing time from 10 min to <2 sec. 99.9% uptime in production. Handles 500K+ events/day.",
    technologies: [
      "Node.js",
      "Express",
      "RabbitMQ",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    link: "#",
    featured: true,
  },
  {
    id: "project-2",
    title: "AI-Powered RAG Search Engine",
    description: "Vector database with semantic search and LLM integration",
    problem:
      "Legacy keyword search couldn't handle semantic queries or context-aware results",
    solution:
      "Implemented RAG pipeline with OpenAI embeddings, vector database (Qdrant), and Python service. Built Next.js frontend for interactive search with streaming responses.",
    impact: "Search relevance improved 65%. Query latency <500ms. Powers 50K+ daily searches.",
    technologies: [
      "Python",
      "FastAPI",
      "Qdrant",
      "OpenAI",
      "Next.js",
      "TypeScript",
    ],
    link: "#",
    featured: true,
  },
  {
    id: "project-3",
    title: "Multi-Tenant SaaS Platform",
    description: "Scalable platform supporting 100+ customer organizations",
    problem:
      "Single-tenant architecture limited revenue model and scaling capabilities",
    solution:
      "Architected multi-tenant system with role-based access control (RBAC), tenant isolation, and separate data contexts. Node.js backend with PostgreSQL schemas per org.",
    impact: "Onboarded 100+ tenants. Average revenue per user +40%. 99.95% SLA.",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "JWT",
      "React",
      "Tailwind",
    ],
    link: "#",
    featured: false,
  },
];

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "TechCorp Systems",
    title: "Senior Full Stack Engineer",
    period: {
      start: "Jan 2022",
      end: "Present",
    },
    description:
      "Lead backend architecture and full-stack feature development for event-driven platform serving millions of daily operations.",
    impact: [
      "Designed and implemented microservices architecture reducing latency by 75%",
      "Led team of 4 engineers in building RAG-based AI search feature",
      "Mentored junior developers on distributed systems patterns",
    ],
    technologies: [
      "Node.js",
      "Go",
      "React",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
    ],
  },
  {
    id: "exp-2",
    company: "StartupAI Inc",
    title: "Backend & AI Systems Engineer",
    period: {
      start: "Jun 2020",
      end: "Dec 2021",
    },
    description:
      "Built core backend infrastructure and AI integration systems for machine learning platform.",
    impact: [
      "Implemented Python FastAPI service for model inference with 50ms p99 latency",
      "Designed vector database integration for semantic search capabilities",
      "Scaled system from 1K to 100K monthly active users",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "OpenAI",
      "Docker",
      "AWS",
    ],
  },
  {
    id: "exp-3",
    company: "WebDev Solutions",
    title: "Full Stack Developer",
    period: {
      start: "Feb 2019",
      end: "May 2020",
    },
    description:
      "Developed full-stack web applications for diverse clients, from frontend to database optimization.",
    impact: [
      "Built 15+ production applications with React and Node.js",
      "Optimized database queries reducing load times by 60%",
      "Established best practices for code quality and testing",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
      "CSS",
    ],
  },
];

export const skillsByCategory = (): SkillCategory[] => {
  const categories = [
    "Frontend" as const,
    "Backend" as const,
    "AI/Systems" as const,
    "DevOps" as const,
  ];

  return categories.map((category) => ({
    category,
    skills: skills.filter((skill) => skill.category === category),
  }));
};

export const contactLinks: ContactLink[] = [
  {
    platform: "Email",
    label: "hello@example.com",
    url: "mailto:hello@example.com",
  },
  {
    platform: "GitHub",
    label: "github.com/yourprofile",
    url: "https://github.com",
  },
  {
    platform: "LinkedIn",
    label: "linkedin.com/in/yourprofile",
    url: "https://linkedin.com",
  },
  {
    platform: "Resume",
    label: "Download Resume",
    url: "/resume.pdf",
  },
];
