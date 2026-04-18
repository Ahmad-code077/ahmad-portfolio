/**
 * Type Definitions for Portfolio
 * Strict TypeScript types for all data structures
 */

export interface Skill {
    id: string;
    name: string;
    category: "Frontend" | "Backend" | "AI/Systems" | "DevOps";
    level: "Expert" | "Advanced" | "Intermediate";
    yearsOfExperience: number;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    problem: string;
    solution: string;
    impact: string;
    technologies: string[];
    link?: string;
    image?: string;
    featured: boolean;
}

export interface Experience {
    id: string;
    company: string;
    title: string;
    period: {
        start: string;
        end: string | "Present";
    };
    description: string;
    impact: string[];
    technologies: string[];
}

export interface ContactLink {
    platform: "Email" | "GitHub" | "LinkedIn" | "Twitter" | "Resume";
    label: string;
    url: string;
    icon?: string;
}

export interface SkillCategory {
    category: "Frontend" | "Backend" | "AI/Systems" | "DevOps";
    skills: Skill[];
}

export interface SectionProps {
    className?: string;
    children?: React.ReactNode;
}

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export interface CardProps {
    className?: string;
    children?: React.ReactNode;
    hover?: boolean;
}
