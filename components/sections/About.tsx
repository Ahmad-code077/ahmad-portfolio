'use client';

import React, { useEffect } from 'react';
import { setupFadeInUp } from '@/lib/animations';
import { Section } from '@/components/ui/Section';

export const About: React.FC = () => {
    const contentRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cleanup = setupFadeInUp(contentRef.current);
        return cleanup;
    }, []);

    return (
        <Section id="about" title="About Me" bgColor="surface">
            <div className="grid md:grid-cols-2 gap-12 items-center" ref={contentRef}>
                {/* Avatar Placeholder */}
                <div className="flex justify-center md:justify-start">
                    <div className="w-48 h-48 md:w-56 md:h-56 bg-linear-to-br from-primary/20 to-primary/5 border-2 border-primary rounded-2xl flex items-center justify-center shrink-0">
                        <span className="text-6xl md:text-7xl">👨‍💻</span>
                    </div>
                </div>

                {/* Bio */}
                <div className="space-y-6">
                    <p className="text-lg text-text-secondary leading-relaxed">
                        I&apos;m Muhammad Ahmad, a Full Stack Engineer with 2+ years of hands-on experience building production-grade applications. I specialize in creating scalable, real-time platforms that solve real problems.
                    </p>

                    <p className="text-lg text-text-secondary leading-relaxed">
                        From building social platforms with real-time chat and payments (Xissed, SurgeryTrust) to architecting healthcare solutions, I bring technical discipline and problem-solving to every project. I&apos;m passionate about clean code, performance optimization, and creating systems that scale.
                    </p>

                    <p className="text-lg text-text-secondary leading-relaxed">
                        Currently at <span className="text-primary font-semibold">Algotix.ai</span>, building AI pipelines and RAG systems. Always learning, always shipping.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-6">
                        <div className="bg-background rounded-lg p-4 border border-border">
                            <div className="text-3xl font-bold text-primary">2+</div>
                            <p className="text-text-secondary text-sm mt-1">Years Experience</p>
                        </div>
                        <div className="bg-background rounded-lg p-4 border border-border">
                            <div className="text-3xl font-bold text-primary">10+</div>
                            <p className="text-text-secondary text-sm mt-1">Live Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
