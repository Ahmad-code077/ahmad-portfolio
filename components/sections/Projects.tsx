'use client';

import React, { useEffect } from 'react';
import { setupStaggerChildren } from '@/lib/animations';
import { projects } from '@/lib/data';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/ui/Section';

export const Projects: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cleanup = setupStaggerChildren(containerRef.current, '.project-card', 0.12);
        return cleanup;
    }, []);

    return (
        <Section id="projects" title="Featured Projects">
            <div className="space-y-8 md:space-y-10" ref={containerRef}>
                {projects.map((project) => (
                    <Card key={project.id} className="project-card" hover>
                        {/* Featured Badge */}
                        {project.featured && (
                            <Badge variant="primary" className="mb-4 inline-block">
                                Featured
                            </Badge>
                        )}

                        {/* Project Header */}
                        <div className="mb-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                                {project.title}
                            </h3>
                            <p className="text-text-secondary text-base md:text-lg">
                                {project.description}
                            </p>
                        </div>

                        {/* Problem - Solution Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            {/* Problem */}
                            <div className="border-l-2 border-primary pl-4">
                                <h4 className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                                    Problem
                                </h4>
                                <p className="text-text-secondary text-sm">
                                    {project.problem}
                                </p>
                            </div>

                            {/* Solution */}
                            <div className="border-l-2 border-primary pl-4">
                                <h4 className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                                    Solution
                                </h4>
                                <p className="text-text-secondary text-sm">
                                    {project.solution}
                                </p>
                            </div>
                        </div>

                        {/* Impact */}
                        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-6">
                            <h4 className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                                Impact
                            </h4>
                            <p className="text-foreground text-sm md:text-base">{project.impact}</p>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        {/* Link */}
                        {project.link && (
                            <a
                                href={project.link}
                                className="text-primary hover:text-primary/80 text-sm font-semibold transition-colors inline-flex items-center gap-2 group"
                            >
                                View Case Study
                                <span className="group-hover:translate-x-1 transition-transform">
                                    →
                                </span>
                            </a>
                        )}
                    </Card>
                ))}
            </div>
        </Section>
    );
};
