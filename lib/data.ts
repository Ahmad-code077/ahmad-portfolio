/**
 * Portfolio Data - Muhammad Ahmad
 * Real experience, projects, and skills from resume
 */

import { Project, Experience, Skill, ContactLink, SkillCategory } from "./types";

export const skills: Skill[] = [
    // Frontend
    {
        id: "html",
        name: "HTML",
        category: "Frontend",
        level: "Expert",
        yearsOfExperience: 2,
    },
    {
        id: "css",
        name: "CSS",
        category: "Frontend",
        level: "Expert",
        yearsOfExperience: 2,
    },
    {
        id: "tailwindcss",
        name: "Tailwind CSS",
        category: "Frontend",
        level: "Expert",
        yearsOfExperience: 2,
    },
    {
        id: "javascript",
        name: "JavaScript",
        category: "Frontend",
        level: "Expert",
        yearsOfExperience: 2,
    },
    {
        id: "typescript",
        name: "TypeScript",
        category: "Frontend",
        level: "Expert",
        yearsOfExperience: 1,
    },
    {
        id: "react",
        name: "React.js",
        category: "Frontend",
        level: "Expert",
        yearsOfExperience: 2,
    },
    {
        id: "redux",
        name: "Redux Toolkit",
        category: "Frontend",
        level: "Advanced",
        yearsOfExperience: 2,
    },
    {
        id: "rtk-query",
        name: "RTK Query",
        category: "Frontend",
        level: "Advanced",
        yearsOfExperience: 2,
    },
    {
        id: "axios",
        name: "Axios",
        category: "Frontend",
        level: "Advanced",
        yearsOfExperience: 2,
    },
    {
        id: "nextjs",
        name: "Next.js 15",
        category: "Frontend",
        level: "Expert",
        yearsOfExperience: 2,
    },
    {
        id: "zod",
        name: "Zod",
        category: "Frontend",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "shadcn",
        name: "Shadcn UI",
        category: "Frontend",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "react-hook-form",
        name: "React Hook Form",
        category: "Frontend",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "mobile-first",
        name: "Mobile-First Design",
        category: "Frontend",
        level: "Expert",
        yearsOfExperience: 2,
    },

    // Backend
    {
        id: "nodejs",
        name: "Node.js",
        category: "Backend",
        level: "Expert",
        yearsOfExperience: 2,
    },
    {
        id: "expressjs",
        name: "Express.js",
        category: "Backend",
        level: "Expert",
        yearsOfExperience: 2,
    },
    {
        id: "rest-api",
        name: "REST API Design",
        category: "Backend",
        level: "Expert",
        yearsOfExperience: 2,
    },
    {
        id: "microservices",
        name: "Microservices",
        category: "Backend",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "oauth",
        name: "OAuth 2.0",
        category: "Backend",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "openid",
        name: "OpenID Connect",
        category: "Backend",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "jwt",
        name: "JWT",
        category: "Backend",
        level: "Advanced",
        yearsOfExperience: 2,
    },
    {
        id: "nextauth",
        name: "NextAuth.js",
        category: "Backend",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "websocket",
        name: "WebSocket/Socket.io",
        category: "Backend",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "pusher",
        name: "Pusher",
        category: "Backend",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "stripe",
        name: "Stripe Payments",
        category: "Backend",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "mongodb",
        name: "MongoDB",
        category: "Backend",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "postgresql",
        name: "PostgreSQL",
        category: "Backend",
        level: "Expert",
        yearsOfExperience: 2,
    },
    {
        id: "supabase",
        name: "Supabase",
        category: "Backend",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "prisma",
        name: "Prisma",
        category: "Backend",
        level: "Advanced",
        yearsOfExperience: 2,
    },
    {
        id: "mongoose",
        name: "Mongoose",
        category: "Backend",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "fastapi",
        name: "FastAPI",
        category: "Backend",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "python",
        name: "Python",
        category: "Backend",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "redis",
        name: "Redis",
        category: "Backend",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "rabbitmq",
        name: "RabbitMQ",
        category: "Backend",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "sqs",
        name: "SQS",
        category: "Backend",
        level: "Intermediate",
        yearsOfExperience: 1,
    },
    {
        id: "pubsub",
        name: "Pub/Sub",
        category: "Backend",
        level: "Advanced",
        yearsOfExperience: 1,
    },

    // AI/Systems
    {
        id: "n8n",
        name: "n8n",
        category: "AI/Systems",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "zapier",
        name: "Zapier",
        category: "AI/Systems",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "make",
        name: "Make.com",
        category: "AI/Systems",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "ai-sdk",
        name: "AI SDKs",
        category: "AI/Systems",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "llm",
        name: "Local LLMs",
        category: "AI/Systems",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "rag",
        name: "RAG Pipelines",
        category: "AI/Systems",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "vector-search",
        name: "Vector Search",
        category: "AI/Systems",
        level: "Advanced",
        yearsOfExperience: 1,
    },

    // DevOps
    {
        id: "git",
        name: "Git",
        category: "DevOps",
        level: "Expert",
        yearsOfExperience: 2,
    },
    {
        id: "github",
        name: "GitHub",
        category: "DevOps",
        level: "Expert",
        yearsOfExperience: 2,
    },
    {
        id: "docker",
        name: "Docker",
        category: "DevOps",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "vercel",
        name: "Vercel",
        category: "DevOps",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "postman",
        name: "Postman",
        category: "DevOps",
        level: "Advanced",
        yearsOfExperience: 2,
    },
    {
        id: "vscode",
        name: "VS Code",
        category: "DevOps",
        level: "Expert",
        yearsOfExperience: 2,
    },
    {
        id: "vps",
        name: "VPS Deployment",
        category: "DevOps",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "aws-ec2",
        name: "AWS EC2",
        category: "DevOps",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "aws-s3",
        name: "AWS S3",
        category: "DevOps",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "hetzner",
        name: "Hetzner Cloud",
        category: "DevOps",
        level: "Advanced",
        yearsOfExperience: 1,
    },
    {
        id: "cron",
        name: "Cron Jobs",
        category: "DevOps",
        level: "Advanced",
        yearsOfExperience: 1,
    },
];

