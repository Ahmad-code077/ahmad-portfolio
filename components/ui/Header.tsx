'use client';

import { useState, useRef, useEffect } from 'react';
import { smoothScrollTo } from '@/lib/animations';
import gsap from 'gsap';

const NAV_LINKS = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

const BRAND_NAME = 'Ahmad';

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const navItemsRef = useRef<HTMLButtonElement[] | null[]>([]);
    const desktopNavRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);
    const isAnimatingRef = useRef(false);

    useEffect(() => {
        gsap.set(sidebarRef.current, { x: '100%', visibility: 'hidden' });
        gsap.set(overlayRef.current, { opacity: 0, visibility: 'hidden', pointerEvents: 'none' });
    }, []);

    useEffect(() => {
        if (!desktopNavRef.current) return;
        const links = desktopNavRef.current.querySelectorAll('a, button');
        gsap.set(links, { opacity: 0, y: -10 });
        gsap.to(links, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'back.out(1.2)',
            delay: 0.2,
        });
    }, []);

    useEffect(() => {
        if (!sidebarRef.current || !overlayRef.current) return;

        if (isOpen) {
            document.documentElement.style.overflowX = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflowX = 'auto';
            document.body.style.overflow = 'unset';
        }

        if (timelineRef.current) timelineRef.current.kill();
        isAnimatingRef.current = true;

        if (isOpen) {
            timelineRef.current = gsap.timeline({
                onComplete: () => (isAnimatingRef.current = false),
            });

            gsap.set([sidebarRef.current, overlayRef.current], { visibility: 'visible' });

            timelineRef.current.to(overlayRef.current, { opacity: 1, pointerEvents: 'auto', duration: 0.3, ease: 'power2.out' }, 0);
            timelineRef.current.to(sidebarRef.current, { x: '0%', duration: 0.5, ease: 'power3.out' }, 0);
            timelineRef.current.to(navItemsRef.current.filter(Boolean), { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: 'back.out(1.4)' }, 0.2);
        } else {
            timelineRef.current = gsap.timeline({
                onComplete: () => {
                    gsap.set([sidebarRef.current, overlayRef.current], { visibility: 'hidden' });
                    isAnimatingRef.current = false;
                },
            });

            timelineRef.current.to(navItemsRef.current.filter(Boolean), { opacity: 0, x: 20, duration: 0.3, stagger: -0.05, ease: 'power2.in' }, 0);
            timelineRef.current.to(sidebarRef.current, { x: '100%', duration: 0.4, ease: 'power3.in' }, 0.1);
            timelineRef.current.to(overlayRef.current, { opacity: 0, pointerEvents: 'none', duration: 0.3, ease: 'power2.in' }, 0);
        }
    }, [isOpen]);

    const handleNavClick = async (id: string) => {
        if (isAnimatingRef.current) return;
        isAnimatingRef.current = true;

        if (isOpen) {
            const closeTimeline = gsap.timeline({
                onComplete: () => {
                    gsap.set([sidebarRef.current, overlayRef.current], { visibility: 'hidden' });
                },
            });

            closeTimeline.to(navItemsRef.current.filter(Boolean), { opacity: 0, x: 20, duration: 0.3, stagger: -0.05, ease: 'power2.in' }, 0);
            closeTimeline.to(sidebarRef.current, { x: '100%', duration: 0.4, ease: 'power3.in' }, 0.1);
            closeTimeline.to(overlayRef.current, { opacity: 0, pointerEvents: 'none', duration: 0.3, ease: 'power2.in' }, 0);
            await closeTimeline;
        }

        setIsOpen(false);

        if (id === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            smoothScrollTo(id, 80);
        }

        isAnimatingRef.current = false;
    };

    const handleMenuToggle = () => {
        if (!isAnimatingRef.current) setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border">
                <div className="container">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <button
                            onClick={() => handleNavClick('hero')}
                            className="font-bold text-lg md:text-xl text-primary hover:text-primary/80 transition-colors"
                            aria-label="Ahmad - Portfolio Home"
                        >
                            {BRAND_NAME}
                        </button>

                        <nav
                            ref={desktopNavRef}
                            className="hidden md:flex items-center gap-8"
                            aria-label="Main navigation"
                        >
                            {NAV_LINKS.slice(0, -1).map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => handleNavClick(link.id)}
                                    className="text-text-secondary hover:text-foreground transition-colors text-sm font-medium"
                                    aria-label={`Navigate to ${link.label}`}
                                >
                                    {link.label}
                                </button>
                            ))}
                            <button
                                onClick={() => handleNavClick('contact')}
                                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors text-sm font-medium"
                                aria-label="Contact me"
                            >
                                Contact
                            </button>
                        </nav>

                        <button
                            onClick={handleMenuToggle}
                            className="md:hidden p-2 hover:bg-surface rounded-lg transition-colors"
                            aria-label="Toggle mobile navigation menu"
                            aria-expanded={isOpen}
                            aria-controls="mobile-sidebar"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <div
                ref={overlayRef}
                onClick={() => handleNavClick('hero')}
                className="fixed inset-0 bg-black/50 md:hidden"
                style={{ zIndex: 40, pointerEvents: isOpen ? 'auto' : 'none' }}
                aria-hidden="true"
            />

            <nav
                id="mobile-sidebar"
                ref={sidebarRef}
                className="fixed top-0 right-0 h-screen w-64 bg-background border-l border-border md:hidden overflow-hidden"
                style={{ zIndex: 45, paddingTop: '80px' }}
                aria-label="Mobile navigation"
            >
                <button
                    onClick={() => handleNavClick('hero')}
                    className="absolute top-6 right-6 p-2 hover:bg-surface rounded-lg transition-colors"
                    aria-label="Close mobile menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <div className="px-4 space-y-2">
                    {NAV_LINKS.map((link, index) => (
                        <button
                            key={link.id}
                            ref={(el) => {
                                if (el) navItemsRef.current[index] = el;
                            }}
                            onClick={() => handleNavClick(link.id)}
                            className="block w-full text-left px-4 py-3 text-text-secondary hover:text-foreground hover:bg-surface rounded-lg transition-colors text-sm font-medium"
                            style={{ opacity: 0, transform: 'translateX(20px)' }}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </nav>
        </>
    );
};
