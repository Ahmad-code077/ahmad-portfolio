'use client';

import React, { useEffect, useRef } from 'react';
import { setupFadeInUp } from '@/lib/animations';
import { BentoGallery } from '@/components/ui/BentoGallery';

const galleryImages = [
    { src: '/test.jpeg', alt: 'Code and Technology' },
    { src: '/test.jpeg', alt: 'Development' },
    { src: '/test.jpeg', alt: 'Engineering' },
    { src: '/test.jpeg', alt: 'Innovation' },
    { src: '/test.jpeg', alt: 'Problem Solving' },
    { src: '/test.jpeg', alt: 'Full Stack' },
    { src: '/test.jpeg', alt: 'Backend Systems' },
];

const facts = [
    { label: 'Role', value: 'Backend & AI Engineer' },
    { label: 'Focus', value: 'Real-time systems, RAG pipelines' },
    { label: 'Currently', value: 'Algotix.ai' },
    { label: 'Experience', value: '2+ years' },
    { label: 'Shipped', value: '10+ live projects' },
];

export const About: React.FC = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cleanup = setupFadeInUp(contentRef.current);
        return cleanup;
    }, []);

    return (
        <div id="about" title="About Me">
            {/* Bento Gallery */}
            <BentoGallery images={galleryImages} />

            {/* About Content */}
            <div className="w-full py-20 px-6 md:px-8">
                <div
                    ref={contentRef}
                    className="container max-w-5xl grid md:grid-cols-[1fr_260px] gap-10 md:gap-16"
                >
                    <div className="space-y-5 max-w-prose">
                        <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                            I&apos;m Muhammad Ahmad, a full-stack engineer with 2+ years building
                            production systems — real-time chat, payments, and healthcare platforms
                            like Xissed and SurgeryTrust.
                        </p>
                        <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                            At <span className="text-primary font-semibold">Algotix.ai</span> I build
                            AI pipelines and RAG systems. Before that: social platforms, booking
                            flows, and the backend plumbing — queues, auth, schemas — that keeps them
                            running under load.
                        </p>
                        <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                            I care about systems that stay fast and correct after the demo ends:
                            clean schemas, sane queues, and code a teammate can still read six months
                            later.
                        </p>
                    </div>

                    <dl className="space-y-4 border-t md:border-t-0 md:border-l border-border/20 pt-6 md:pt-0 md:pl-8">
                        {facts.map((fact) => (
                            <div key={fact.label}>
                                <dt className="font-mono text-xs text-text-tertiary">{fact.label}</dt>
                                <dd className="text-foreground font-medium mt-0.5">{fact.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};
