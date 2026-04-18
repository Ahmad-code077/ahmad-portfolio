'use client';

import React, { useEffect } from 'react';
import { setupFadeInUp, smoothScrollTo } from '@/lib/animations';
import { Button } from '@/components/ui/Button';
import { GradientText } from '@/components/ui/GradientText';
import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/ui/Section';

export const Hero: React.FC = () => {
    const headlineRef = React.useRef<HTMLDivElement>(null);
    const subtitleRef = React.useRef<HTMLDivElement>(null);
    const specRef = React.useRef<HTMLDivElement>(null);
    const buttonsRef = React.useRef<HTMLDivElement>(null);
    const stackRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cleanups: Array<() => void> = [];

        if (headlineRef.current) {
            cleanups.push(setupFadeInUp(headlineRef.current, 0));
        }
        if (subtitleRef.current) {
            cleanups.push(setupFadeInUp(subtitleRef.current, 0.1));
        }
        if (specRef.current) {
            cleanups.push(setupFadeInUp(specRef.current, 0.2));
        }
        if (stackRef.current) {
            cleanups.push(setupFadeInUp(stackRef.current, 0.3));
        }
        if (buttonsRef.current) {
            cleanups.push(setupFadeInUp(buttonsRef.current, 0.4));
        }

        return () => {
            cleanups.forEach((cleanup) => cleanup());
        };
    }, []);

    const specialties = [
        'System Design',
        'API Development',
        'AI Integration',
        'Performance',
    ];

    const keyTechs = [
        'Next.js 15',
        'TypeScript',
        'PostgreSQL',
        'Node.js',
        'React',
        'GSAP',
    ];

    return (
        <Section id="hero" className="min-h-screen flex items-center justify-center py-20 md:py-28">

            <div className="w-full max-w-4xl space-y-10 md:space-y-12">
                {/* Headline */}
                <div ref={headlineRef} className="space-y-4">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                        <span className="text-foreground">Building</span>{' '}
                        <GradientText>Production-Grade</GradientText>
                        <br />
                        <span className="text-foreground">Systems & Applications</span>
                    </h1>
                </div>

                {/* Subheading - Engineering Focus */}
                <div ref={subtitleRef} className="space-y-3 max-w-3xl">
                    <h1 className="sr-only">Ahmads Portfolio - Full Stack & AI Engineer</h1>

                    <p className="text-lg md:text-xl font-semibold text-primary">

                        Full Stack + AI Engineer
                    </p>
                    <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                        I design and build scalable applications across the entire stack—from performant APIs and real-time systems to AI-integrated solutions. Focused on clean architecture, system design, and shipping products that scale.
                    </p>
                </div>

                {/* Specialties */}
                <div ref={specRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl">
                    {specialties.map((spec) => (
                        <div
                            key={spec}
                            className="group px-4 py-3 rounded-lg bg-surface/40 border border-border hover:border-primary/50 hover:bg-surface/60 transition-all duration-300"
                        >
                            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                {spec}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Tech Stack */}
                <div ref={stackRef} className="space-y-3">
                    <p className="text-xs md:text-sm font-semibold text-text-tertiary uppercase tracking-wider">
                        Core Tech Stack dummy text to test animation delay
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {keyTechs.map((tech) => (
                            <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs md:text-sm px-2.5 py-1.5"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* CTA Buttons */}
                <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => smoothScrollTo('projects', 120)}
                        className="w-full sm:w-auto"
                    >
                        Explore My Work
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => smoothScrollTo('contact', 120)}
                        className="w-full sm:w-auto"
                    >
                        Download Resume
                    </Button>
                </div>

                {/* Scroll Indicator */}
                <div className="pt-16 md:pt-20 animate-bounce hidden md:block">
                    <svg
                        className="w-6 h-6 mx-auto text-primary opacity-60 hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </Section>
    );
};
