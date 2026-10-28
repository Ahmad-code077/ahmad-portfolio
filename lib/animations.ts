/**
 * GSAP Animation Utilities
 * Reusable animation patterns for portfolio sections with proper cleanup
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { prefersReducedMotion } from "./gsap";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/**
 * Fade in and slide up animation on scroll
 * Only triggers when element fully enters viewport
 * Proper cleanup to prevent memory leaks
 */
export const setupFadeInUp = (element: HTMLElement | null, delay: number = 0) => {
    if (!element || prefersReducedMotion()) return () => { };

    // Set initial state
    gsap.set(element, { opacity: 0, y: 40 });

    const animation = gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: "power3.out",
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "top 65%",
            once: true, // Only animate once
            invalidateOnRefresh: true,
        },
    });

    // Return cleanup function
    return () => {
        animation.kill();
        ScrollTrigger.getAll().forEach((trigger) => {
            if (trigger.trigger === element) trigger.kill();
        });
    };
};

/**
 * Stagger reveal for lists of items
 * Used for skills, projects, timeline
 */
export const setupStaggerChildren = (
    container: HTMLElement | null,
    itemSelector: string,
    staggerDelay: number = 0.1
) => {
    if (!container || prefersReducedMotion()) return () => { };

    const items = container.querySelectorAll(itemSelector);
    if (items.length === 0) return () => { };

    // Set initial state for all items
    gsap.set(items, { opacity: 0, y: 20 });

    const animation = gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: staggerDelay,
        ease: "power2.out",
        scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "top 60%",
            once: true, // Only animate once
            invalidateOnRefresh: true,
        },
    });

    // Return cleanup function
    return () => {
        animation.kill();
        ScrollTrigger.getAll().forEach((trigger) => {
            if (trigger.trigger === container) trigger.kill();
        });
    };
};

/**
 * Smooth scroll to element with custom offset
 */
export const smoothScrollTo = (targetId: string, offset: number = 80) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    gsap.to(window, {
        scrollTo: {
            y: element,
            offsetY: offset,
        },
        duration: 0.8,
        ease: "power2.inOut",
    });
};
