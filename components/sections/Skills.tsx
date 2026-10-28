'use client';

import React, { useEffect, useRef } from 'react';
import { skillsByCategory } from '@/lib/data';
import { Section } from '@/components/ui/Section';
import { setupStaggerChildren } from '@/lib/animations';

const levelClasses: Record<string, string> = {
    Expert: 'border-primary/60 text-primary bg-primary/10',
    Advanced: 'border-border/40 text-foreground/80',
    Intermediate: 'border-border/20 text-text-tertiary',
};

export const Skills: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cleanup = setupStaggerChildren(containerRef.current, '.stack-row', 0.1);
        return cleanup;
    }, []);

    return (
        <Section
            id="skills"
            title="Stack"
            subtitle="What I reach for, grouped by where it sits in the system."
            bgColor="background"
        >
            <div ref={containerRef}>
                {skillsByCategory().map((category, index, all) => (
                    <div
                        key={category.category}
                        className={`stack-row flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8 py-6 ${index < all.length - 1 ? 'border-b border-border/20' : ''
                            }`}
                    >
                        <h3 className="font-mono text-sm text-text-tertiary md:w-36 shrink-0">
                            {category.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill.id}
                                    className={`px-3 py-1.5 rounded-full text-sm font-mono border ${levelClasses[skill.level]}`}
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
