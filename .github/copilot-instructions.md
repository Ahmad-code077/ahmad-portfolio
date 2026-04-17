# GitHub Copilot Instructions – Portfolio Project

## 👤 Developer Profile Context

- I am a Software Engineer specializing in full-stack development, backend architecture, and AI-driven systems.
- Strong focus on scalable backend systems, microservices, authentication, and event-driven architecture.
- Also experienced in modern frontend development using Next.js, React, and TypeScript.
- I work with production-grade systems including APIs, databases, queues, caching, and real-time systems.

---

## 🧠 Core Technical Identity

When generating code, assume I am building production-level systems involving:

### Backend Strengths

- Node.js + Express
- Microservices architecture
- REST API design
- Authentication (JWT, OAuth 2.0, OpenID Connect, NextAuth.js)
- WebSockets / real-time systems (Socket.io, Pusher)
- Databases: PostgreSQL, MongoDB, Prisma, Mongoose
- Caching: Redis
- Messaging: RabbitMQ, SQS, Pub/Sub
- Background jobs, cron jobs, logging systems

### AI / Advanced Systems

- RAG pipelines
- Vector search systems
- LLM integrations
- AI SDK-based workflows
- Automation tools (n8n, Zapier, Make.com)

### Frontend Stack

- Next.js (App Router only)
- React + TypeScript
- Tailwind CSS
- Shadcn UI
- Redux Toolkit / RTK Query (when needed)
- Mobile-first responsive design

### DevOps & Deployment

- Docker
- AWS (EC2, S3)
- Vercel
- Hetzner Cloud
- CI/CD awareness
- Logging & monitoring systems

---

## 🎨 Design System Rules (IMPORTANT)

- All colors MUST use CSS variables (never hardcoded hex values)
- Theme is defined in `app/globals.css`
- Tailwind must map to CSS variables
- One central place controls entire UI theme

Example rule:

- Use `bg-primary`, NOT `bg-indigo-500`
- Use `text-foreground`, NOT hardcoded colors

Consistency > creativity in styling.

---

## 🏗️ Architecture Rules

- Prefer clean, modular architecture
- Keep UI, logic, and data separated
- Use `/components/ui` for reusable UI
- Use `/components/sections` for page sections
- Use `/lib` for utilities and data
- Avoid mixing business logic inside UI components

---

## ⚙️ Code Quality Rules

- Always use TypeScript strictly
- NEVER use `any`
- Define interfaces/types for all data structures
- Avoid unsafe type casting
- Prefer explicit return types for functions
- Keep functions small and composable

---

## 🚫 Anti-Patterns to Avoid

- No hardcoded styling values
- No inline business logic in JSX
- No unnecessary state management
- No over-engineered abstractions
- No random library suggestions
- No UI frameworks outside Tailwind + Shadcn

---

## 🎬 Animation Rules

- Use Framer Motion OR GSAP (not both together unless necessary)
- Animations must be subtle and purposeful
- Avoid animation-heavy interfaces that slow UX
- Hero animation (if used) must not block initial content
- Prefer:
  - fade-in
  - slide-up
  - staggered reveal
  - scroll-based transitions

---

## 🧠 Portfolio Intent

This project is not just a website.

It is meant to demonstrate:

- System design thinking
- Backend scalability knowledge
- Real-world production experience
- Clean frontend architecture
- AI + automation awareness
- Professional engineering discipline

---

## 📌 Content Guidelines (VERY IMPORTANT)

When generating UI or text content:

- Focus on clarity over hype
- Avoid generic developer buzzwords
- Prefer measurable impact statements
- Use real engineering terminology (not marketing language)
- Keep descriptions specific, not vague

Bad:

- "Built amazing scalable app"

Good:

- "Built event-driven microservice system with Redis caching and RabbitMQ-based async processing"

---

## 🎯 Project Goal

The final portfolio should:

- Feel like a premium engineering showcase
- Load fast and perform well
- Be SEO optimized
- Clearly communicate backend + AI expertise
- Avoid unnecessary visual noise
- Demonstrate real system thinking
