'use client';

import React, { useEffect } from 'react';
import { setupStaggerChildren } from '@/lib/animations';
import { experience } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/ui/Section';

export const Experience: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cleanup = setupStaggerChildren(containerRef.current, '.experience-item', 0.12);
        return cleanup;
    }, []);

    return (
        <Section id="experience" title="Experience" bgColor="surface">
            <div className="space-y-8 md:space-y-10" ref={containerRef}>
                {experience.map((exp, index) => (
                    <div key={exp.id} className="experience-item relative pl-6 md:pl-8 pb-8">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full" />

                        {/* Timeline line (not on last item) */}
                        {index < experience.length - 1 && (
                            <div className="absolute left-1.5 top-6 bottom-0 w-0.5 bg-border" />
                        )}

                        {/* Content */}
                        <div className="bg-background border border-border rounded-lg p-5 md:p-6">
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                                        {exp.title}
                                    </h3>
                                    <p className="text-primary text-base md:text-lg font-semibold mt-1">
                                        {exp.company}
                                    </p>
                                </div>
                                <p className="text-text-secondary text-sm whitespace-nowrap">
                                    {exp.period.start} – {exp.period.end}
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-text-secondary mb-4 text-sm md:text-base">{exp.description}</p>

                            {/* Impact */}
                            <div className="mb-5">
                                <p className="text-sm font-semibold text-foreground mb-2">Impact:</p>
                                <ul className="space-y-1.5 md:space-y-2">
                                    {exp.impact.map((point, i) => (
                                        <li key={i} className="text-text-secondary text-sm flex gap-2">
                                            <span className="text-primary">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                    <Badge key={tech} variant="secondary" className="text-xs">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
