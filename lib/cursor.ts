/**
 * Cursor Tracking Utility
 * Smooth GSAP-powered cursor following with mobile detection
 */

import gsap from 'gsap';

interface CursorConfig {
    selector: string;
    duration?: number;
    ease?: string;
    disabled?: boolean;
}

/**
 * Check if device supports touch
 */
export const isTouchDevice = (): boolean => {
    if (typeof window === 'undefined') return false;
    return (
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        // @ts-ignore
        (navigator.msMaxTouchPoints > 0) ||
        (window.matchMedia && window.matchMedia('(pointer: coarse)').matches)
    );
};

/**
 * Setup smooth cursor movement using GSAP quickTo
 * Follows mouse movement with smooth easing
 */
export const setupCursorTracking = (config: CursorConfig = { selector: '.flair' }): (() => void) => {
    const { selector, duration = 0.6, ease = 'power3.out', disabled = false } = config;

    // Disable on touch devices
    if (isTouchDevice() || disabled) {
        const element = document.querySelector(selector);
        if (element) {
            (element as HTMLElement).style.display = 'none';
        }
        return () => { };
    }

    const element = document.querySelector<HTMLElement>(selector);
    if (!element) return () => { };

    // Use GSAP quickTo for optimal performance
    const xTo = gsap.quickTo(element, 'x', {
        duration,
        ease,
    });

    const yTo = gsap.quickTo(element, 'y', {
        duration,
        ease,
    });

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
    };

    // Add event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Return cleanup function
    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
    };
};

/**
 * Initialize flair element if it doesn't exist
 */
export const initializeFlairElement = (): void => {
    if (typeof document === 'undefined') return;

    const existing = document.querySelector('.flair');
    if (existing) return;

    const flair = document.createElement('div');
    flair.className = 'flair flair--3';
    flair.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        border: 2px solid rgba(255, 125, 0, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        --x: 0;
        --y: 0;
        transform: translate(var(--x), var(--y));
        xPercent: -50;
        yPercent: -50;
    `;

    document.body.appendChild(flair);
};