export const projects: Project[] = [
    {
        id: "xissed",
        title: "Xissed — Social Platform",
        description: "Subscription-based social platform with real-time chat, notifications, and contests",
        problem:
            "Social platforms face challenges with real-time engagement, user retention, and monetization through subscriptions",
        solution:
            "Built full-featured platform using Next.js 15 with TypeScript, Tailwind CSS, and Shadcn UI. Integrated Pusher for real-time chat and notifications, Stripe for subscription management, and NextAuth.js for secure authentication. Used Prisma with PostgreSQL for optimized schema design.",
        impact: "Live platform with active user engagement, functional subscription model, and real-time features improving user retention.",
        technologies: [
            "Next.js 15",
            "TypeScript",
            "Tailwind CSS",
            "Prisma",
            "PostgreSQL",
            "Pusher",
            "Stripe",
            "NextAuth.js",
        ],
        link: "#",
        featured: true,
    },
    {
        id: "surgerytrust",
        title: "SurgeryTrust — Healthcare Platform",
        description: "Platform connecting patients with verified surgeons for secure bookings and real-time consultations",
        problem:
            "Patients lack a trusted way to find qualified surgeons, book appointments, and pay securely online. Real-time communication with doctors is limited.",
        solution:
            "Developed healthcare platform with Next.js 15, secure authentication via NextAuth.js, Stripe payment integration for bookings. Implemented Pusher for real-time consultations. Used MongoDB with Prisma ORM for flexible patient/surgeon data modeling. Built responsive UI with Shadcn components.",
        impact: "Live platform enabling patient-surgeon connections with secure payments, reducing barriers to healthcare access.",
        technologies: [
            "Next.js 15",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
            "Prisma",
            "MongoDB",
            "Pusher",
            "Stripe",
            "NextAuth.js",
        ],
        link: "#",
        featured: true,
    },
    {
        id: "dating-app",
        title: "Dating Web Application",
        description: "Full-featured dating platform with profiles, likes, follows, and real-time messaging",
        problem:
            "Dating platforms need sophisticated matching, real-time notifications, and engaging user interactions to improve retention and user activity.",
        solution:
            "Built comprehensive dating app with Next.js 15, real-time features via Pusher for instant notifications and messaging. Implemented authentication with NextAuth.js, payment processing with Stripe for premium features. Used Prisma + PostgreSQL for robust user and relationship data management.",
        impact: "Live dating platform with improved user interaction metrics and retention through real-time features.",
        technologies: [
            "Next.js 15",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
            "Pusher",
            "Prisma",
            "NextAuth.js",
        ],
        link: "#",
        featured: false,
    },
];

