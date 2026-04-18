'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SkillCardProps {
    name: string;
    level: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
    yearsOfExperience: number;
}

const levelConfig = {
    Expert: { width: '100%', color: 'from-primary to-orange-400', label: 'Expert' },
    Advanced: { width: '85%', color: 'from-primary to-orange-300', label: 'Advanced' },
    Intermediate: { width: '70%', color: 'from-orange-400 to-orange-300', label: 'Intermediate' },
    Beginner: { width: '45%', color: 'from-orange-300 to-orange-200', label: 'Beginner' },
};

export const SkillCard: React.FC<SkillCardProps> = ({ name, level, yearsOfExperience }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const config = levelConfig[level];

    useEffect(() => {
        if (!barRef.current) return;

        // Set initial state
        gsap.set(barRef.current, { scaleX: 0, transformOrigin: 'left' });

        // Animate on scroll
        gsap.to(barRef.current, {
            scaleX: 1,
            duration: 0.8,
            delay: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: barRef.current,
                start: 'top 85%',
                once: true,
                invalidateOnRefresh: true,
            },
        });
    }, []);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseEnter = () => {
            gsap.to(card, {
                y: -6,
                boxShadow: '0 16px 32px rgba(255, 125, 0, 0.2)',
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        const handleMouseLeave = () => {
            gsap.to(card, {
                y: 0,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="p-4 rounded-lg border border-border bg-surface/20 backdrop-blur-sm transition-all duration-300"
        >
            {/* Header: Name and Experience */}
            <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-text-primary text-sm md:text-base line-clamp-2">
                    {name}
                </h4>
                <span className="text-xs text-text-tertiary whitespace-nowrap ml-2 flex-shrink-0">
                    {yearsOfExperience}+y
                </span>
            </div>

            {/* Proficiency Bar */}
            <div className="space-y-2">
                <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div
                        ref={barRef}
                        className={`h-full rounded-full bg-linear-to-r ${config.color}`}
                        style={{ width: config.width }}
                    />
                </div>
                <p className="text-xs text-text-secondary font-medium">{config.label}</p>
            </div>
        </div>
    );
};
