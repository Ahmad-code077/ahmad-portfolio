'use client';

import React, { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// React fires every descendant's useEffect before this component's own
// useEffect (children-before-parent). Any section that creates its own
// ScrollTrigger in a useEffect would otherwise run before ScrollSmoother
// exists, get created against the plain-scroll coordinate system, and
// never fire correctly once ScrollSmoother takes over. useLayoutEffect
// runs in its own earlier phase (still children-before-parent, but that
// phase fully completes before any useEffect anywhere in the tree starts),
// so creating the smoother here guarantees it exists first — no matter
// how deep the pinned/triggered section lives in the tree.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Wraps the page in GSAP ScrollSmoother for a buttery scroll feel.
 * Children render unconditionally (SSR + no-JS): the wrapper/content divs
 * are plain in-flow elements until this effect runs, so a user without
 * JavaScript (or with reduced motion) just gets normal native scrolling.
 */
export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        ScrollTrigger.config({ ignoreMobileResize: true });

        const mm = gsap.matchMedia();

        mm.add('(prefers-reduced-motion: no-preference)', () => {
            const smoother = ScrollSmoother.create({
                wrapper: wrapperRef.current!,
                content: contentRef.current!,
                smooth: 1.2,
                smoothTouch: 0.1,
                effects: false,
                normalizeScroll: true,
            });

            return () => smoother.kill();
        });

        document.fonts?.ready.then(() => ScrollTrigger.refresh());

        return () => mm.revert();
    }, []);

    return (
        <div ref={wrapperRef} id="smooth-wrapper">
            <div ref={contentRef} id="smooth-content">
                {children}
            </div>
        </div>
    );
};