export const experience: Experience[] = [
    {
        id: "algotix",
        company: "Algotix.ai",
        title: "Backend & AI Engineer",
        period: {
            start: "2026",
            end: "Present",
        },
        description:
            "Building AI pipelines, RAG systems, and intelligent infrastructure for LLM applications. Architecting scalable backend systems with modern distributed patterns.",
        impact: [
            "Built AI pipelines and RAG systems for LLM applications with production-grade reliability",
            "Architected microservices using RabbitMQ/SQS with Redis caching layer",
            "Deployed production workflows on Hetzner Cloud and AWS EC2/S3 with comprehensive cron automation and logging",
        ],
        technologies: [
            "Node.js",
            "PostgreSQL",
            "FastAPI",
            "Python",
            "RabbitMQ",
            "SQS",
            "Redis",
            "AWS EC2",
            "AWS S3",
            "Hetzner Cloud",
        ],
    },
    {
        id: "creatic-pro",
        company: "Creatic Pro",
        title: "Full Stack Developer",
        period: {
            start: "Jan 2025",
            end: "Jan 2026",
        },
        description:
            "Developed production social platform with real-time messaging, family notifications, and role-based access control. Built scalable REST APIs and integrated payment processing.",
        impact: [
            "Built production social platform with real-time chat, notifications, and family-based role system",
            "Developed REST APIs with JWT authentication, Stripe subscription integration",
            "Designed optimized PostgreSQL schemas using Prisma with proper indexing and transactions",
            "Implemented role-based access control (RBAC) for multi-tier user permissions",
        ],
        technologies: [
            "Next.js 15",
            "TypeScript",
            "Tailwind CSS",
            "Express.js",
            "PostgreSQL",
            "Prisma",
            "Stripe",
            "NextAuth.js",
            "Pusher",
        ],
    },
    {
        id: "codes-thinker",
        company: "Code's Thinker",
        title: "Frontend Engineer",
        period: {
            start: "Aug 2024",
            end: "Jan 2025",
        },
        description:
            "Improved Next.js application performance and scalability. Built reusable component library and integrated backend APIs with state management.",
        impact: [
            "Improved application performance and scalability using Next.js 15 and TypeScript best practices",
            "Built reusable UI components library with Tailwind CSS and Shadcn UI for consistent design",
            "Integrated REST APIs with Redux Toolkit for robust global state management (RTK Query)",
            "Optimized bundle size and rendering performance through code splitting and lazy loading",
        ],
        technologies: [
            "Next.js 15",
            "TypeScript",
            "React.js",
            "Tailwind CSS",
            "Shadcn UI",
            "Redux Toolkit",
            "RTK Query",
            "Axios",
        ],
    },
    {
        id: "stemeye",
        company: "StemEye",
        title: "Frontend Developer",
        period: {
            start: "Jun 2024",
            end: "Aug 2024",
        },
        description:
            "Converted Figma designs into responsive React components. Resolved layout, responsiveness, and API integration issues.",
        impact: [
            "Converted Figma designs into pixel-perfect responsive React components",
            "Built mobile-first layouts with Tailwind CSS ensuring consistency across all screen sizes",
            "Integrated APIs and resolved complex layout and responsive design challenges",
        ],
        technologies: [
            "React.js",
            "JavaScript",
            "Tailwind CSS",
            "Figma",
            "Mobile-First Design",
        ],
    },
];

export const skillsByCategory = (): SkillCategory[] => {
    const categories = ["Frontend" as const, "Backend" as const, "AI/Systems" as const, "DevOps" as const];

    return categories.map((category) => ({
        category,
        skills: skills.filter((skill) => skill.category === category),
    }));
};

export const contactLinks: ContactLink[] = [
    {
        platform: "Email",
        label: "ahmadeveloper077@gmail.com",
        url: "mailto:ahmadeveloper077@gmail.com",
    },
    {
        platform: "GitHub",
        label: "github.com",
        url: "https://github.com",
    },
    {
        platform: "LinkedIn",
        label: "linkedin.com",
        url: "https://linkedin.com",
    },
    {
        platform: "Resume",
        label: "Download Resume",
        url: "/resume.pdf",
    },
];
