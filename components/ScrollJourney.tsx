'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

/**
 * ScrollJourney Component - Cinematic Portfolio Tour Guide
 * A glowing element guides the user through sections with organic, storytelling motion
 */
export const ScrollJourney: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const journeyElementRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        if (!journeyElementRef.current || !svgRef.current) return;

        // Wait for full layout to be ready
        const initializeJourney = async () => {
            // Wait for fonts and layout
            if (document.fonts) {
                await document.fonts.ready;
            }
            // Additional layout stabilization delay
            await new Promise((resolve) => setTimeout(resolve, 300));

            updateJourneyPath();
        };

        initializeJourney();

        // Regenerate path on resize with debounce
        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                ScrollTrigger.refresh();
                updateJourneyPath();
            }, 300);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeout);
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, []);

    const updateJourneyPath = () => {
        if (!journeyElementRef.current || !svgRef.current) return;

        // Get all anchor points for the tour
        const anchors = getAnchorPoints();
        if (anchors.length < 2) {
            console.warn('Not enough anchors for journey animation');
            return;
        }

        // Generate organic curved path
        const pathData = generateOrganicPath(anchors);

        // Update SVG visualization
        const path = svgRef.current.querySelector('path') as SVGPathElement;
        if (path) {
            path.setAttribute('d', pathData);
        }

        // Kill previous animation
        if (animationRef.current) {
            animationRef.current.kill();
        }

        // Create new scroll-driven animation
        animationRef.current = gsap.to(journeyElementRef.current, {
            motionPath: {
                path: pathData,
                autoRotate: false,
                align: journeyElementRef.current,
            },
            duration: 1,
            ease: 'linear', // Linear with path curvature
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1.5, // Smooth scroll coupling with inertia
                markers: false,
            },
        });
    };

    /**
     * Get all anchor points that define the tour route
     * Creates a storytelling journey from About → Tech Stack
     */
    const getAnchorPoints = (): { x: number; y: number; id?: string }[] => {
        const points: { x: number; y: number; id?: string }[] = [];

        // Start: Near About avatar
        const aboutAvatar = document.querySelector('#anchor-about-avatar') as HTMLElement;
        if (aboutAvatar) {
            const rect = aboutAvatar.getBoundingClientRect();
            points.push({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
                id: 'about-avatar',
            });
        }

        // Intermediate: Upper part of About section (creation marker)
        const aboutStart = document.querySelector('#anchor-about-start') as HTMLElement;
        if (aboutStart) {
            const rect = document.querySelector('#about') as HTMLElement;
            if (rect) {
                const bboxRect = rect.getBoundingClientRect();
                points.push({
                    x: window.innerWidth * 0.25, // Left side
                    y: bboxRect.top + bboxRect.height * 0.3,
                    id: 'about-upper',
                });
            }
        }

        // Intermediate: Right side journey marker
        const aboutEnd = document.querySelector('#anchor-about-end') as HTMLElement;
        if (aboutEnd) {
            const rect = document.querySelector('#about') as HTMLElement;
            if (rect) {
                const bboxRect = rect.getBoundingClientRect();
                points.push({
                    x: window.innerWidth * 0.75, // Right side
                    y: bboxRect.top + bboxRect.height * 0.7,
                    id: 'about-right',
                });
            }
        }

        // Intermediate: Mid-journey point (between sections)
        const skillsStart = document.querySelector('#anchor-techstack-start') as HTMLElement;
        if (skillsStart) {
            const aboutRect = document.querySelector('#about') as HTMLElement;
            const skillsRect = document.querySelector('#skills') as HTMLElement;
            if (aboutRect && skillsRect) {
                const midY = (aboutRect.getBoundingClientRect().bottom +
                    skillsRect.getBoundingClientRect().top) / 2;
                points.push({
                    x: window.innerWidth * 0.5, // Center
                    y: midY,
                    id: 'journey-mid',
                });
            }
        }

        // Endpoint: Tech Stack section entrance
        if (skillsStart) {
            const rect = skillsStart.getBoundingClientRect();
            points.push({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
                id: 'techstack-entrance',
            });
        }

        return points;
    };

    /**
     * Generate organic, storytelling motion path
     * Creates curves, zig-zags, and subtle direction changes
     */
    const generateOrganicPath = (points: { x: number; y: number }[]): string => {
        if (points.length < 2) return '';

        let pathData = `M ${points[0].x} ${points[0].y}`;

        for (let i = 1; i < points.length; i++) {
            const prev = points[i - 1];
            const curr = points[i];
            const next = i < points.length - 1 ? points[i + 1] : null;

            // Calculate control points for smooth, organic curves
            // Higher curviness for natural storytelling feel
            const dx = curr.x - prev.x;
            const dy = curr.y - prev.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Curviness factor (2-3 for organic feel)
            const curviness = 2.5;
            const controlDistance = distance * 0.4;

            // First control point (from previous segment)
            let cp1x = prev.x + controlDistance;
            let cp1y = prev.y + dy * 0.3;

            // Second control point (to next segment)
            let cp2x = curr.x - controlDistance;
            let cp2y = curr.y - dy * 0.3;

            // Add slight jitter for zig-zag motion (creates guided tour feel)
            if (i % 2 === 0) {
                cp1x += window.innerWidth * 0.05; // Right bias
                cp2x -= window.innerWidth * 0.05;
            } else {
                cp1x -= window.innerWidth * 0.05; // Left bias
                cp2x += window.innerWidth * 0.05;
            }

            // Create cubic bezier curve
            pathData += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
        }

        return pathData;
    };

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-40"
            style={{
                perspective: '1200px',
            }}
        >
            {/* SVG Path Visualization - Shows the guided tour route */}
            <svg
                ref={svgRef}
                className="absolute inset-0 w-full h-full"
                style={{
                    filter: 'drop-shadow(0 0 15px rgba(255, 125, 0, 0.15))',
                    overflow: 'visible',
                }}
            >
                {/* Main path */}
                <path
                    d="M 0 0 L 0 0"
                    fill="none"
                    stroke="url(#pathGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    opacity="0.3"
                />

                {/* Gradient definition for path */}
                <defs>
                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgb(255, 125, 0)" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="rgb(255, 125, 0)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="rgb(255, 125, 0)" stopOpacity="0.6" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Animated Journey Element - The Tour Guide */}
            <div
                ref={journeyElementRef}
                className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-2xl"
                style={{
                    left: '-28px',
                    top: '-28px',
                    background: 'linear-gradient(135deg, rgb(255, 125, 0) 0%, rgb(255, 165, 0) 100%)',
                    boxShadow: `
                        0 0 40px rgba(255, 125, 0, 0.6),
                        0 0 60px rgba(255, 125, 0, 0.3),
                        0 0 20px rgba(255, 165, 0, 0.4) inset
                    `,
                    willChange: 'transform',
                }}
            >
                {/* Inner glow - pulsing effect */}
                <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255, 200, 100, 0.4) 0%, transparent 100%)',
                        animation: 'pulse-glow 3s ease-in-out infinite',
                    }}
                />

                {/* Center core - brightest point */}
                <div
                    className="absolute inset-2 rounded-lg"
                    style={{
                        background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 200, 0.8) 0%, rgba(255, 200, 100, 0.4) 100%)',
                    }}
                />

                {/* Trailing glow - motion indicator */}
                <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                        background: 'radial-gradient(circle at center, transparent 30%, rgba(255, 125, 0, 0.1) 100%)',
                        filter: 'blur(8px)',
                    }}
                />
            </div>

            {/* CSS for pulsing glow animation */}
            <style>{`
                @keyframes pulse-glow {
                    0%, 100% {
                        opacity: 0.4;
                    }
                    50% {
                        opacity: 0.8;
                    }
                }
            `}</style>
        </div>
    );
};
