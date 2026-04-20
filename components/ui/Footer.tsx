'use client';

import { useEffect } from 'react';
import { contactLinks } from '@/lib/data';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MorphSVGPlugin from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        // SVG Paths
        const down = 'M0-0.3C0-0.3,464,156,1139,156S2278-0.3,2278-0.3V683H0V-0.3z';
        const center = 'M0-0.3C0-0.3,464,0,1139,0s1139-0.3,1139-0.3V683H0V-0.3z';

        // ScrollTrigger for bouncy animation
        ScrollTrigger.create({
            trigger: '.footer-wave',
            start: 'top bottom',
            toggleActions: 'play pause resume reverse',
            onEnter: () => {
                const velocity = (gsap.getProperty(window, 'scrollVelocity') as number) || 0;
                const variation = velocity / 10000;

                gsap.fromTo('#bouncy-path', {
                    morphSVG: down
                }, {
                    duration: 2,
                    morphSVG: center,
                    ease: `elastic.out(${1 + Math.min(variation, 0.5)}, ${Math.max(1 - variation, 0.3)})`,
                    overwrite: 'auto' as const
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger?.classList.contains('footer-wave')) {
                    trigger.kill();
                }
            });
        };
    }, []);

    return (
        <>
            {/* Spacer to enable scroll effect */}
            <div className="h-96" />

            {/* Bouncy Footer SVG - positioned to flow into footer */}
            <div className="footer-wave relative w-full h-0 overflow-visible">
                <svg
                    preserveAspectRatio="none"
                    id="footer-img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2278 683"
                    className="absolute top-0 left-0 w-full"
                    style={{ height: '320px' }}
                >
                    <defs>
                        <linearGradient
                            id="grad-footer"
                            x1="0"
                            y1="0"
                            x2="2278"
                            y2="683"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.2" stopColor="rgb(120 41 15 / 0.5)" />
                            <stop offset="0.8" stopColor="rgb(120 41 15 / 0.2)" />
                        </linearGradient>
                    </defs>
                    <path
                        id="bouncy-path"
                        fill="url(#grad-footer)"
                        d="M0-0.3C0-0.3,464,156,1139,156S2278-0.3,2278-0.3V683H0V-0.3z"
                    />
                </svg>
            </div>

            {/* Footer Content */}
            <footer className="relative w-full   pt-24">
                <div className="container py-16">
                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        {/* Brand Section */}
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">Muhammad Ahmad</h3>
                            <p className="text-text-secondary">
                                Full Stack + AI Engineer. Building scalable systems and intelligent pipelines.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                            <div className="space-y-2">
                                {contactLinks.slice(0, 3).map((link) => (
                                    <a
                                        key={link.platform}
                                        href={link.url}
                                        target={link.platform !== 'Email' ? '_blank' : undefined}
                                        rel={link.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                                        className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm"
                                    >
                                        <span>{link.platform}</span>
                                        <span>→</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-border my-8" />

                    {/* Bottom */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-text-tertiary text-sm">
                            © {currentYear} Muhammad Ahmad. All rights reserved.
                        </p>
                        <p className="text-text-tertiary text-sm">
                            Built with Next.js 15, TypeScript, and GSAP.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
