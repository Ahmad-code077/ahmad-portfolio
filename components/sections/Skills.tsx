'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillsByCategory } from '@/lib/data';
import { SkillCard } from '@/components/ui/SkillCard';
import { Section } from '@/components/ui/Section';

gsap.registerPlugin(ScrollTrigger);

export const Skills: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

    const categories = skillsByCategory();

    useEffect(() => {
        if (!containerRef.current) return;

        // Animate each category with stagger
        if (categoryRefs.current.length === 0) return;

        gsap.set(categoryRefs.current, { opacity: 0, y: 30 });

        gsap.to(categoryRefs.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                once: true,
                invalidateOnRefresh: true,
            },
        });

        return () => {
            gsap.set(categoryRefs.current, { opacity: 1, y: 0 });
        };
    }, [categories]);

    return (
        <Section
            id="skills"
            title="Tech Stack"
            subtitle="Production tools and frameworks I use daily"
            bgColor="background"
        >
            {/* Anchor point for scroll journey entrance */}
            <div id="anchor-techstack-start" data-anchor="journey-end" className="absolute h-0 w-0 -z-10" />

            <div className="space-y-16 md:space-y-20" ref={containerRef}>
                {categories.map((category, categoryIndex) => (
                    <div
                        key={category.category}
                        ref={(el) => {
                            if (el) categoryRefs.current[categoryIndex] = el;
                        }}
                        className="space-y-6"
                    >
                        {/* Category Header with Visual Indicator */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="h-1 w-12 bg-linear-to-r from-primary to-transparent rounded-full" />
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                    {category.category}
                                </h3>
                            </div>
                            <p className="text-text-secondary text-sm ml-0">
                                {category.skills.length} proficiencies
                            </p>
                        </div>

                        {/* Skills Grid with Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {category.skills.map((skill) => (
                                <SkillCard
                                    key={skill.id}
                                    name={skill.name}
                                    level={skill.level}
                                    yearsOfExperience={skill.yearsOfExperience}
                                />
                            ))}
                        </div>
                    </div>
                ))}

                {/* Summary Stats */}
                <div className="mt-12 pt-12 border-t border-border/30 grid grid-cols-3 gap-6 md:gap-8">
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                            {categories.reduce((sum, cat) => sum + cat.skills.length, 0)}
                        </div>
                        <p className="text-text-secondary text-sm">Total Skills</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4</div>
                        <p className="text-text-secondary text-sm">Categories</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                            {Math.max(
                                ...categories.flatMap((cat) =>
                                    cat.skills.map((s) => s.yearsOfExperience)
                                )
                            )}
                            +
                        </div>
                        <p className="text-text-secondary text-sm">Years Max</p>
                    </div>
                </div>
            </div>

            {/* Anchor point for scroll journey end */}
            <div id="anchor-techstack-end" data-anchor="journey-final" className="absolute h-0 w-0 -z-10" />
        </Section>
    );
};
