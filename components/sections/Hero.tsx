'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-driven zoom intro: a card of text scales up from the center until
 * its white fill floods the viewport, then fades to reveal About underneath.
 * Only enhanced for JS + motion-ok visitors (see prefers-reduced-motion
 * branch below) — everyone else gets one normal, fully visible viewport.
 */
export const Hero: React.FC = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const stageRef = useRef<HTMLDivElement>(null);
    const floodRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const cueRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!trackRef.current || !stageRef.current || !floodRef.current || !textRef.current) return;

        const mm = gsap.matchMedia();

        mm.add('(prefers-reduced-motion: no-preference)', () => {
            gsap.set(trackRef.current, { minHeight: '250vh' });

            const tl = gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: {
                    trigger: trackRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true,
                    pin: stageRef.current,
                    invalidateOnRefresh: true,
                },
            });

            tl.to(floodRef.current, { scale: 42, duration: 1 }, 0)
                .to([textRef.current, cueRef.current], { opacity: 0, duration: 0.2 }, 0.08)
                .to(floodRef.current, { opacity: 0, duration: 0.16 }, 0.84);

            return () => {
                gsap.set(trackRef.current, { clearProps: 'minHeight' });
            };
        });

        document.fonts?.ready.then(() => ScrollTrigger.refresh());

        return () => mm.revert();
    }, []);

    return (
        <section
            id="hero"
            ref={trackRef}
            className="hero-track relative w-full min-h-screen"
            suppressHydrationWarning
        >
            <div
                ref={stageRef}
                className="hero-stage h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] w-full flex items-center justify-center overflow-hidden bg-background px-6"
            >
                <div
                    ref={floodRef}
                    className="hero-flood origin-center relative flex flex-col items-center gap-1 md:gap-2 rounded-[2rem] bg-white px-10 py-10 sm:px-14 sm:py-12 md:px-20 md:py-16 text-center"
                >
                    <div ref={textRef} className="flex flex-col items-center gap-1 md:gap-2">
                        <p className="font-mono text-base sm:text-lg md:text-2xl text-[#001524]/70">
                            so I build
                        </p>
                        <p className="font-mono text-base sm:text-lg md:text-2xl text-[#001524]/70">
                            backend systems
                        </p>
                        <h1 className="font-mono text-5xl sm:text-7xl md:text-9xl font-bold tracking-tight text-[#001524] leading-none py-1">
                            Ahmad
                        </h1>
                        <p className="font-mono text-base sm:text-lg md:text-2xl text-[#001524]/70">
                            built to hold under load.
                        </p>
                    </div>
                </div>

                <div
                    ref={cueRef}
                    className="hero-scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-tertiary"
                >
                    <span className="font-mono text-xs tracking-wide">scroll</span>
                    <span className="hero-scroll-cue__line" aria-hidden="true" />
                </div>
            </div>
        </section>
    );
};
