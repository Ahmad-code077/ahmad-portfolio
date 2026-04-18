'use client';

import React, { useEffect } from 'react';
import { setupStaggerChildren } from '@/lib/animations';
import { skillsByCategory } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/ui/Section';

export const Skills: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cleanup = setupStaggerChildren(containerRef.current, '.skill-category', 0.08);
        return cleanup;
    }, []);

    const categories = skillsByCategory();

    return (
        <Section id="skills" title="Skills & Expertise">
            <div className="space-y-14 md:space-y-16" ref={containerRef}>
                {categories.map((category) => (
                    <div key={category.category} className="skill-category">
                        {/* Category Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8">
                            {category.category}
                        </h3>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                            {category.skills.map((skill) => (
                                <div key={skill.id} className="group">
                                    <Badge variant="primary" className="w-full justify-center text-center">
                                        {skill.name}
                                    </Badge>
                                    <p className="text-xs text-text-tertiary mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        {skill.yearsOfExperience}+ years
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
