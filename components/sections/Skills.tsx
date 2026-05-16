'use client';

import React, { useRef } from 'react';
import { skillsByCategory } from '@/lib/data';
import { Section } from '@/components/ui/Section';
import { SkillTreeWrapper } from '@/components/SkillTreeWrapper';

export const Skills: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <Section
            id="skills"
            title="Skills Tree"
            subtitle="Interactive skill hierarchy with real-time exploration"
            bgColor="background"
        >
            <div ref={containerRef} className="space-y-20">
                {/* Interactive React Flow Skill Tree */}
                <div className="w-full flex items-center justify-center py-8">
                    <div className="w-full max-w-6xl px-4">
                        <SkillTreeWrapper />
                        <p className="text-center text-text-secondary mt-6 text-sm md:text-base">
                            Drag nodes to explore • Scroll to zoom • Pan to navigate the full hierarchy
                        </p>
                    </div>
                </div>

                {/* Skill Statistics */}
                <div className="w-full flex items-center justify-center py-20">
                    <div className="text-center max-w-4xl px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                            Technical Proficiency Overview
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skillsByCategory().map((category) => (
                                <div
                                    key={category.category}
                                    className="p-6 rounded-lg border border-border/30 bg-surface/50"
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">
                                        {category.category}
                                    </h3>
                                    <div className="space-y-2 text-left">
                                        <p className="text-text-secondary text-sm">
                                            <span className="font-semibold">{category.skills.length}</span> skills
                                        </p>
                                        <p className="text-text-secondary text-sm">
                                            <span className="font-semibold">
                                                {category.skills.filter((s) => s.level === 'Expert').length}
                                            </span>{' '}
                                            Expert
                                        </p>
                                        <p className="text-text-secondary text-sm">
                                            <span className="font-semibold">
                                                {category.skills.filter((s) => s.level === 'Advanced').length}
                                            </span>{' '}
                                            Advanced
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Legend */}
                <div className="w-full flex items-center justify-center py-10">
                    <div className="text-center max-w-2xl px-4">
                        <h3 className="text-lg font-bold text-foreground mb-6">Understanding the Tree</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                                <p className="text-sm text-text-secondary mb-2">Larger Nodes</p>
                                <p className="text-xs text-text-tertiary">
                                    Root categories and primary skill domains
                                </p>
                            </div>
                            <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/30">
                                <p className="text-sm text-text-secondary mb-2">Medium Nodes</p>
                                <p className="text-xs text-text-tertiary">
                                    Specialized skill areas and subtopic groups
                                </p>
                            </div>
                            <div className="p-4 rounded-lg bg-orange-400/10 border border-orange-400/30">
                                <p className="text-sm text-text-secondary mb-2">Neon Flow</p>
                                <p className="text-xs text-text-tertiary">
                                    Animated edges showing skill relationships
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
