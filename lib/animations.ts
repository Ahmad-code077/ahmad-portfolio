/**
 * GSAP Animation Utilities
 * Reusable animation patterns for portfolio sections with proper cleanup
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/**
 * Fade in and slide up animation on scroll
 * Only triggers when element fully enters viewport
 * Proper cleanup to prevent memory leaks
 */
export const setupFadeInUp = (element: HTMLElement | null, delay: number = 0) => {
    if (!element) return () => { };

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
    if (!container) return () => { };

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
 * Laptop key opening animation for intro
 * Creates a cinematic 3-5 second animation
 */
export const laptopOpenAnimation = (): Promise<void> => {
    return new Promise((resolve) => {
        const timeline = gsap.timeline({
            onComplete: resolve,
        });

        // Key press animation
        const keyElement = document.getElementById("intro-key");
        const screenElement = document.getElementById("intro-screen");

        if (keyElement && screenElement) {
            timeline
                // Key presses (cascade effect)
                .to(
                    keyElement,
                    {
                        y: 4,
                        duration: 0.1,
                        repeat: 3,
                        yoyo: true,
                    },
                    0
                )
                // Screen glow and reveal
                .to(
                    screenElement,
                    {
                        opacity: 0,
                        duration: 0,
                    },
                    0
                )
                .to(
                    screenElement,
                    {
                        opacity: 1,
                        duration: 0.6,
                    },
                    0.5
                )
                // Content fade in
                .to(
                    "#intro-content",
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                    },
                    1
                );
        }

        // If elements don't exist, resolve immediately
        if (!keyElement || !screenElement) {
            resolve();
        }
    });
};

/**
 * Hover card lift animation
 * Used for projects and skill cards
 */
export const setupCardHoverAnimation = (element: HTMLElement) => {
    if (!element) return;

    element.addEventListener("mouseenter", () => {
        gsap.to(element, {
            y: -8,
            boxShadow: "0 20px 40px rgba(255, 125, 0, 0.15)",
            duration: 0.3,
            ease: "power2.out",
        });
    });

    element.addEventListener("mouseleave", () => {
        gsap.to(element, {
            y: 0,
            boxShadow: "var(--shadow-md)",
            duration: 0.3,
            ease: "power2.out",
        });
    });
};

/**
 * Text gradient animation
 * Animates gradient text on scroll
 */
export const gradientTextAnimation = (element: HTMLElement) => {
    if (!element) return;

    return gsap.to(element, {
        backgroundPosition: "200% center",
        duration: 2,
        repeat: -1,
        ease: "linear",
        yoyo: true,
    });
};

/**
 * Number counter animation
 * For impact metrics
 */
export const countUpAnimation = (
    element: HTMLElement,
    targetNumber: number,
    duration: number = 2
) => {
    if (!element) return;

    return gsap.to(element, {
        textContent: targetNumber,
        duration,
        ease: "power1.inOut",
        snap: { textContent: 1 },
        onUpdate: function () {
            if (element && this.targets()) {
                element.textContent = Math.ceil(this.progress() * targetNumber).toString();
            }
        },
    });
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
