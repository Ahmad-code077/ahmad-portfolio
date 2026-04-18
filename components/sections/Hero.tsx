'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const Hero: React.FC = () => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Wait for fonts to be ready
        if (document.fonts) {
            document.fonts.ready.then(() => {
                animateHeading();
            });
        } else {
            // Fallback: animate after a small delay
            setTimeout(() => animateHeading(), 200);
        }

        function animateHeading() {
            if (!headingRef.current) return;

            // Get all words
            const heading = headingRef.current;
            const words = heading.textContent?.split(/\s+/) || [];
            heading.innerHTML = '';

            // Create spans for each word
            words.forEach((word) => {
                const span = document.createElement('span');
                span.textContent = word;
                span.style.display = 'inline-block';
                span.style.marginRight = '0.25em';
                span.style.willChange = 'transform, opacity';
                heading.appendChild(span);
            });

            const wordSpans = heading.querySelectorAll('span');

            // Set initial state - hidden
            gsap.set(wordSpans, {
                opacity: 0,
                y: -100,
                rotation: () => gsap.utils.random(-80, 80),
            });

            // Animate each word
            gsap.to(wordSpans, {
                opacity: 1,
                y: 0,
                rotation: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'back.out',
                delay: 0.2,
            });
        }
    }, []);

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative w-full h-screen flex items-center justify-center px-6 md:px-8 bg-background overflow-hidden"
        >
            <div className="w-full max-w-4xl text-center space-y-8">
                {/* Main Heading with SplitText Animation */}
                <h1
                    ref={headingRef}
                    className="text-6xl sm:text-7xl md:text-8xl font-bold leading-tight tracking-tight text-foreground"
                >
                    Building Production-Grade Systems
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-2xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
                    Full-stack engineer crafting scalable architectures, real-time systems, and AI-driven solutions.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            gsap.to(window, {
                                scrollTo: { y: '#projects', offsetY: 80 },
                                duration: 0.8,
                                ease: 'power2.inOut',
                            });
                        }}
                        className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-orange-500 transition-colors duration-300"
                    >
                        Explore My Work
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            gsap.to(window, {
                                scrollTo: { y: '#contact', offsetY: 80 },
                                duration: 0.8,
                                ease: 'power2.inOut',
                            });
                        }}
                        className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors duration-300"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};
