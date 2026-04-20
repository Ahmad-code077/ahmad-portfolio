'use client';

import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section } from '@/components/ui/Section';
import { BentoGallery } from '@/components/ui/BentoGallery';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
    { src: '/test.jpeg', alt: 'Code and Technology' },
    { src: '/test.jpeg', alt: 'Development' },
    { src: '/test.jpeg', alt: 'Engineering' },
    { src: '/test.jpeg', alt: 'Innovation' },
    { src: '/test.jpeg', alt: 'Problem Solving' },
    { src: '/test.jpeg', alt: 'Full Stack' },
    { src: '/test.jpeg', alt: 'Backend Systems' },
    { src: '/test.jpeg', alt: 'AI & ML' },
];

export const About: React.FC = () => {
    return (
        <div id="about" title="About Me" bgColor="surface">
            {/* Bento Gallery */}
            <BentoGallery images={galleryImages} />

            {/* About Content Section */}
            <div className="w-full py-20 px-4 md:px-20">
                <div className="max-w-4xl mx-auto space-y-6">
                    <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                        I&apos;m Muhammad Ahmad, a Full Stack Engineer with 2+ years of hands-on experience building production-grade applications. I specialize in creating scalable, real-time platforms that solve real problems.
                    </p>

                    <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                        From building social platforms with real-time chat and payments (Xissed, SurgeryTrust) to architecting healthcare solutions, I bring technical discipline and problem-solving to every project. I&apos;m passionate about clean code, performance optimization, and creating systems that scale.
                    </p>

                    <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                        Currently at <span className="text-primary font-semibold">Algotix.ai</span>, building AI pipelines and RAG systems. Always learning, always shipping.
                    </p>

                    <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                        I believe in engineering with intention. Every feature matters. Every millisecond counts. Every line of code should tell a story. My approach combines theoretical knowledge with pragmatic solutions, always keeping the user and system health in mind.
                    </p>

                    <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                        Beyond code, I enjoy exploring new technologies, contributing to open-source projects, and mentoring junior developers. I&apos;m always open to interesting projects and conversations about building the future of technology.
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
        </div>
    );
};
